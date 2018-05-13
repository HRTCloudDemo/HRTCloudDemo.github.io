<h1>Search this site</h1>

<input placeholder="" type="search" id="search" class="search-input" autofocus>
<div id="results" class="all-posts results"></div>
<script src="https://unpkg.com/lunr@2.2.0/lunr.js"></script>
<script src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>
<script src="https://unpkg.com/mustache@2.3.0/mustache.js"></script>

<script id="search-results-template" type="x-tmpl-mustache">
  <section class="post">
    <header class="post-header">
      <h2 class="post-title"><a href="<% link %>"><% title %></a></h2>

      <!--
      <p class="post-meta">
        <a class="post-category" href="#">JavaScript</a>
        <a class="post-category" href="#">git</a>
      </p>
      -->
    </header>

    <div class="post-description">
      <p><% excerpt %></p>
    </div>
  </section>
</script>

<script src="/js/lunr-feed.js"></script>
