---
layout: lab
title: Port the Chat App to IBM Cloud
---

## Get the code

Clone your chat application repository to your local disk.

## Create a manifest

Create a new deployment `manifest.yml` file in the cloned directory with the content shown below. Be sure to provide a name that is unique within the domain.

<pre>
---
applications:
- name: <span class="app_name">random-app-name</span>
  memory: 512M
  instances: 1
</pre>

This is a fairly simple manifest that should work for you as well. If you need want to check for more options please see the  [Cloud Foundry documentation on deployment using manifests](https://docs.cloudfoundry.org/devguide/deploy-apps/manifest.html).

## Hint: Configure the correct port

IBM Cloud assigns an internal port number to your app automatically.

This port number is not visible to the outside world but only used by the routers
that connect external users to your application.

In your app you can find out correct port at startup like this:

<pre>
let port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
</pre>

## Deploy

Run `cf push` to push this to IBM Cloud. Only proceed to the next step if your app is working correctly.

## Create a CI/CD pipeline

Repeat the steps from [lab 3]({% link _labs/003/index.markdown %}) and create another pipeline for deploying this app.

## Test

Go to https://<span class="app_name">random-app-name</span>.eu-de.mybluemix.net

## References

* [Create a Toolchain](https://console.bluemix.net/docs/toolchains/toolchains_overview.html)
