---
layout: lab
title: Install prerequisite software
---

## Simple

We prepared a Virtual Machine (VM) image that contains all the necessary tools.

* Install [Vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/)
* Copy [this file](002/Vagrantfile) into a new directory on your workstation.
* Open a command prompt and enter `vagrant up`
* Connect to the VM with `vagrant ssh`
* Start developing!

  Again, if you do all your development in `/vagrant`, you will be able to edit all files from your workstation as they are next to your `Vagrantfile`.

## Advanced

Alternatively, you can work directly from your workstation. Make sure you have the following tools available:

* An editor suitable for coding, e.g. Atom, Visual Studio Code, Sublime Text, vim or Emacs
* [`cf`](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)
* [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [`node`](https://nodejs.org/en/) (should come with npm)

On a Mac we recommend using [Homebrew](https://brew.sh/) to install these tools. For Ubuntu, you can follow the steps outlined in the [Vagrantfile](002/Vagrantfile).
