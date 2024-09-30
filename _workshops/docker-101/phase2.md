---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Overview of Docker
description: Get started with Docker and its basic terminologies
excerpt: Overview of the Docker tool
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase2/
prev_link: /workshops/docker-101/phase1/
next_link: /workshops/docker-101/phase3/
comments: true
---

Docker is an open platform for developing, shipping, and running applications.

- Separate your applications from your infrastructure
- Manage infrastructure in the same ways you manage your applications
- Reduce the delay between writing code and running it in production

## Docker Architecture

{% include util/lazy-img.html src="workshops/docker-101/architecture.webp" alt="Docker 101 Architecture" caption="https://docs.docker.com/get-started/docker-overview/" %}

### Docker daemon (dockerd)

- Listens for Docker API requests.
- Manages Docker objects such as images, containers, networks, and volumes.
- Communicate with other daemons to manage Docker services.

### Docker client (docker)

- Command Line Interface (CLI) for user to talk to Docker daemon.
- Communicate with more than one daemon.

### Docker registries

- Stores Docker images.
- _Docker Hub_ is a public registry that anyone can use.
- Docker uses _Docker Hub_ to look for images by default else use custom registry.
- You can run your own private registry. Used by companies for security reasons.
- `docker pull` pull the required image from registry and `docker push` push the image to the registry.

### Docker image

- A read-only template with instructions for creating a Docker container like `Class` in programming.
- Often an image is based on another image, with some additional customization.
  For example, you can create an Apache web server image based on Ubuntu image.
- You can create your own images or use images created by others.
- To build your own image, you create a _Dockerfile_ with a instructions for defining the steps needed to create the image and run it.
- Images define both what you want to package in application and its dependencies.

### Docker container

- A runnable instance of an image like `Object` in programming.
- By default, container is isolated from other containers and its host machine. The isolation can be controlled.
- You can _create, start, stop, move, or delete_ a container using the Docker API or CLI.
- You can attach storage to it.
- When a container is removed, any changes to its state that are not stored in persistent storage disappear.

> ## Exercise: docker run
>
> Try running following command in your terminal and see what happens.
>
> ~~~bash
> $ docker run -i -t ubuntu /bin/bash
> ~~~
>
> Try to play around with some of shell by running Linux commands
>
> ~~~bash
> $ ls
> $ ls /home/
> $ cd /home/
> $ mkdir docker-workshop
> $ cd docker-workshop
> $ cat > first.txt
> The first file in the docker-workshop directory.
> [ Press Ctrl+ D ]
> $ ls
> first.txt
> $ cat first.txt
> The first file in the docker-workshop directory.
> ~~~
>
> __NOTE:__ You can play around with other linux commands as well.
{: .challenge}

>> ## Instructor
>>
>> Explain the flags `-i`, `-t` and pulling of image. Show exiting from container and running it again.
{: .instructor}

## Dockerfile

- A text document that contains instructions for building Docker image.
- Instructions are usually commands a user could call on the command line to assemble an image.
- Each instruction in the Dockerfile adds a new "layer" to the image.
- Using `docker build` users can create an automated build that executes several command-line instructions in succession.

> ## Dockerfile Example
>
> ~~~bash
> FROM node:16-alpine3.11
>
> # create app directory in container
> RUN mkdir -p /home/app
>
> # copy local app to container app directory
> COPY ./app /home/app
>
> # set default app direcotry in container
> WORKDIR /home/app
>
> # install app dependencies
> RUN npm install
>
> # run the server
> CMD ["node", "server.js"]
> ~~~
{: .example}
