---
layout: default
title: Welcome
---

# {{ page.title }}

to the [IBM Cloud](https://www.ibm.com/cloud/) workshop at Hochschule Reutlingen.

## IBM Cloud Introduction Videos

[![IBM Cloud](https://img.youtube.com/vi/VXqbRNwXC2A/0.jpg)](https://www.youtube.com/watch?v=VXqbRNwXC2A)
[![IBM Cloud Programming](https://img.youtube.com/vi/Bsy6mhRc7ZA/0.jpg)](https://www.youtube.com/watch?v=Bsy6mhRc7ZA)

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
