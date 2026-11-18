<script>
  import Article from './cjr/Article.svelte'
  import Body from './cjr/Body.svelte'
  import BodyText from './cjr/BodyText.svelte'
  import TowPartnerLogo from './cjr/TowPartnerLogo.svelte'
  import Headline from './cjr/Headline.svelte'
  import './cjr/tow.css'
  import article from './article.txt?raw'
  import licensingGraphic from './licensing-deals.html?raw'
  import citationGraphic from './citation-links.html?raw'
  import crawlerGraphic from './crawler-findings.html?raw'
  import premiumGraphic from './premium-models.html?raw'
  import findingsGraphic from './confidently-wrong.html?raw'

  const gradingKey = [
    ['Completely Correct', '#88bf78'],
    ['Correct but Incomplete', '#b5d9ad'],
    ['Partially Incorrect', '#f5b4b9'],
    ['Completely Incorrect', '#f78e94'],
    ['No Answer Provided', '#dce0df'],
    ['Crawler Blocked', '#d2dfef']
  ]

  const citationFinding = 'The generative search tools we tested had a common tendency to cite the wrong article'
  const articleFigures = [
    { caption: 'An example of Copilot declining', file: 'copilot-decline.jpg', width: 1486, height: 1292 },
    { caption: 'An example of Gemini declining', file: 'gemini-politics.jpg', width: 1680, height: 1146 },
    { caption: 'Despite having a partnership with the Texas Tribune, Perplexity cited an unofficial version', file: 'perplexity-tribune.jpg', width: 1988, height: 988 },
    { caption: 'Although USA Today blocks ChatGPT’s crawler', file: 'chatgpt-yahoo.jpg', width: 1248, height: 1108 }
  ]
  const figureBase = `${import.meta.env.BASE_URL}graphics/article-figures/`
  const studyTable = 'https://airtable.com/embed/appg737s82fePQorq/shrSYddgl1MYeaxOH'
  const charts = [
    { after: 'Overall, the chatbots often failed to retrieve the correct articles.', folder: 'confidently-wrong', label: 'Generative search tools were often confidently wrong in our study', html: findingsGraphic },
    { after: 'Premium models, such as Perplexity Pro', folder: 'premium-models', className: 'premium-graphic', label: 'Response comparison for Perplexity and Grok models', html: premiumGraphic },
    { after: 'We expected chatbots', folder: 'crawler-access', label: 'Crawler access and response accuracy', html: crawlerGraphic },
    { after: citationFinding + '.', folder: 'citation-links', className: 'citation-graphic', label: 'Types of links cited by generative search tools', html: citationGraphic },
    { after: 'A deal between AI companies and publishers often involves', folder: 'licensing-deals', className: 'licensing-graphic', label: 'Accuracy for AI platforms and publishers with licensing deals', html: licensingGraphic }
  ].map(chart => ({
    ...chart,
    html: chart.html.replace(/src="([^"/]+\.png(?:\?[^"]*)?)"/g, (_, file) =>
      `src="${import.meta.env.BASE_URL}graphics/${chart.folder}/${file}"`)
  }))

  const original = 'https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php'
  const originalPublisher = 'Columbia Journalism Review'
  const paragraphs = article.trim().split(/\r?\n(?:[ \t]*\r?\n)+/)
  const sections = paragraphs.filter(paragraph => paragraph.startsWith('## '))
</script>

<main id="article">
  <Article>
    <Headline
      hed="AI Search Has a Citation Problem"
      subhed="We compared eight AI search engines. They’re all bad at citing news."
      date="March 6, 2025"
      datetime="2025-03-06"
    >
      <TowPartnerLogo />
      {#snippet byline()}
        <a rel="author" href="https://www.cjr.org/author/klaudia-jazwinska">Klaudia Jaźwińska</a> and
        <a rel="author" href="https://www.cjr.org/author/aisvarya-chandrasekar">Aisvarya Chandrasekar</a>
      {/snippet}
      {#snippet hero()}
        <figure class="image-hero-box">
          <img class="image-hero" src={figureBase + 'article-hero.jpg'} width="1600" height="704" alt="Static on a broken television screen" />
          <figcaption class="image-hero-caption">Image: The rack of a broken monitor or TV is the texture of a television screen, background for superimposing with the effect of grain noise, Александр Розов. Adobe Stock 1050902471</figcaption>
        </figure>
      {/snippet}
    </Headline>

    <Body>
      <aside class="republication" aria-label="Republication credit">
        <p>This article is republished from <cite>{originalPublisher}</cite>.</p>
        <a href={original}>Read the original article</a>
      </aside>

      {#each paragraphs as paragraph, index}
        {@const figure = articleFigures.find(item => paragraph.startsWith(item.caption))}
        {@const chart = charts.find(item => paragraph.startsWith(item.after))}
        {#if paragraph === '## Download our data'}
          <h2 id={'section-' + (sections.indexOf(paragraph) + 1)}>Download our data</h2>
          <p><a href="https://github.com/TowCenter/genSearch-Part2">Download the study dataset and read the access instructions on GitHub</a>.</p>
        {:else if paragraph.startsWith('## ')}
          <h2 id={'section-' + (sections.indexOf(paragraph) + 1)}>{paragraph.slice(3)}</h2>
        {:else if paragraph.startsWith('### ')}
          <h3>{paragraph.slice(4)}</h3>
        {:else if paragraph.startsWith('- ')}
          <ul>
            {#each paragraph.split(/\r?\n/) as item}
              <li>{item.slice(2)}</li>
            {/each}
          </ul>
          {#if paragraph.startsWith('- Correct:')}
            <ul class="grading-key" aria-label="Response grading key">
              {#each gradingKey as [label, color]}
                <li>
                  <span class:blocked={label === 'Crawler Blocked'} style:background={color} aria-hidden="true">
                    {label === 'Crawler Blocked' ? '×' : ''}
                  </span>
                  {label}
                </li>
              {/each}
            </ul>
          {/if}
        {:else if figure}
          <figure class="article-figure">
            <img src={figureBase + figure.file} width={figure.width} height={figure.height} loading="lazy" alt="" />
            <figcaption>{paragraph}</figcaption>
          </figure>
        {:else if paragraph === 'Kaylee Williams, Sarah Grevy Gotfredsen, and Dhrumil Mehta contributed to this report.'}
          <p><em>{paragraph}</em></p>
        {:else if index === 0}
          <p class="lead-paragraph">{paragraph}</p>
        {:else}
          {#if paragraph.startsWith(citationFinding)}
            <p><strong>{citationFinding}</strong>{paragraph.slice(citationFinding.length)}</p>
          {:else}
            <BodyText text={paragraph} />
          {/if}
          {#if paragraph.startsWith('After providing each chatbot')}
            <figure class="article-figure query-figure">
              <img width="1492" height="733" src={figureBase + 'query-example.png'} alt="An excerpt from the query grid is enlarged to show the prompt and a sample response with its headline, publisher, date, and URL highlighted." loading="lazy" />
            </figure>
          {:else if chart}
            <figure class={['findings-graphic', chart.className]} aria-label={chart.label}>
              {@html chart.html}
            </figure>
          {:else if paragraph.startsWith('When we asked whether the AI companies made any commitments')}
            <div class="study-table">
              <iframe title="Tow Center study data table" src={studyTable} loading="lazy"></iframe>
              <p><a href={studyTable}>Open the study data table in Airtable</a></p>
            </div>
          {/if}
        {/if}
      {/each}


      <aside class="republication" aria-label="Republication source">
        <p>This article is republished from <cite>{originalPublisher}</cite>.</p>
        <a href={original}>Read the original article</a>
      </aside>
    </Body>
  </Article>
</main>

<style>


  main :global(.entry-content > ul).grading-key {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: .75rem;
    padding: 0;
    margin: 1.25rem 0 1.75rem;
    list-style: none;
    text-align: center;
    font: .8rem/1.25 ui-monospace, monospace;
  }
  main .grading-key li {
    margin: 0;
    padding: 0;
    list-style: none;
    font: inherit;
    overflow-wrap: anywhere;
  }
  main :global(.entry-content > p):has(+ .query-figure) { padding-bottom: .5rem; }
  .article-figure.query-figure {
    position: relative;
    left: 50%;
    width: min(792px, 88vw);
    max-width: none;
    margin: 0 0 .5rem;
    transform: translateX(-50%);
  }
  .grading-key span {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto .5rem;
    color: white;
    font: 2rem/1 system-ui, sans-serif;
  }
  .grading-key .blocked { border: 1px dashed #222; }
  @media (max-width: 600px) {
    main :global(.entry-content > ul).grading-key { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  .findings-graphic {
    position: relative;
    left: 50%;
    width: min(94vw, 930px);
    margin: 0 0 2rem;
    transform: translateX(-50%);
  }
  .citation-graphic { width: min(94vw, 804px); }
  .premium-graphic, .licensing-graphic { width: min(94vw, 595px); }
  .article-figure, .study-table { margin: 1rem 0 1.75rem; }
  .article-figure img { display: block; width: 100%; height: auto; }
  .article-figure figcaption, .study-table p { margin: .45rem 0 0; padding: 0; border: 0; color: #526278; font: .85rem/1.4 system-ui, sans-serif; }
  .study-table iframe { display: block; width: 100%; height: 33rem; border: 1px solid #ddd; }

  main :global(.entry-content > :is(p, ul, h2, h3)) {
    padding: 0 0 28px;
    border-left: 0;
  }

  .lead-paragraph::first-letter {
    float: left;
    font-size: 3.5em;
    line-height: 0.85;
    margin: 0.08em 0.09em 0 0;
  }

  .republication a {
    color: #254c6f;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  h2[id] {
    scroll-margin-top: 1.5rem;
  }

  .republication {
    margin: 0 0 1.5rem;
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: .75rem;
    font: 0.9375rem/1.5 system-ui, sans-serif;
  }

  .republication p {
    margin: 0 0 0.25rem;
  }
</style>
