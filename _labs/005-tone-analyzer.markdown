---
layout: lab
title: Consuming Cloud Services
---

The purpose of this exercise is to enable you to configure and use existing cloud services to add value to your application without much work.

## Introduction

The IBM Cloud platform (like other cloud platforms) provides a huge set of services
that can be used as ready to use building blocks to enhance your application. These services typically only have to be instantiated and configured to be used.

Such a service might be a database engines like Cloudant, and IOT platform, a mobile services that send push notification, or a service that provides artificial intelligence capabilities like the Watson Tone Analyzer used in this exercise.

The Watson Tone Analyzer service is able to detect moods and tones in a text submitted to it. In this exercise you will create a new instance of the Watson Tone Analyzer Service and connect it to an existing app that is [provided to you in a GitHub Repository](https://github.com/HRTCloudDemo/HRTToneDemo).

## Subscribe to the IBM Tone Analyzer Service

- Go to the _IBM Cloud_ main menu and click on **Catalog**,

  ![catalog](005/catalog.png)

- Select **Watson** in the menu on the left side

  ![Watson](005/watson.png)

- Click on **Tone Analyzer**

  ![Tone Analyzer](005/tone_tile.png)

- On the next page leave all default values as they are and click **Create**

  You will get redirected to another page. At this point of time the service is ready to use

- The credentials to access your service are displayed in the `Credentials` section on that page. Please press "show" to reveal username and password

  ![Credentials](005/show_creds.png)

- Note down url username and password. They will be used in the next section of this     tutorial

## Get the code of the sample app

The sample app uses the Watson Tone Analyzer service to score lines of text as happy or unhappy.
The app provides a basic user interface and an API that you will use in an later exercise.

- Fork the git repository [linked here](https://github.com/HRTCloudDemo/HRTToneDemo) into your own GitHub account by pressing the **Fork** button in that GitHub Repository

  ![Fork the repo](005/fork.png)

- Copy the URL of your repository from the GitHub UI

  ![Copy the fork's URL](005/clone.png)

- Clone your fork of the repository to your local disk

  ```bash
  git clone <url from the last step>
  ```

  and change into the created folder

- Rename `.env.sample` to `.env`

  On Windows you cannot do this in the Explorer. 
  Instead, you can use the `rename` command in a Command Window change the name of the file.

- Edit the `.env` and fill in username, password and url of your instance of the Tone Analyzer service

# Test the app locally

- Install dependent packages via: `npm i`
- Start the app via: `node app.js`
- Open the app by visiting [http://localhost:3000](http://localhost:3000) in your browser. If you are using the Vagrant image, the port will be forwarded to your workstation as [http://localhost:12345](http://localhost:12345) instead.
- Press the submit button on the loaded page. The word "happy" should be displayed in the "mood" field
- You can play around by changing the content of both input fields.

Disclaimer: The scoring algorithm that condenses the complex response of the Tone Analyzer service to one single word is quite simple and might return surprising results. Feel free to improve.

![Tone app](005/toneapp.png)

# Push the working app to IBM Cloud

In the root directory of the app create a file named `manifest.yml` with the following content:

<pre>
---
applications:
- name: <span class="app_name"><span class="app_name">random-app-name</span></span>
  memory: 128M
  host: <span class="app_name"><span class="app_name">random-app-name</span></span>
</pre>

- Set the API endpoint to your region

  ```bash
  cf api api.eu-de.bluemix.net
  ```

- Login into the IBM Cloud using your credentials

  ```bash
  cf login
  ```

- Target your organization and space

  ```bash
  cf target -o <YOUR ORG> -s <YOUR SPACE>
  ```

- Deploy your app to the cloud

  ```bash
  cf push
  ```

- Access the app in your browser as https://<span class="app_name">random-app-name</span>.eu-de.bluemix.net

- Submitting with all defaults should again return "happy" in the mood field

## References

* [Source code of the demo application](https://github.com/HRTCloudDemo/HRTToneDemo)
* [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)
* [Watson Tone Analyzer Documentation](https://console.bluemix.net/docs/services/tone-analyzer/index.html#about)
* [More complete sample app on GitHub](https://github.com/watson-developer-cloud/tone-analyzer-nodejs)

{% include random_app_name.html %}
