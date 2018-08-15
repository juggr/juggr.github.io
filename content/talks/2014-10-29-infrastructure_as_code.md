---
title: "Infrastructure as Code"
date: 2014-10-29
tags: java
speaker: [bruno_devic]
location: hochschule_obermarkt
---

Infrastructure as Code is one of the important cornerstones of continuous delivery. The concept that infrastructure
should be treated as code is really powerful. Server configuration, services, installed packages, relationships with
other servers etc...should be modeled as code to be automated and have a predictable outcome, removing manual steps
prone to errors and decreasing the cycle time.

Spinning up a new virtual environment or a new version of the environment then becomes a matter of executing a script
that can create and provision an image or set of images – from the barebone operating system to the complete application
stack installed and configured.

This concept is increasingly important today when the number of environments and their instances has gone up by orders
of magnitudes and the release frequency has moved from monthly to weekly or even daily releases.

In this session we will showcase a few popular tools used to implement this concept: `Vagrant`, `Puppet` and `Docker`.

**Materialien:**

- [Vortragsfolien](/downloads/infrastructure_as_code/slides-infrastructure-as-code.html)
- [Demos](/downloads/infrastructure_as_code/infrastructure_as_code_demo.zip)
