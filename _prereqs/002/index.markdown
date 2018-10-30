---
layout: prereq
title: Install Software
---

## Simple

We prepared a Virtual Machine (VM) image that contains all the necessary tools.

* Install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/)
* Create a new directory on your workstation, e.g. `ibm-cloud-lab`
* Create a new text file with the name `Vagrantfile` within that directory
* Copy the following content into this file:

```ruby
{% include_relative Vagrantfile %}
```

* Open a command prompt
* Change to the previously created directory (where the `Vagrantfile` is) and enter `vagrant up`
* Connect to the VM with `vagrant ssh`
* Start developing!

All files from your workstation that are in the same directory as the `Vagrantfile` will be visible in the VM at `/vagrant`. Therefore you may use your workstation's editor and run the code within the VM (as long as you work within `/vagrant`).

## Advanced

Alternatively, you can work directly from your workstation. Make sure you have the following tools available:

* An editor suitable for coding, e.g. Atom, Visual Studio Code or Sublime Text
* [`cf`](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)
* [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [`node`](https://nodejs.org/en/) (should come with npm)

On a Mac we recommend using [Homebrew](https://brew.sh/) to install these tools. For Ubuntu, you can follow the steps outlined in the [Vagrantfile](Vagrantfile).
