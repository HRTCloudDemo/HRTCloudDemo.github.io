This is the web site for Hochschule Reutlingen Cloud Demos.

# Publish New Content

Add your Markdown or HTML files to `_labs` and `git push`. GitHub Pages will update the page a couple of minutes later.

Images should be resized to be 800px wide. On MacOS, you can use something like `sips --resampleHeightWidthMax 800 _labs/toolchain-*.png`.

# Local Test

* Install [jekyll](http://jekyllrb.com/):

  ```bash
  gem install jekyll
  ```

* Run jekyll

  ```
  jekyll serve --baseurl ''
  ```

  See [jekyllrb.com/docs/github-pages](http://jekyllrb.com/docs/github-pages/) for details.

* Open [http://localhost:4000/](http://localhost:4000/) in your browser.

Whenever you change one of the files, jekyll will re-generate the site in `_site`. GitHub does the same when we push the repo. Thus, there is no need to check `_site` into git.
