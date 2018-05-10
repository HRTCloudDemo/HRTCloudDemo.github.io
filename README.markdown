# IBM Cloud Workshop

This is the web site for the [IBM Cloud Workshop](https://hrtclouddemo.github.io/) at Hochschule Reutlingen.

# Publish New Content

Add your Markdown or HTML files to `_labs` and `git push`. GitHub Pages will update the page a couple of minutes later.

Images should be resized to be 800px wide. On MacOS, you can use something like `sips --resampleHeightWidthMax 800 _labs/toolchain-*.png`.

# Local Test

* Install dependencies:

  ```bash
  gem install jekyll
  ```

* Run jekyll

  ```bash
  jekyll serve
  ```

  See [jekyllrb.com/docs/github-pages](http://jekyllrb.com/docs/github-pages/) for details.

* Open [http://localhost:4000/](http://localhost:4000/) in your browser.

Whenever you change one of the files, jekyll will re-generate the site. GitHub does the same when we push the repo.

# Spell Checker

* Install `pandoc` and `hunspell`
* Download [the dictionary](https://sourceforge.net/projects/aoo-extensions/files/1470/1/en_us.oxt/download)
* Check spelling:

  ```bash
  pandoc _labs/00*.markdown -t plain | DICPATH=.:~/Downloads/dict-en_US/ hunspell -d en_US -p local.dic -l | sort -u
  ```
* Add the words you want to accept to `local.dic`
* Fix the remaining words until the command above yields an empty result

# Link Checker

```bash
npm install broken-link-checker -g
blc                                    \
    --filter-level 3                   \
    --recursive                        \
    --verbose                          \
    --exclude http://localhost:3000/   \
    --exclude http://localhost:12345/  \
  http://localhost:4000/
```
