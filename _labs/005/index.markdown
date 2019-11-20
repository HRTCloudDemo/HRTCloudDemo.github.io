---
layout: lab
title: Enhance your Chat application by adding translation capabilities
---

In this lab you will use IBM Cloud Functions, a serverless offering, to generate ad-hoc translations for the messages that are sent to the chat application. You should work in a team of two developers (e.g. with your neighbor) and collaborate on improving the application. One member of the team should focus on developing the Actions the perform the language detection and the translation. The other member focus on enhancing the existing chat application and integrate the REST endpoint for providing the translations.

# Setup & Preparations

## Cloud Functions

- Enter the [Cloud Functions User-Interface](https://cloud.ibm.com/functions)

  ![Cloud Functions](cloud-functions-ui.png)

- Create a Cloud Functions namespace in the Frankfurt region

  ![Cloud Functions Namespace Create](cloud-functions-ui_namespace-create.png)

- Allow you parter to work in the Cloud Functions Namespace

   In order to enable your partner to work in the same Cloud Functions Namespace, you should ...

- Once invited, the invited person needs to switch the account in the account switcher to be able to see the other persons apps

- Setup the CLI plugin for Cloud Functions (see: https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-cli_install#cli_plugin_setup)

## Subscribe to the IBM Language Translator Service

- Go to the _IBM Cloud_ main menu and click on **Catalog**,

  ![catalog](catalog.png)

- Select **AI** in the menu on the left side

  ![Watson](watson.png)

- Click on **Language Translator**

  ![Language Translator](language-translator-tile.png)

- On the next page select the Frankfurt region and click **Create**

  You will get redirected to another page. At this point of time the service is ready to use

- The credentials to access your service are displayed in the `Service Credentials` section on that page. Press "View Credentials" for the "Auto-generated service credentials" in order to reveal the api key and url

  ![Credentials](show_creds.png)

- Note down apikey and url, because you will need them in the further course of this lab.

# Developing

## Get the code of the sample app

The sample app provides skeletons for all needed Cloud Functions components that you can you as a foundation. It provides a basic interface and deployment commands that can be used to update your code fragments.

- Fork the git repository [linked here](https://github.com/HRTCloudDemo/HRTTranslationDemo) into your own GitHub account by pressing the **Fork** button in that GitHub Repository

  ![Fork the repo](fork.png)

- Copy the URL of your repository from the GitHub UI

  ![Copy the fork's URL](clone.png)

- Clone your fork of the repository to your local disk

  ```bash
  git clone <url from the last step>
  ```

  and change into the created folder

- Allow your team member to commit to the forked repository, by adding him as contributor to the project

- Open the `config/ai-params.json` file and replace the `apikey` and `url` using the one that you retrieved from the Language Translator service credentials

- Deploy the set of Actions and the Sequence configuration by executing following commands

  ```bash
  ibmcloud fn package create hrt-demo

  ibmcloud fn action update hrt-demo/detect-language --docker ibmarc/cloud-functions-ai-translator:v1 src/detect-language.js --param-file config/ai-params.json --web true

  ibmcloud fn action update hrt-demo/translate --docker ibmarc/cloud-functions-ai-translator:latest src/translate.js -P config/ai-params.json --web true

  ibmcloud fn action create hrt-demo/identify-and-translate --sequence hrt-demo/detect-language,hrt-demo/translate --web true
  ```

- Retrieve the URL of the created Sequence

  ```bash
  ibmcloud fn action get hrt-demo/identify-and-translate --url
  ```

- Test the Sequence by opening the URL in the browser

  ![Test the Sequence](cloud-functions_sequence-test.png)

## Detect language

Following tasks should help you as a structure to help you finish this task:
- Initialize the LanguageTranslatorV3 service using proper Action input parameters (see Service credentials of the Language Translator Service)
- Check whether the input parameters contain a text (that can be identified)
- Call the language identification API of the translation service (see: https://cloud.ibm.com/apidocs/language-translator?code=node#identify-language)
  - if successful, resolve exactly like shown below with the language that is most probable the best one in the "language" property and the confidence it got detected in the "confidence" property
  - in case of errors during the call resolve with an error message according to the pattern found in the catch clause below

## Translate text

Following tasks should help you as a structure to help you finish this task:
- Initialize the LanguageTranslatorV3 service using proper Action input parameters (see Service credentials of the Language Translator Service)
- Check whether the input parameters contain a text (that can be identified), a source and target language
- Call the language translation API of the translation service (see: https://cloud.ibm.com/apidocs/language-translator?code=node#translate)
  - if successful, resolve exactly like shown below with the translated text in the "translation" property, the number of translated words in "words" and the number of characters in "characters".
  - in case of errors during the call resolve with an error message according to the pattern found in the catch clause below

## Chat application integration

- TBD

## References

* [Cloud Functions - Getting Started](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-getting-started)
* [Cloud Functions - Creating serverless REST APIs](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-apigateway)
* [Cloud Functions API Docs](https://cloud.ibm.com/apidocs/functions)
* [Language Translator API Docs](https://cloud.ibm.com/apidocs/language-translator)
