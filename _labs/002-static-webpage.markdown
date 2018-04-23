---
layout: lab
title: Run a static webpage on IBM Cloud
---

## Setup

As this workshop is in english, you should change your browser language to english:
- Instructions for [Firefox](!http://mzl.la/1KC5WH3)
- Instructions for [Chrome](https://support.google.com/chromebook/answer/173424?hl=en)
- Instructions for [Edge](http://www.tech-recipes.com/rx/64556/how-to-change-microsoft-edge-language/)
- Instructions for [Safari](https://pchelp.ricmedia.com/change-apple-safari-language-settings-mac/)

## Create a simple HTML file

1.  Create a new directory that will hold the files for the new web site
1.  In that directory, create a new file `index.html` with the following content:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>HRT Static Webpage Example</title>
    </head>
    <body>
    The content of the document...
    </body>
    </html>
    ```

1.  Preview the file in a web browser and edit until you are happy with it.

## Deploy

1.  Logon to the IBM Cloud using `cf`:

    <pre>
    cf login -a https://api.eu-de.bluemix.net
    </pre>

    Provide your username and password and select the organization and space. If no space exists yet, create one using `cf create-space dev -o $ORG_NAME`, where `$ORG_NAME` is the name of the org you choose on first login. This is typically your email address.

1.  Push the app:

    <pre>
    cf push <span class="app_name">random-app-name</span> -b staticfile_buildpack
    </pre>

    - The `-b` switch tells Cloud Foundry (CF) to use the static file buildpack for this application. Usually CF detects the type of application you want to deploy automatically. However, so far, our "application" is so simple that we need to tell CF that it should treat it as a set of static files.

    - Make sure you run this command from within the app directory (that contains the `index.html`).

1.  Observe the output and look for the line starting with `urls:`. This line tells you the fully-qualified domain name of the started application:

    <pre>
    requested state: started
    instances: 1/1
    usage: 1G x 1 instances
    urls: <span class="app_name">random-app-name</span>.eu-de.mybluemix.net
    last uploaded: Wed Nov 8 18:26:38 UTC 2017
    stack: cflinuxfs2
    buildpack: staticfile_buildpack

         state     since                    cpu    memory       disk       details
    #0   running   2017-11-08 07:26:52 PM   0.0%   3.9M of 1G   7M of 1G
    </pre>

  Open the URL in a browser and verify that the page looks just like when you opened it locally.

## References

* [Getting Started with the `cf` CLI](https://docs.cloudfoundry.org/cf-cli/getting-started.html)
* [Staticfile Buildpack](https://docs.cloudfoundry.org/buildpacks/staticfile/index.html)

{% include random_app_name.html %}
