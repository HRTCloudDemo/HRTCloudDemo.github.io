# IBM Cloud Workshop

This is the web site for the [IBM Cloud Workshop](https://hrtclouddemo.github.io/) at Hochschule Reutlingen.

# Publish New Content

Add your Markdown or HTML files to `_labs` and `git push`. GitHub Pages will update the page a couple of minutes later.

Images should be resized to be 800px wide. On MacOS, you can use something like `sips --resampleHeightWidthMax 800 _labs/toolchain-*.png`.

# Development / Test

1. Install dependencies:

   ```bash
   bundle install
   ```

1. Run jekyll

   ```bash
   bundle exec jekyll serve --livereload
   ```

   See [jekyllrb.com/docs/github-pages](http://jekyllrb.com/docs/github-pages/) for details.

* Open [localhost:4000/](http://localhost:4000/) in your browser.

Whenever you change one of the files, jekyll will re-generate the site. GitHub does the same when we push the repo.

# Spell Checker

* Install `pandoc` and `hunspell`
* Install the dictionary
  - On Debian, just run `apt-get install hunspell hunspell-en-us` and everything will be in the right places
  - On a Mac, download [the dictionary](https://sourceforge.net/projects/aoo-extensions/files/1470/1/en_us.oxt/download) and put the `en_US.*` files into `/Library/Spelling/`
* Check spelling:

  ```bash
  bundle exec rake test:spelling
  ```

* For each offending word,
  - add it to `local.dic` if you want to accept it as spelled correctly, or
  - fix the word in the source file

  Repeat until the command above yields an empty result.

# Link Checker

```bash
bundle exec rake test:links
```
