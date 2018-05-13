require 'html-proofer'

desc 'Build site'
task :build do
  sh 'bundle exec jekyll build'
end

# test that the given tool is available
%i(pandoc hunspell).each do |tool|
  task tool do
    sh("which #{tool} > /dev/null", verbose: false) do |ok, status|
      fail "#{tool} is missing" unless ok
    end
  end
end

namespace :test do
  desc 'Spell check'
  task :spelling => [ :pandoc, :hunspell ] do
    spelling_errors = FileList['_labs/**/*.markdown', '_prereqs/**/*.markdown'].map do |source_file|
      unknown_words = `pandoc -t plain '#{source_file}' | hunspell -d en_US -p local.dic -l`.split.uniq
      [source_file, unknown_words] unless unknown_words.empty?
    end.compact

    if spelling_errors.any?
      spelling_errors.each do |file, words|
        warn "#{file} has #{words.size} unknown words: #{words.join(', ')}"
      end

      fail "Error: #{spelling_errors.size} files had spelling errors."
    end
  end

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

task default: [ 'test:links', 'test:spelling' ]
