---
---
// build search index
var idx = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')

  {% assign count = 0 %}{% for post in site.prereqs %}

  this.add({
    title: {{post.title | jsonify}},
    category: {{post.category | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    tags: {{post.tags | jsonify}},
    id: {{count}}
  });{% assign count = count | plus: 1 %}{% endfor %}

  {% for post in site.labs %}
  this.add({
    title: {{post.title | jsonify}},
    category: {{post.category | jsonify}},
    content: {{post.content | strip_html | jsonify}},
    tags: {{post.tags | jsonify}},
    id: {{count}}
  });{% assign count = count | plus: 1 %}{% endfor %}
});

// build reference data
var store = [
  {% for post in site.prereqs %}{
  "title": {{post.title | jsonify}},
  "link": {{ post.url | jsonify }},
  "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }},
  "excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %},
{% for post in site.labs %}{
"title": {{post.title | jsonify}},
"link": {{ post.url | jsonify }},
"date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
"category": {{ post.category | jsonify }},
"excerpt": {{ post.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}
]

// search
$(document).ready(function() {
  var template = $('#search-results-template').html();

  // Using custom delimiters prevent the liquid template from stripping {{ and }}
  // because it tries to interpret them
  Mustache.parse(template, [ '<%', '%>' ]);

  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);

    resultdiv.empty();
    resultdiv.prepend('<p class="">Found ' + result.length + ' result(s).</p>');

    for (var item in result) {
      var ref = result[item].ref;
      var rendered = Mustache.render(template, store[ref]);
      resultdiv.append(rendered);
    }
  });
});
