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

# Invite you parter into your IBM Cloud organisation

To enable your partner to work in your organization you should invite him into it.
This process is described [here](https://console.bluemix.net/docs/iam/iamuserinv.html#iamuserinv).
Please perform the steps described in the `Inviting users` and the
steps under `Cloud Foundry access` in the `Assigning user access` section. You should give your Partner `Developer` rights in the `dev` space in the Germany (Frankfurt) region.

# Create a CI/CD pipeline

1.  Create a `manifest.yml` with the following content:

    <pre>
    applications:
    - name: <span class="app_name">random-app-name</span>
      memory: 128M
      host: <span class="app_name">random-app-name</span>
      buildpack: staticfile_buildpack
    </pre>

    on your local machine. Then manually run `cf push` and verify your app is picking up the right name. _IBM Cloud_ is adding your host to the `eu-de.mybluemix.net` domain  by default so your FQDN is <code><span class="app_name">random-app-name</span>.eu-de.mybluemix.net</code>. Once you can access your hostname, commit and push your changes to git and wait for the pipeline to finish.

1.  Go to the _IBM Cloud_ main menu and click on **DevOps**, then click on **Continuous Delivery**. Make sure you select "Germany" as region.

1.  Create a new toolchain:

    ![](004/create.png)

1.  Select "Build your own toolchain":

    ![](004/byo.png)

1.  Provide a name for the new toolchain:

    ![](004/byo-config.png)

1.  Now we need to add a tool to fetch the source code of the app. Add a new tool to this toolchain:

    ![](004/add-tool.png)

1.  Select the Github tool:

    ![](004/github.png)

1.  Select "Existing repository" and provide the URL to your app's source code:

    ![](004/git-configure.png)

1.  Now we need another tool to publish the source code:

    ![](004/add-tool.png)

1.  Select "Delivery pipeline":

    ![](004/delivery-pipeline.png)

1.  Provide a name for the new pipeline:

    ![](004/delivery-pipeline-name.png)

1.  Configure the delivery pipeline by clicking it:

    ![](004/configure-pipeline.png)

1.  Add a stage to it:

    ![](004/add-stage.png)

1.  Select the previously configured GitHub source as input of this step:

    ![](004/stage-input.png)

1.  In the "Jobs" tab if this stage, add a new job:

    ![](004/stage-add-job.png)

1.  We want to deploy our source code, so please select "Deploy":

    ![](004/stage-deploy.png)

1.  Make sure you select your organization and the desired stage (e.g. "dev"):

    ![](004/org-space.png)

1.  Once saved, the stage will run whenever a new commit has arrived at the GitHub repository. As a one-off, you can be start a deploy manually:

    ![](004/stage-trigger.png)

1.  Once the deploy finished successfully, you can  find the URL where the app is deployed to in the logs of the stage. It should be the same as the one you soecified in `manifest.yaml`:

    ![](004/logs.png)

{% include random_app_name.html %}

# Iterate over the application

Now that you have a working pipeline, agree with your team mate on a set of CSS classes for the presentation of the app.

1.  As the content author, mark your content in a logical way, instead of relying on physical representation, e.g. use `<strong>` instead of `<b>`.
1.  As the designer, your responsibility is to present the content in a way that supports its intent. Focus on CSS classes and HTML elements that allow for the design freedom you need, but do not overload the content markup with physical layout details.
1.  The team should then alternate between

    - brief sync-up sessions, where the overall structure is discussed and issues are resolved, and
    - periods of independent work, where each member can focus on their part of the app.

    The CI/CD pipeline will publish an updated version of your app whenever you `git push`. Therefore you should create small commits and push often.
