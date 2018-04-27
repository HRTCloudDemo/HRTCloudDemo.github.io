---
layout: lab
title: Collaborate
---

In this lab you will create a team of two developers (e.g. with your neighbor) and collaborate on improving the application.

# Split the work

One member of the team will act as the author and change the content of the application (`index.html`). The other member will act as designer and change the visual presentation of the content.

1. Create and embed a minimal CSS file into `index.html`
1. Test locally
1. Create a GitHub Repository for the code
1. Add all files to the repo and push it
1. Add your team mate as a collaborator

# Create a CI/CD pipeline

  Create a `manifest.yml` with the following content:

  <pre>
  applications:
  - name: <span class="app_name">random-app-name</span>
    memory: 128M
    host: <span class="app_name">random-app-name</span>
    buildpack: staticfile_buildpack
  </pre>

  on your local machine. Then manually run `cf push` and verify your app is picking up the right name. _IBM Cloud_ is adding your host to the `eu-de.mybluemix.net` domain  by default so your FQDN is <code><span class="app_name">random-app-name</span>.eu-de.mybluemix.net</code>. Once you can access your hostname, commit and push your changes to git and wait for the pipeline to finish.

{% include random_app_name.html %}

{% include pipeline.markdown %}

# Iterate over the application

Now that you have a working pipeline, agree with your team mate on a set of CSS classes for the presentation of the app.

1.  As the content author, mark your content in a logical way, instead of relying on physical representation, e.g. use `<strong>` instead of `<b>`.
1.  As the designer, your responsibility is to present the content in a way that supports its intent. Focus on CSS classes and HTML elements that allow for the design freedom you need, but do not overload the content markup with physical layout details.
1.  The team should then alternate between

    - brief sync-up sessions, where the overall structure is discussed and issues are resolved, and
    - periods of independent work, where each member can focus on their part of the app.

    The CI/CD pipeline will publish an updated version of your app whenever you `git push`. Therefore you should create small commits and push often.
