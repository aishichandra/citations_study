<script>
  let { children, hed, subhed, date, datetime, byline, hero } = $props()
</script>

<div class="container-lg title-image-lg">
  {@render children?.()}
  <header class="col-sm-10">
    <h1 class="main-title">{hed}</h1>
    <div class="post-excerpt"><p>{subhed}</p></div>
    <div class="meta">
      <time class="date" {datetime}>{date}</time>
      <span class="byline"><em>By</em> {@render byline()}</span>
    </div>
  </header>
  {@render hero?.()}
</div>

<style>
  .date { display: block; }
</style>
