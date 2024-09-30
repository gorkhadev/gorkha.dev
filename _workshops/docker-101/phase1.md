---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Introduction and Lab Preparation
description: Introduction of the instructor(s), participants and lab preparation.
excerpt: A hands-on learning experience on Docker tool
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase1/
prev_link: /workshops/docker-101/
next_link: /workshops/docker-101/phase2/
comments: true
---

## Instructor Introduction

The instructor for this workshop is __Budh Ram Gurung__.
He is also known as __Dhanu Sir__ and founder of this platform.

He is an _IT Trainer, Mentor, and an Entrepreneur._

He has been teaching independently from 2019 and helping students in developing skills required get JOB in IT industry.

Previously, he has worked as a Software Developer ranging from startup to MNC ([Red Hat](https://redhat.com/){:target="_blank"}).

He has 13+ Years of IT experience ranging from Web Development, Quality Assurance(QA) and DevOps.

## Participant Introduction

Let's have a quick round of introduction from participants.

The participants can introduce themselves in the following format:

```
[Name] [Studying in 3rd Year BCA or Working in Foo Company]
[I want to become ...]
```

## Hands-on Lab Preparation

To go through the hands-on workshop, it is necessary to be ready with essential tools and softwares.

## Setting up Docker in your own machine

The following steps help you setup Docker in your machine so that you can quickly play with it.

Go through following steps to setup Docker in your machine:

- Visit [Official Docker Documentation](https://docs.docker.com/get-docker/){:target="_blank"}.
- Choose the installation path as per your operating system.

  {% include util/lazy-img.html src="workshops/docker-101/installation-path.jpg" alt="Docker Installation Path" %}

  __NOTE:__ For Windows or macOS, a native binary will be downloaded. Run the binary as per
  the instructions given in the official documentation.

- Once you are done with the installation, verify the setup by checking its version as (_version might vary in your machine_):

  ```shell
  $ docker version
  Client:
  Cloud integration: 1.0.17
  Version:           20.10.8
  API version:       1.41
  ... [ omitted ] ...
  Experimental:      true

  Server: Docker Engine - Community
  Engine:
    Version:          20.10.8
    API version:      1.41 (minimum version 1.12)
    ... [ omitted ] ...
    GitCommit:        v1.0.1-0-g4144b63
  docker-init:
    Version:          0.19.0
    GitCommit:        de40ad0
  ```

  __NOTE:__ If you are getting error like `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?` then try to reinstall or docker properly.


## Using Docker through online available tools or services

You can able to go through hands-on workshop from online alternative if you couldn't able to setup Docker in your machine.

- Use __Play with Docker__ service
  - Visit [Play with Docker labs](https://labs.play-with-docker.com/){:target="_blank"}
  - Click on _Login -> Docker_
  - _Sign In_ using _Docker Hub_ ID and password
  - Click on _Start_
  - Click on `ADD NEW INSTANCE`
  - Check running `docker version` in the terminal

  __NOTE:__ If you encountered with error `This page isn't working` after `Start` step, try refreshing the page.

## Docker Hub account

Docker Hub is one of the public registry to store Docker images. We will be using Docker Hub to store our demo application image.

Sign Up for [Docker Hub](https://hub.docker.com/signup) and create an account.
## Editor and plugins (optional)

We need a good editor to properly view, create or update textual content. These textual content
are configuration files, application content or else.

__VS Code__ is one of the widely used editor.
[Click here](https://code.visualstudio.com/download){:target="_blank"} to download. Once it is downloaded,
run the binary to install it.

__NOTE:__ You can use any other editor as per your choice.
