---
layout: default
title: Welcome
---

# {{ page.title }}

to the [IBM Cloud](https://www.ibm.com/cloud/) workshop at Hochschule Reutlingen.

[Learn more](https://www.ibm.com/cloud/learn)

## Prerequisites

Please complete the following steps _before_ coming to the lab:

{% for prereq in site.prereqs %}
  1. [{{ prereq.title }}]({{ site.baseurl }}{{ prereq.url }})
{% endfor %}

## Labs

{% for lab in site.labs %}
  1. [{{ lab.title }}]({{ site.baseurl }}{{ lab.url }})
{% endfor %}
