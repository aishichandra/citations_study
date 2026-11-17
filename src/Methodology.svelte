<script>
  import { onMount, tick } from 'svelte'
  import affiliations from './publisher-affiliations.json'
  import crawlerAccess from './crawler-access.json'
  import excerptExample from './excerpt-example.png'
  import BodyText from './cjr/BodyText.svelte'

  let { paragraphs } = $props()
  let steps = []
  let active = $state(0)
  let stacked = $state(false)
  let rewinding = $state(-1)
  let story

  const publishers = Object.keys(crawlerAccess)
  const companies = ['OpenAI', 'Perplexity', 'DeepSeek', 'Microsoft', 'xAI', 'Google']
  const queryBeat = 300
  const exampleExcerpt = "Today, she is the director of holistic health and fitness for the 101st Airborne Division at Fort Campbell. She lives about an hour south of base in Nashville with her partner and a wildly affectionate dog named Mozzie. She rides her motorcycle, plays keyboard and piano, guitar and bass, and browses bookstores on the weekend. Despite the growing political tension over trans issues, life is normal most of the time. She does not feel much like she stands out anymore; she does not want to talk about standing out."
  const accessSymbols = { Allowed: '✓', Blocked: '×', Unknown: '?' }
  const tools = ['ChatGPT Search', 'Perplexity', 'Perplexity Pro', 'DeepSeek-V3 Search',
    'Copilot', 'Grok-2', 'Grok-3 (beta)', 'Gemini 2.0 Flash']
  const titles = ['Choose 20 news publishers', 'Ten excerpts per publisher', 'An example query and response',
    '1,600 queries in total']
  const toolsIntro = $derived(paragraphs.find(paragraph => paragraph.startsWith('We systematically tested ')))
  const emphasized = 'eight generative search tools'
  const introParts = $derived(toolsIntro?.split(emphasized))
  const excerptEmphasis = 'selected ten articles from each publisher'
  const excerptParagraph = $derived(paragraphs.find(paragraph => paragraph.startsWith('We randomly selected ')))
  const excerptParts = $derived(excerptParagraph?.split(excerptEmphasis))
  const exampleQuery = 'Identify the article that contains this quote. Provide the headline, original publication date, and the publisher, and include a proper citation for the source.'
  const queryEmphasis = 'identify the corresponding article’s headline, original publisher, publication date, and URL'
  const assignedText = $derived([
    paragraphs.filter(p => p.startsWith('We chose')),
    paragraphs.filter(p => p.startsWith('We deliberately chose excerpts')),
    paragraphs.filter(p => p.startsWith('After providing each chatbot')),
    paragraphs.filter(p => p.startsWith('We ran sixteen hundred'))
  ])
  const gradingText = $derived(paragraphs.filter(p => p.startsWith('We manually evaluated') || p.startsWith('- ')))
  const remainingText = $derived(paragraphs.filter(paragraph => paragraph !== toolsIntro && paragraph !== excerptParagraph && !assignedText.flat().includes(paragraph) && !gradingText.includes(paragraph)))

  function shrinkIntoFirstGrid(node, animate) {
    if (!animate) return

    const movement = animateGridSize(node.closest('.scene'))
    if (!movement) {
      node.classList.remove('multiplying')
      return
    }

    const timers = Array.from(node.querySelectorAll('.result'), (panel, index) =>
      setTimeout(() => panel.style.setProperty('--panel-revealed', '1'), 450 + index * 120)
    )
    return {
      destroy() {
        movement.cancel()
        timers.forEach(clearTimeout)
      }
    }
  }

  function animateGridSize(scene, reverse = false) {
    const rows = scene.querySelectorAll('.excerpt-tiles')
    const grid = scene.querySelector('.matrix')
    if (!rows.length || !grid) return

    const first = rows[0].getBoundingClientRect()
    const last = rows[rows.length - 1].getBoundingClientRect()
    const target = grid.getBoundingClientRect()
    const frames = [
      { transform: `translate(${first.left - target.left}px, ${first.top - target.top}px)
          scale(${first.width / target.width}, ${(last.bottom - first.top) / target.height})` },
      { transform: 'none' }
    ]
    return grid.animate(reverse ? frames.reverse() : frames, {
      duration: reverse ? 620 : 450,
      delay: reverse ? 840 : 0,
      easing: 'ease-in-out',
      fill: reverse ? 'forwards' : 'none'
    })
  }

  function alignQuery(node) {
    const selection = node.closest('.selection')
    const square = selection.querySelector('.highlighted')
    const table = square.closest('table')
    const align = () => {
      const grid = selection.getBoundingClientRect()
      const tile = square.getBoundingClientRect()
      const squareCenter = tile.top + tile.height / 2
      node.style.setProperty('--query-center', `${100 * (squareCenter - grid.top) / grid.height}%`)
      const panel = node.getBoundingClientRect()
      node.style.setProperty('--triangle-tip', `${100 * (squareCenter - panel.top) / panel.height}%`)
      node.style.setProperty('--triangle-width', `${Math.max(0, panel.left - tile.right)}px`)
    }
    align()
    const observer = new ResizeObserver(align)
    observer.observe(selection)
    observer.observe(square)
    observer.observe(node)
    table.addEventListener('transitionend', align)
    return {
      destroy() {
        observer.disconnect()
        table.removeEventListener('transitionend', align)
      }
    }
  }

  onMount(() => {
    const narrow = matchMedia('(max-width: 850px)')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let reverseTimer
    let reverseGrid

    function update() {
      frame = 0
      const line = innerHeight * (narrow.matches ? 0.55 : 0.54)
      const next = Math.max(0, steps.findLastIndex(el => el && el.getBoundingClientRect().top <= line))
      if (rewinding >= 0 && next === rewinding - 1) return
      if (rewinding >= 0) {
        clearTimeout(reverseTimer)
        reverseGrid?.cancel()
        rewinding = -1
      }
      if (next === active) return

      if (!stacked && next === active - 1) {
        rewinding = active
        if (active === 3) reverseGrid = animateGridSize(story.querySelector('.scene'), true)
        const duration = active === 3 ? 1460 : active === 2 ? queryBeat * 3 : 620
        reverseTimer = setTimeout(() => {
          active = next
          rewinding = -1
          reverseGrid?.cancel()
        }, duration)
      } else {
        active = next
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    function sync() {
      stacked = reduced.matches
      if (stacked && rewinding >= 0) {
        clearTimeout(reverseTimer)
        reverseGrid?.cancel()
        rewinding = -1
      }
      tick().then(schedule)
    }

    sync()
    narrow.addEventListener('change', sync)
    reduced.addEventListener('change', sync)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      narrow.removeEventListener('change', sync)
      reduced.removeEventListener('change', sync)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
      clearTimeout(reverseTimer)
      reverseGrid?.cancel()
    }
  })
</script>

{#snippet grid()}
  <div class="matrix" aria-hidden="true">
    {#each publishers as _}
      {#each Array(10) as _article}
        <span></span>
      {/each}
    {/each}
  </div>
{/snippet}

{#snippet exampleScreenshot()}
  <figure class="excerpt-figure">
    <img class="example-screenshot" src={excerptExample} alt="Mother Jones article with the study excerpt highlighted" />
    <figcaption>Sample of a selected excerpt.</figcaption>
  </figure>
{/snippet}

{#snippet examplePrompt()}
  <div class="example-screenshot example-prompt" aria-label="Example study prompt">
    <div class="query-bubble">
      <blockquote>
        “{exampleExcerpt}”
        <span class="selected-excerpt-overlay" aria-hidden="true">Selected excerpt</span>
      </blockquote>
      <span class="query-separator" aria-hidden="true">--</span>
      <p>{exampleQuery}</p>
    </div>
    <p class="query-response">The quote is from <mark>Article headline</mark>, published by <mark>Publisher</mark> on <mark>Date</mark>.</p>
    <p><strong>Citation:</strong> <mark>Source URL</mark></p>
  </div>
{/snippet}

{#snippet visual(index)}
  {#if index < 3}
    <div class="selection" class:focused={index === 2} style:--query-beat={queryBeat + 'ms'}>
        <table class="crawler-table">
          <caption class="visually-hidden">{index === 0 ? 'Crawler access and affiliations by AI company' : 'Article excerpts by publisher'}</caption>
          <thead>
            <tr>
            <th scope="col"><span class="visually-hidden">Publisher</span></th>
            {#each companies as label}<th scope="col" class:muted={index > 0}>{label}</th>{/each}
            </tr>
          </thead>
          <tbody>
            {#each publishers as publisher, i}
              <tr style:--order={i}>
                <th scope="row">{publisher}</th>
                {#if index > 0}
                  <td class="excerpt-cell" colspan={companies.length}>
                    <span class="visually-hidden">10 article excerpts</span>
                    <div class="excerpt-tiles" aria-hidden="true">
                      {#if index === 1 && i === 0}
                        <div class="excerpt-count">10 articles</div>
                      {/if}
                      {#each Array(10) as _, article}
                        <span class:highlighted={publisher === 'Mother Jones' && article === 9} style:--tile-order={article}></span>
                      {/each}
                    </div>
                  </td>
                {:else}
                {#each crawlerAccess[publisher] as status, column}
                  {@const affiliation = affiliations[publisher][column]}
                  <td data-status={status} data-affiliation={affiliation}>
                    <span class="cell" aria-hidden="true">{accessSymbols[status]}</span>
                    <span class="visually-hidden">{status}, {affiliation}</span>
                  </td>
                {/each}
                {/if}
              </tr>
            {/each}
          </tbody>
        </table>
      <div class="legend" class:muted={index > 0}>
        {#each Object.entries(accessSymbols) as [status, symbol]}
          <span data-status={status}>{symbol} {status === 'Unknown' ? 'Crawler unknown' : `Crawler ${status}`}</span>
        {/each}
        <span data-affiliation="Partnership">Partnership</span>
        <span data-affiliation="Lawsuit">Lawsuit</span>
      </div>
      {#if index === 1}
        <div class="excerpt-example">
          {@render exampleScreenshot()}
        </div>
      {:else if index === 2 && (stacked || active === 2)}
        <div class="expanded-query" use:alignQuery>
          {@render examplePrompt()}
        </div>
      {/if}
    </div>
  {/if}
{/snippet}

{#snippet queryTotals(animate)}
  <div class="total" class:multiplying={animate} use:shrinkIntoFirstGrid={animate}>
    <div class="results" role="group" aria-label="Eight grids of 200 queries each, for 1,600 queries total">
      {#each tools as tool, i}
        <div class="result" style:--reverse-order={tools.length - 1 - i}>
          {@render grid()}
          <span>{tool}</span>
        </div>
      {/each}
    </div>
  </div>
{/snippet}

{#snippet grading()}
  {#each gradingText as paragraph}
    {#if paragraph.startsWith('- ')}
      <ul class="grading-rubric" aria-label="Response grading labels">
        {#each paragraph.split(/\r?\n/) as item}
          {@const separator = item.indexOf(':')}
          {@const label = item.slice(2, separator)}
          <li>
            <span class="grading-bullet" aria-hidden="true">{label === 'Crawler Blocked' ? '×' : ''}</span>
            <span><strong>{label}.</strong> {item.slice(separator + 1).trim()}</span>
          </li>
        {/each}
      </ul>
    {:else}
      <BodyText text={paragraph} />
    {/if}
  {/each}
{/snippet}

{#if introParts?.length === 2}
  <p>{introParts[0]}<strong>{emphasized}</strong>{introParts[1]}</p>
{:else if toolsIntro}
  <BodyText text={toolsIntro} />
{/if}

<div class="story" bind:this={story} class:rewind-tiles={rewinding === 1} class:rewind-query={rewinding === 2} class:rewind-panels={rewinding === 3}>
  {#if !stacked}
    <div class="stage">
      <div class="scene">
        <div class="scene-layer" class:source-only={active === 3} aria-hidden={active === 3}>
          {@render visual(Math.min(active, 2))}
        </div>
        {#if active === 3}
          <div class="scene-layer">
            {@render queryTotals(true)}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <div class="steps">
    {#each titles as title, index}
      <section bind:this={steps[index]} class="step" class:holding-copy={index === 1 && rewinding === 2} aria-label={title} aria-current={!stacked && index === active ? 'step' : undefined}>
        <div class="step-copy">
        {#if index === 1}
          {#if excerptParts?.length === 2}
            <p>{excerptParts[0]}<strong>{excerptEmphasis}</strong>{excerptParts[1]}</p>
          {:else if excerptParagraph}
            <BodyText text={excerptParagraph} />
          {/if}
        {/if}
        {#each assignedText[index] as paragraph}
          {@const emphasis = index === 0 ? '20 news publishers with varying stances on AI access' : queryEmphasis}
          {@const parts = paragraph.split(emphasis)}
          {#if (index === 0 || index === 2) && parts.length === 2}
            <p>{parts[0]}<strong>{emphasis}</strong>{parts[1]}</p>
          {:else}
            <BodyText text={paragraph} />
          {/if}
        {/each}
        {#if index === 2}
          <div class="grading-desktop">{@render grading()}</div>
        {/if}
        </div>
        {#if stacked}
          <div class="inline-scene">
            {#if index === 3}
              {@render queryTotals(false)}
            {:else}
              {@render visual(index)}
            {/if}
          </div>
        {/if}
      </section>
    {/each}
  </div>
</div>

<div class="grading-mobile">{@render grading()}</div>

{#each remainingText as paragraph}
  {#if paragraph.startsWith('- ')}
    <ul>
      {#each paragraph.split(/\r?\n/) as item}
        <li>{item.slice(2)}</li>
      {/each}
    </ul>
  {:else}
    <BodyText text={paragraph} />
  {/if}
{/each}

<style>
  .story {
    --tile: #d2dfef;
    --excerpt-blue: #b4cde9;
    --ink: #162232;
    position: relative;
    width: min(90vw, 1150px);
    margin: 0 0 1rem 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: minmax(0, 1.85fr) minmax(0, 1fr);
    gap: clamp(1rem, 4vw, 4rem);
    color: var(--ink);
  }
  .stage {
    grid-column: 1;
    grid-row: 1;
    position: sticky;
    top: 12vh;
    height: 76vh;
    align-self: start;
    display: grid;
    align-items: center;
  }
  .scene { grid-area: 1 / 1; min-width: 0; display: grid; align-items: center; }
  .source-only { opacity: 0; pointer-events: none; }
  .scene-layer { grid-area: 1 / 1; min-width: 0; }
  .steps { grid-row: 1; grid-column: 2; min-width: 0; }
  .step { min-height: 76vh; display: flex; flex-direction: column; justify-content: center; padding: 1.25rem 0; }
  .step-copy, .grading-mobile {
    color: #222;
    font: 400 20px/28px "Lyon Text Web", Georgia, serif;
  }
  .step-copy :global(p), .grading-mobile > :global(p) {
    font: inherit;
    margin: 0 0 .75rem;
    padding: 0;
  }
  .grading-mobile { display: none; }
  :is(.step-copy, .grading-mobile) .grading-rubric {
    list-style: none;
    display: grid;
    gap: .45rem;
    margin: .7rem 0 0;
    padding: .7rem 0 0;
    border: 0;
    border-top: 1px solid #dedede;
    color: inherit;
    font: inherit;
    font-size: .9em;
    line-height: 1.4;
    text-align: left;
  }
  :is(.step-copy, .grading-mobile) .grading-rubric li {
    display: grid;
    grid-template-columns: .85rem 1fr;
    gap: .5rem;
    margin: 0;
    padding: 0;
    border: 0;
    color: inherit;
    font: inherit;
  }
  .grading-bullet {
    display: grid;
    place-items: center;
    width: .85rem;
    aspect-ratio: 1;
    margin-top: .2em;
    background: var(--bullet-color);
    font: bold .65rem/1 system-ui, sans-serif;
  }
  .grading-rubric li:nth-child(1) { --bullet-color: #88bf78; }
  .grading-rubric li:nth-child(2) { --bullet-color: #b5d9ad; }
  .grading-rubric li:nth-child(3) { --bullet-color: #f5b4b9; }
  .grading-rubric li:nth-child(4) { --bullet-color: #f78e94; }
  .grading-rubric li:nth-child(5) { --bullet-color: #dce0df; }
  .grading-rubric li:nth-child(6) .grading-bullet { background: #d2dfef; border: 1px dashed currentColor; }
  .crawler-table { width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 2px; font: clamp(.47rem, .95vw, .72rem)/1.1 ui-monospace, monospace; }
  .crawler-table caption { caption-side: top; color: inherit; font-weight: bold; padding: 0 0 .35rem; }
  .crawler-table th { text-align: center; padding: .12rem .1rem; overflow-wrap: anywhere; }
  .crawler-table th:first-child { text-align: left; width: var(--publisher-width); }
  .muted { visibility: hidden; }
  .selection {
    container-type: inline-size;
    --publisher-width: 28%;
    --tile-size: .85rem;
    --tile-gap: 2px;
    --excerpt-width: calc(10 * var(--tile-size) + 9 * var(--tile-gap));
    position: relative;
  }
  .excerpt-cell { position: relative; padding: 0; }
  .excerpt-count {
    position: absolute;
    left: 0;
    bottom: calc(100% + 3px);
    width: 100%;
    text-align: center;
    color: #526278;
    font: 500 clamp(.55rem, 1.1vw, .7rem)/1 ui-monospace, monospace;
    animation: snap-in 1ms step-end 610ms both;
  }
  .excerpt-count::after {
    content: '';
    display: block;
    height: 5px;
    margin-top: 4px;
    border: 1px dashed #8c98a5;
    border-bottom: 0;
    border-radius: 6px 6px 0 0;
  }
  .excerpt-tiles {
    position: relative;
    width: min(var(--excerpt-width), 100%);
    display: grid;
    grid-template-columns: repeat(10, minmax(0, var(--tile-size)));
    gap: var(--tile-gap);
    justify-content: start;
    align-items: center;
    min-height: .85rem;
  }
  .excerpt-tiles span {
    width: 100%;
    aspect-ratio: 1;
    background: var(--excerpt-blue);
    transform-origin: left center;
    animation: unfold-square 150ms cubic-bezier(.2, .7, .3, 1) calc(var(--tile-order) * 50ms) both;
  }
  @keyframes unfold-square { from { scale: 0 1; } to { scale: 1 1; } }
  @keyframes snap-in { from { visibility: hidden; } to { visibility: visible; } }
  .cell { display: block; min-height: .85rem; }
  .crawler-table tbody th { font-weight: normal; }
  .crawler-table td { text-align: center; font-weight: bold; }
  .crawler-table tr { animation: enter 280ms ease-out both; animation-delay: calc(var(--order, 0) * 18ms); }
  .crawler-table td[data-status], .legend [data-status] { background: #edf0f4; color: #404953; }
  .crawler-table td[data-affiliation="Partnership"],
  .legend span[data-affiliation="Partnership"] { background: #d9eadb; color: #214f32; }
  .crawler-table td[data-affiliation="Lawsuit"],
  .legend span[data-affiliation="Lawsuit"] { background: #f4dcd7; color: #762b26; }
  .legend { display: flex; flex-wrap: nowrap; gap: clamp(.1rem, .45vw, .35rem); margin-top: .4rem; }
  .legend span { white-space: nowrap; padding: .16rem clamp(.12rem, .45vw, .4rem); font: clamp(.46rem, 1.2vw, .68rem)/1.2 ui-monospace, monospace; }
  .result {
    border: 1px dashed #a0a9b5;
    padding: .45rem .28rem;

  }
  .example-screenshot { margin: 0; border: 3px solid var(--tile); background: white; }
  .excerpt-figure { margin: 0; }
  .excerpt-figure img { display: block; width: 100%; height: auto; }
  .excerpt-figure figcaption { margin: .3rem 0 0; text-align: center; color: #526278; font: .72rem/1.35 system-ui, sans-serif; }
  .example-prompt { padding: .75rem; font: clamp(.65rem, .95vw, .85rem)/1.4 system-ui, sans-serif; }
  .query-bubble { width: min(100%, 83%); margin-left: auto; padding: .45rem; border-radius: .7rem; background: #f1f3f4; }
  .query-bubble > :is(blockquote, p) { box-sizing: border-box; width: 100%; max-width: none; margin: 0; padding: 0; border: 0; font: inherit; }
  .query-bubble blockquote { position: relative; }
  .selected-excerpt-overlay {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    border-radius: .45rem;
    background: rgb(213 226 209 / 85%);
    color: #214f32;
    font-weight: 600;
    z-index: 1;
  }
  .query-separator { display: block; margin: .35rem 0; }
  .example-prompt mark { background: #d5e2d1; color: inherit; padding: 0 .2em; }
  .example-prompt .query-response { margin: .75rem 0 .35rem; }
  .example-prompt p { margin: 0; padding: 0; font: inherit; }
  .excerpt-example {
    position: absolute;
    top: 50%;
    right: 0;
    left: calc(var(--publisher-width) + var(--excerpt-width) + 1rem);
    transform: translateY(-50%);
    animation: settle-excerpt 240ms ease-out 650ms both;
  }
  @keyframes settle-excerpt { from { opacity: 0; translate: -.35rem 0; } to { opacity: 1; translate: 0 0; } }
  .excerpt-tiles span { transition: opacity var(--query-beat) ease, background-color var(--query-beat) ease; }
  .selection .crawler-table { transition: transform var(--query-beat) ease; }
  .focused .crawler-table { transform: translateX(calc(-1 * var(--publisher-width))); }
  .focused .crawler-table tbody th { visibility: hidden; }
  .step.holding-copy .step-copy { visibility: hidden; }
  .focused .excerpt-tiles span { opacity: .21; transition-delay: var(--query-beat); }
  .focused .excerpt-tiles .highlighted { opacity: 1; background: #91acd1; }
  .expanded-query {
    position: absolute;
    top: var(--query-center, 52%);
    right: 0;
    left: max(46%, calc(var(--excerpt-width) + 1rem));
    transform: translateY(-50%);
    transform-origin: left center;

  }
  .expanded-query::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: var(--triangle-width, 0px);
    height: 100%;
    background: linear-gradient(90deg, #cbd9ed, #f7f9fc);
    clip-path: polygon(0 var(--triangle-tip, 50%), 100% 0, 100% 100%);
    mask-image: linear-gradient(to right, #000 40%, transparent 60%);
    mask-size: 250% 100%;
    mask-position: 0 0;
    mask-repeat: no-repeat;
    animation: fade-gradient-across var(--query-beat) linear calc(2 * var(--query-beat)) both;
  }
  .expanded-query .example-screenshot { animation: snap-in 1ms step-end calc(3 * var(--query-beat)) both; }
  @keyframes fade-gradient-across {
    from { mask-position: 100% 0; }
    to { mask-position: 0 0; }
  }
  .multiplying .result:first-child { border-color: rgb(160 169 181 / var(--panel-revealed, 0)); }
  .multiplying .result:first-child > span,
  .multiplying .result:not(:first-child) { opacity: var(--panel-revealed, 0); }
  .multiplying .matrix { transform-origin: top left; }
  .matrix { display: grid; grid-template-columns: repeat(10, minmax(0, 1fr)); gap: clamp(1px, .13vw, 2px); width: 100%; }
  .matrix span { aspect-ratio: 1; background: var(--excerpt-blue); }
  .results { display: grid; grid-template-columns: repeat(8, minmax(0, 1fr)); gap: .3rem; align-items: stretch; font-family: ui-monospace, monospace; }
  .result { display: grid; justify-items: center; grid-template-rows: auto 2.3em; align-items: center; gap: .4rem; text-align: center; text-transform: uppercase; font-size: clamp(.52rem, .75vw, .68rem); line-height: 1.1; overflow-wrap: anywhere; }
  @keyframes enter { from { opacity: 0; transform: translateY(.5rem); } to { opacity: 1; transform: translateY(0); } }


  .rewind-panels .focused .excerpt-tiles span { opacity: 1; background: var(--excerpt-blue); transition: none; }
  .rewind-panels .result:not(:first-child) { animation: conceal 1ms step-end calc(var(--reverse-order) * 120ms) both; }
  .rewind-panels .result:first-child > span { animation: conceal 1ms step-end 840ms both; }
  .rewind-panels .result:first-child { animation: conceal-border 1ms step-end 840ms both; }
  .rewind-query .expanded-query .example-screenshot { visibility: hidden; animation: none; }
  .rewind-query .expanded-query::before { animation: fade-gradient-across var(--query-beat) linear reverse both; }
  .rewind-query .focused .excerpt-tiles span { opacity: 1; background: var(--excerpt-blue); transition-delay: var(--query-beat); }
  .rewind-query .focused .crawler-table { transform: none; transition-delay: calc(2 * var(--query-beat)); }
  .rewind-tiles .excerpt-count, .rewind-tiles .excerpt-example { visibility: hidden; animation: none; }
  .rewind-tiles .excerpt-tiles span { animation: unfold-square 150ms ease-in calc((9 - var(--tile-order)) * 50ms) reverse both; }
  @keyframes conceal { from { opacity: 1; } to { opacity: 0; } }
  @keyframes conceal-border { from { border-color: #a0a9b5; } to { border-color: transparent; } }

  @media (max-width: 850px) {
    .grading-desktop { display: none; }
    .step-copy { font-size: 18px; line-height: 25px; }
    .grading-mobile { display: block; padding-top: .75rem; margin-bottom: 1.5rem; }
    .grading-mobile > :global(p) { margin: 0 0 .75rem; padding: 0; border: 0; }
    .story {
      --mobile-stage-height: clamp(200px, 53svh, 420px);
      width: min(94vw, 44rem);
      margin-bottom: .6rem;
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
    }
    .stage, .steps { grid-area: 1 / 1; }
    .stage {
      top: 0;
      height: 100svh;
      box-sizing: border-box;
      padding-bottom: min(34svh, 18rem);
      background: white;
    }
    .story:has(.step:last-child[aria-current="step"]) .stage {
      height: auto;
      padding-bottom: 0;
    }
    .story:has(.step:last-child[aria-current="step"]) .source-only {
      position: absolute;
      inset-inline: 0;
      top: calc(50svh - min(17svh, 9rem));
      transform: translateY(-50%);
    }
    .steps {
      position: relative;
      z-index: 1;
      padding-block: 55svh 0;
      pointer-events: none;
    }
    .step {
      min-height: 88svh;
      width: min(100% - 1.5rem, 30rem);
      margin-inline: auto;
      justify-content: flex-start;
      padding: 0;
      text-align: center;
    }
    .step:last-child { min-height: max(22svh, 8rem); }
    .step-copy {
      pointer-events: auto;
      box-sizing: border-box;
      width: 100%;
      padding: .85rem 1rem;
      border: 1px solid #d8e1ec;
      border-radius: .25rem;
      background: rgb(255 255 255 / 96%);
    }
    .step-copy :global(p:last-child) { margin-bottom: 0; }
    .selection { --publisher-width: 32%; --tile-size: clamp(.42rem, 1.65vw, .75rem); --tile-gap: 1px; }
    .crawler-table { border-spacing: 1px; font-size: clamp(.43rem, 1.35vw, .67rem); }
    .crawler-table th { padding: .07rem .05rem; }
    .cell, .excerpt-tiles { min-height: clamp(.4rem, 1.6svh, .72rem); }
    .legend { flex-wrap: wrap; }
    .excerpt-example { left: calc(var(--publisher-width) + var(--excerpt-width) + .45rem); }
    .expanded-query { left: max(34%, calc(var(--excerpt-width) + .65rem)); }
    .example-prompt { padding: .4rem; font-size: clamp(.61rem, 1.7vw, .83rem); line-height: 1.27; }
    .query-bubble { width: 100%; padding: .35rem; }
    .results { grid-template-columns: repeat(4, minmax(0, 1fr)); max-width: min(100%, calc(var(--mobile-stage-height) - 42px)); margin-inline: auto; gap: .25rem; }
    .result { padding: .18rem; gap: .2rem; }
    .matrix { gap: 1px; }
  }

  @media (max-width: 850px) and (max-height: 500px) {
    .story { --mobile-stage-height: 58svh; }
    .crawler-table { font-size: clamp(.34rem, 1.5svh, .48rem); line-height: 1; }
    .crawler-table th { padding-block: 0; }
    .selection { --tile-size: clamp(.28rem, 1.7svh, .52rem); }
    .cell, .excerpt-tiles { min-height: .34rem; }
    .excerpt-example { width: min(45%, 36svh); }
    .expanded-query { max-width: 44%; }
    .example-prompt { font-size: clamp(.49rem, 1.75svh, .65rem); }
    .results { grid-template-columns: repeat(8, minmax(0, 1fr)); max-width: min(100%, 105svh); }
  }

  @media (prefers-reduced-motion: reduce) {
    .story { display: block; max-width: 42rem; }
    .step, .step:last-child { min-height: 0; padding: 1.25rem 0; border-top: 1px solid #d5dce5; }
    .steps { padding: 0; pointer-events: auto; }
    .step-copy { padding: 0; border: 0; background: transparent; }
    .inline-scene { margin-top: 1rem; }
    .excerpt-example, .expanded-query { position: static; transform: none; margin-top: .6rem; }
    .expanded-query::before { display: none; }
    .results { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }

  @media (min-width: 851px) and (max-height: 620px) {
    .stage { top: 2vh; height: 96vh; }
    .crawler-table { border-spacing: 1px; }
    .crawler-table th { padding-block: .05rem; }
    .selection { --tile-size: .65rem; }
    .cell, .excerpt-tiles { min-height: .65rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .story * { animation: none !important; transition: none !important; }
  }
</style>
