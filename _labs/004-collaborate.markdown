---
layout: lab
title: Collaborate
---

In this lab you will create a team of two developers (e.g. with your neighbour) and collaborate on improving the application.

# Split the work

One member of the team will act as the author and change the content of the application (`index.html`). The other member will act as designer and change the visual presentation of the content.

1. Create and embed a minimal CSS file into `index.html`
1. Test locally (load `index.html` in a browser)
1. Add a new file called `manifest.yml` with the following content:

    <pre>
    applications:
    - name: <span class="app_name">random-app-name</span>
      memory: 128M
      host: <span class="app_name">random-app-name</span>
      buildpack: staticfile_buildpack
    </pre>

1. Run `cf push` and verify your app is picking up the right name. IBM Cloud is adding your host to the `eu-de.mybluemix.net` domain by default so your FQDN is <code><span class="app_name">random-app-name</span>.eu-de.mybluemix.net</code>. Once you can access the app under this URL, commit and push your changes to the local git repo.
1. Create a GitHub Repository for the code
1. Follow the instructions to push the repo
1. Add your team mate as a collaborator to the GitHub repo so that they can push, too

# Create a CI/CD pipeline

1. Invite you parter into your IBM Cloud organisation

   In order to enable your partner to work on apps in your organization, you need to [invite her](https://console.bluemix.net/docs/iam/iamuserinv.html#iamuserinv) to collaborate. Please perform the steps in ["Inviting Users"](https://console.bluemix.net/docs/iam/iamuserinv.html#inviting-users) and also those under ["Cloud Foundry access"](https://console.bluemix.net/docs/iam/iamuserinv.html#cloud-foundry-access). You should give your partner `Developer` rights in the `dev` space in the `Germany (Frankfurt)` region.

1.  Create a new CI/CD service instance

    Go to the [IBM Cloud main menu](https://console.bluemix.net/) and click on **DevOps**, then add a new **Continuous Delivery** service. Make sure you select "Germany" as region.

    You may get an error message if you happen to have an existing CD/CD service because the lite plan is limited to a single instance of this service per user. In that case, just select the existing service and proceed to the next step. Alternatively, you can delete the existing service and create a new one.

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

1.  Once the deploy finished successfully, you can find the URL where the app is deployed to in the logs of the stage. It should be the same as the one you specified in `manifest.yml`:

    ![](004/logs.png)

{% include random_app_name.html %}

# Iterate over the application

Now that you have a working pipeline, every commit to the git repository will deploy the changes immediately. Every person in the team can make changes separately, and the pipeline will publish an updated version of your app whenever you `git push`. Therefore you should create small commits and push often.

Follow these steps to work in parallel:

1.  Agree with your team mate on a set of CSS classes for the presentation of the app.
1.  As the content author, mark your content in a logical way, instead of relying on physical representation, e.g. use `<strong>` instead of `<b>`.
1.  As the designer, your responsibility is to present the content in a way that supports its intent. Focus on CSS classes and HTML elements that allow for the design freedom you need, but do not overload the content markup with physical layout details.
1.  The team should then alternate between

    - brief sync-up sessions, where the overall structure is discussed and issues are resolved, and
    - periods of independent work, where each member can focus on their part of the app.
