# adamdab.github.io

Personal website published with GitHub Pages and the Jekyll Minimal theme.

## Customize

- Edit `_config.yml` to change the site title and description.
- Edit `index.md` to update the homepage content.

## Preview locally

Install Ruby and Bundler, then run these commands from the repository directory:

```sh
gem install bundler
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000> in your browser. Jekyll rebuilds the site when you edit its files; press `Ctrl+C` to stop the server. The `Gemfile` uses GitHub Pages' gem so the local preview uses the same Jekyll theme and dependencies as GitHub Pages.

## Publish

In the repository settings, open **Pages** and select the branch containing the site files (usually `main`) and the root folder as the publishing source. GitHub Pages builds the Jekyll site automatically after each push.
