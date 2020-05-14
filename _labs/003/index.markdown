---
layout: lab
title: Use FaaS and Cloud Services to implement a Translation pipeline
---

In this lab you will use IBM Cloud Functions, a serverless offering, to generate ad-hoc translations for the messages that are sent to the chat application. You should work in a team of two developers (e.g. with your neighbor) and collaborate on improving the application. One member of the team should focus on developing the Actions that perform the language detection and the translation. The other member should focus on enhancing the existing chat application and integrate the REST endpoint for providing the translations.

# Setup & Preparations

## Cloud Functions

- Enter the [Cloud Functions User-Interface](https://cloud.ibm.com/functions)

  ![Cloud Functions](cloud-functions-ui.png)

- Create a Cloud Functions namespace in the Frankfurt region

  ![Cloud Functions Namespace Create](cloud-functions-ui_namespace-create.png)

- If not done already, [invite your partner](https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv#inviting-users) to your Cloud account

- Allow your parter to work in the Cloud Functions Namespace

  - Navigate to `Manage > Access (IAM) > Users` and click on the users name

    ![Manage User Access](cloud-users.png)

  - Navigate to the `Access policies` tab and click `Assign access`

    ![Access policies](cloud-users_assign-access.png)

  - Click the `IAM services` title

    ![Assign access within IAM](cloud-users_assign-access_iam.png)

  - Select your resource group, the `Functions service`, the region `Frankfurt` and grant `Writer` access on Service level

    ![Grant access](cloud-users_assign-access_iam-functions.png)

- Once invited, the invited person needs to switch the account in the account switcher to be able to see the other persons apps

- Setup the [CLI plugin for Cloud Functions](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-cli_install#cli_plugin_setup)

  ```bash
  ibmcloud plugin install cloud-functions
  ```

## Subscribe to the IBM Language Translator Service

- Go to the _IBM Cloud_ main menu and click on **Catalog**,

  ![catalog](catalog.png)

- Type **Language Translator** in the search form and press `Return`

  ![catalog-search](catalog_search.png)

- Click on the **Language Translator** tile

  ![Language Translator](language-translator-tile.png)

- On the next page select the Frankfurt region and click **Create**

  You will get redirected to another page. At this point of time the service is ready to use

  ![Create Language Translator](create-translator-service.png)

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

- Use the Cloud Functions CLI to set the correct Namespace context

  - Set a resource group

    ```bash
    ibmcloud target -g Default
    ```

  - Target the `Frankfurt` Region

    ```bash
    ibmcloud target -r eu-de
    ```

  - Retrieve the list of all Namespaces within this region

    ```bash
    ibmcloud fn namespace list
    ```

  - Utilize the `id` of the Namespace you would like to use and set this as your current namespaces

    ```bash
    ibmcloud fn property set --namespace <id>
    ```  

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

- In order to analyze the Action code that was just executed you can either use the [Monitoring Dashboard](https://cloud.ibm.com/functions/dashboard) or the CLI

  - Get a list of all Actions/Sequences that were executed (aka `activations`). The list of activations is sorted in a descending order (newest on top)

    ```bash
    ibmcloud fn activation list
    ```

  - Retrieve the detailed output of a single activation

    ```bash
    ibmcloud fn activation get <activation-id>
    ```

  - **Note:** the activation record also contains `console.log` outputs. You should use logging in order to analyze and debug your Action code

## Implement Language Detection

Your task is to implement language detection to the action code in "src/detect-language.js"

(look for the "*******TODO**********" comment to find the place to add your code)


Following items should help you as a structure to help you finish this task:
- Use the sample code provided in the API documentation of the [Language Identification API](https://cloud.ibm.com/apidocs/language-translator?code=node#identify-language)
- Initialize the LanguageTranslatorV3 service using proper input parameters (see Service credentials of the Language Translator Service)
- Check whether the input parameters contain a text that can be identified
- Call the language identification API of the translation service
  - if successful, resolve (exactly as shown in "src/detect-language.js"),
    with the language that is most probable the best one in the "language" property
    and the confidence it got detected in the "confidence" property
  - in case of errors during the call resolve with an error message according to the pattern found in the catch clause in "src/detect-language.js"
- use the "ibmcloud fn action" command above to install the action after you have changed the code

## Implement Text Translation

Your task is to implement language translation to the action code in "src/translate.js"

(look for the "*******TODO**********" comment to find the place to add your code)

Following items should help you as a structure to help you finish this task:
- Use the sample code provided in the API documentation of the [Translation API](https://cloud.ibm.com/apidocs/language-translator?code=node#translate)
- Initialize the LanguageTranslatorV3 service using proper input parameters (see Service credentials of the Language Translator Service)
- Check whether the input parameters contain a text that can be translated, a source and target language
- Call the language translation API of the translation service
  - if successful, resolve (exactly as shown in "src/translate.js") with the translated text in the "translation" property,
    the number of translated words in "words"
    and the number of characters in "characters".
  - in case of errors during the call resolve with an error message according to the pattern found in the catch clause in "src/detect-language.js"
- use the "ibmcloud fn action" command above to install the action after you have changed the code

## Test your pipeline with various languages
Test your translation pipeline with some examples from different languages.
It is vailable under the URL you get with this command:
```bash
ibmcloud fn action get hrt-demo/identify-and-translate --url
```

## References

* [Cloud Functions - Getting Started](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-getting-started)
* [Cloud Functions - Creating serverless REST APIs](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-apigateway)
* [Cloud Functions - Monitoring Dashboard](https://cloud.ibm.com/docs/openwhisk?topic=cloud-functions-monitor#monitor_dash_use)
* [Cloud Functions API Docs](https://cloud.ibm.com/apidocs/functions)
* [Language Translator API Docs](https://cloud.ibm.com/apidocs/language-translator)
* [Fetching a URL from your Browser](https://javascript.info/fetch)
* [Fetching a URL from your NodeJs code](https://github.com/request/request)
