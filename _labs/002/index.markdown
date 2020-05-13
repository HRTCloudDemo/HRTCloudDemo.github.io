---
layout: lab
title: Collaborate within a Team
---

In this lab you will create a team of two developers (e.g. with your neighbor) and collaborate on improving the application.

# Split the work

One member of the team will act as the author and change the content of the application (`index.html`). The other member will act as designer and change the visual presentation of the content.

1. Create and embed a minimal CSS file into `index.html`

1. Test locally (load `index.html` in a browser)

1. Add a new file called `manifest.yml` with the following content:

    <pre>
    applications:
    - name: <span class="app_name">random-app-name</span>
      memory: 256M
      host: <span class="app_name">random-app-name</span>
      buildpack: staticfile_buildpack
    </pre>

2. Run `ibmcloud cf push` and verify your app is picking up the right name. IBM Cloud is adding your host to the `eu-gb.mybluemix.net` domain by default, so that the complete URL becomes <code><a href="#" class="app_name">https://<span class="app_name">random-app-name</span>.eu-gb.mybluemix.net</a></code>. Once you can access the app under this URL, commit and push your changes to the local git repo.

3. Create a GitHub Repository for the code

4. Follow the instructions to push the repo

5. [Add your team mate as a collaborator](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/) to the GitHub repo so that they can push, too

# Create a CI/CD pipeline

1. Invite you partner into your IBM Cloud organization

   In order to enable your partner to work on apps in your organization, you need to [invite her](https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv) to collaborate. Please perform the steps in ["Inviting Users"](https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv#inviting-users). You should give your partner `Developer` rights in the `dev` space in the `United Kingdom (London)` region.

1.  Once invited, the invited person needs to switch the account in the account switcher to be able to see the other persons apps:

    ![](switch-account.png)

1.  Create a new CI/CD service instance

    Go to the [IBM Cloud products catalog](https://cloud.ibm.com/catalog) and search for **DevOps**, then click on the **Toolchains** tile.

    You may get an error message if you happen to have an existing CD/CD service because the lite plan is limited to a single instance of this service per user. In that case, just select the existing service and proceed to the next step. Alternatively, you can delete the existing service and create a new one.

2.  Create a new toolchain:

    ![](create.png)

3.  Select "Build your own toolchain":

    ![](byo.png)

4.  Provide a name for the new toolchain:

    ![](byo-config.png)

5.  Now we need to add a tool to fetch the source code of the app. Add a new tool to this toolchain:

    ![](add-tool.png)

6.  Select the GitHub tool:

    ![](github.png)

7.  You need to authorize **IBM Cloud** to talk to your github repository:

    ![](github-auth.png)

8.  On the GitHub page, click **Authorize IBM Cloud**

    ![](github-auth2.png)

9.  Select "Existing repository" and provide the URL to your app's source code:

    ![](git-configure.png)

10. Now we need another tool to publish the source code:

    ![](add-pipeline.png)

11. Select "Delivery pipeline":

    ![](delivery-pipeline.png)

12. Provide a name for the new pipeline:

    ![](delivery-pipeline-name.png)

13. Configure the delivery pipeline by clicking it:

    ![](configure-pipeline.png)

14. Add a stage to it:

    ![](add-stage.png)

15. Select the previously configured GitHub source as input of this step:

    ![](stage-input.png)

16. In the "Jobs" tab if this stage, add a new job:

    ![](stage-add-job.png)

17. We want to deploy our source code, so please select "Deploy":

    ![](stage-deploy.png)

18. You will need a 'Platform API Key' in the next step. To generate one, you can either use the command line interface like `ibmcloud iam api-key-create myapikey` or generate one in the Browser under "Manage -> Security -> Platform API Keys". Store the key away as it will not be visible after you closed the pop-up window.

19. Make sure you select your organization and the desired stage (e.g. "dev"). If there is no space or org selectable, try changing the region selector. **Be sure** to also clear out the _Application Name_ field and also remove the _${CF_APP}_ variable. This ensures that the name from the _manifest.yml_ is used:

    ![](org-space.png)

20. Once saved, the stage will run whenever a new commit has arrived at the GitHub repository. As a one-off, you can trigger a deploy manually:

    ![](stage-trigger.png)

21. After the deploy finished successfully, you can find the URL of the deployed app in the logs of the stage. It should be the same as the one you specified in `manifest.yml`:

    ![](logs.png)

# Iterate over the application

Now that you have a working pipeline, every commit to the git repository will deploy the changes immediately. Every person in the team can make changes separately, and the pipeline will publish an updated version of your app whenever you `git push`. Therefore you should create small commits and push often.

Follow these steps to work in parallel:

1.  Agree with your team mate on a set of CSS classes for the presentation of the app.
1.  As the content author, mark your content in a logical way, instead of relying on physical representation, e.g. use `<strong>` instead of `<b>`.
1.  As the designer, your responsibility is to present the content in a way that supports its intent. Focus on CSS classes and HTML elements that allow for the design freedom you need, but do not overload the content markup with physical layout details.
1.  The team should then alternate between

    - brief sync-up sessions, where the overall structure is discussed and issues are resolved, and
    - periods of independent work, where each member can focus on their part of the app.
