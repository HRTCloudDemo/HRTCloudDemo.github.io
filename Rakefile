require 'html-proofer'

desc 'Build site'
task :build do
  sh 'bundle exec jekyll build'
end

namespace :test do
  desc 'Test links'
  task links: [ :build ]  do
    HTMLProofer.check_directory("./_site", {
      assume_extension: true,
      allow_hash_href: true,
      empty_alt_ignore: true,
      url_ignore: [
        'http://localhost:3000/',
        'http://localhost:12345/',
      ]
    }).run
  end
end

task default: [ 'test:links' ]
