# IBM Cloud Workshop

This is the web site for the [IBM Cloud Workshop](https://hrtclouddemo.github.io/) at Hochschule Reutlingen.

# Publish New Content

Add your Markdown or HTML files to `_labs` and `git push`. GitHub Pages will update the page a couple of minutes later.

Images should be resized to be 800px wide. On MacOS, you can use something like `sips --resampleHeightWidthMax 800 _labs/toolchain-*.png`.

# Local Test

1. Install dependencies:

   ```bash
   bundle install
   ```

1. Run jekyll

   ```bash
   bundle exec jekyll serve
   ```

   See [jekyllrb.com/docs/github-pages](http://jekyllrb.com/docs/github-pages/) for details.

* Open [localhost:4000/](http://localhost:4000/) in your browser.

Whenever you change one of the files, jekyll will re-generate the site. GitHub does the same when we push the repo.

# Spell Checker

* Install `pandoc` and `hunspell`
* Install the dictionary
  - On Debian, just run `apt-get install hunspell hunspell-en-us` and everything will be in the right places
  - On a Mac, download [the dictionary](https://sourceforge.net/projects/aoo-extensions/files/1470/1/en_us.oxt/download)
* Check spelling:

  ```bash
  pandoc _labs/00*.markdown -t plain | DICPATH=.:~/Downloads/dict-en_US/ hunspell -d en_US -p local.dic -l | sort -u
  ```
* Add the words you want to accept to `local.dic`
* Fix the remaining words until the command above yields an empty result

# Link Checker

```bash
bundle exec rake test:links
```
