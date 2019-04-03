---
layout: lab
title: Consume a Cloud Service
---

The purpose of this exercise is to enable you to configure and use existing cloud services to add value to your application without much work.

## Introduction

The IBM Cloud platform (like other cloud platforms) provides a huge set of services
that can be used as ready to use building blocks to enhance your application. These services typically only have to be instantiated and configured to be used.

Such a service might be a database engines like Cloudant, and IOT platform, a mobile services that send push notification, or a service that provides artificial intelligence capabilities like the Watson Tone Analyzer used in this exercise.

The Watson Tone Analyzer service is able to detect moods and tones in a text submitted to it. In this exercise you will create a new instance of the Watson Tone Analyzer Service and connect it to an existing app that is [provided to you in a GitHub Repository](https://github.com/HRTCloudDemo/HRTToneDemo).

## Subscribe to the IBM Tone Analyzer Service

- Go to the _IBM Cloud_ main menu and click on **Catalog**,

  ![catalog](catalog.png)

- Select **AI** in the menu on the left side

  ![Watson](watson.png)

- Click on **Tone Analyzer**

  ![Tone Analyzer](tone_tile.png)

- On the next page select the Frankfurt region and click **Create**

  You will get redirected to another page. At this point of time the service is ready to use

- The credentials to access your service are displayed in the `Service Credentials` section on that page. Please press "View Credentials" for the "Auto-generated service credentails" to reveal the api key and url

  ![Credentials](show_creds.png)

- Note down apikey and url. They will be used in the next section of this tutorial

## Get the code of the sample app

The sample app uses the Watson Tone Analyzer service to score lines of text as happy or unhappy.
The app provides a basic user interface and an API that you will use in an later exercise.

- Fork the git repository [linked here](https://github.com/HRTCloudDemo/HRTToneDemo) into your own GitHub account by pressing the **Fork** button in that GitHub Repository

  ![Fork the repo](fork.png)

- Copy the URL of your repository from the GitHub UI

  ![Copy the fork's URL](clone.png)

- Clone your fork of the repository to your local disk

  ```bash
  git clone <url from the last step>
  ```

  and change into the created folder

- Rename `.env.sample` to `.env`

  On Windows you cannot do this in the Explorer.
  Instead, you have to use the `rename` command in a Command Window to change the name of the file.

- Edit `.env` and fill in apikey and url of your instance of the Tone Analyzer service (you have noted them down in the last section of this tutorial).

# Test the app locally

- Install dependent packages via: `npm i`
- Start the app via: `node app.js`
- Open the app by visiting [localhost:3000](http://localhost:3000/) in your browser.
- Press the submit button on the loaded page. The word "happy" should be displayed in the "mood" field
- You can play around by changing the content of both input fields.

Disclaimer: The scoring algorithm that condenses the complex response of the Tone Analyzer service to one single word is quite simple and might return surprising results. Feel free to improve.

![Tone app](toneapp.png)

# Push the working app to IBM Cloud

- In the root directory of the app create a file named `manifest.yml` with the following content:

    <pre>
    ---
    applications:
    - name: <span class="app_name"><span class="app_name">random-app-name</span></span>
    memory: 128M
    </pre>


- In your local terminal, log on to the IBM Cloud using `ibmcloud`:

    <pre>
    ibmcloud login -a https://cloud.ibm.com -r eu-de
    </pre>
    and
    <pre>
    ibmcloud target --cf
    </pre>

    Provide your username and password and select the organization and space. If no space exists yet, create one using `cf create-space dev -o $ORG_NAME`, where `$ORG_NAME` is the name of the org you choose on first login. This is typically your email address.

- Deploy your app to the cloud

  <pre>
  ibmcloud cf push
  </pre>

- Access the app in your browser as <a href="#" class="app_name">https://<span class="app_name">random-app-name</span>.eu-de.mybluemix.net</a>

- Submitting with all defaults should again return "happy" in the mood field

## References

* [Source code of the demo application](https://github.com/HRTCloudDemo/HRTToneDemo)
* [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)
* [Watson Tone Analyzer Documentation](https://cloud.ibm.com/docs/services/tone-analyzer/index.html#about)
* [More complete sample app on GitHub](https://github.com/watson-developer-cloud/tone-analyzer-nodejs)
