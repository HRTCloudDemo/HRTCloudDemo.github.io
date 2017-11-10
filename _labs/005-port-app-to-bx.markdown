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

## Deploy

Run `cf push` to push this to IBM Cloud. Only proceed to the next step if your app is working correctly.

## Create a CI/CD pipeline

{% include pipeline.markdown %}

  Create a `manifest.yml` with the following content:

  <pre>
      ---
      applications:
      - name: <span class="app_name">whochats</span>
        memory: 128M
        host: <span class="app_name">whochats</span>
  </pre>

    on your local machine. Then manually run `cf push` and verify your app is picking up the right name. _IBM Cloud_ is adding your host to the `eu-de.mybluemix.net` domain  by default so your FQDN is <code><span class="app_name">random-app-name</span>.eu-de.mybluemix.net</code>. Once you can access your hostname, commit and push your changes to git and wait for the pipeline to finish.

{% include random_app_name.html %}

## Test

Go to [https://<span class="app_name">random-app-name</span>.eu-de.mybluemix.net](https://<span class="app_name">random-app-name</span>.eu-de.mybluemix.net)

## References

 * [Create a Toolchain](https://console.bluemix.net/docs/toolchains/toolchains_overview.html)

{% include random_app_name.html %}
