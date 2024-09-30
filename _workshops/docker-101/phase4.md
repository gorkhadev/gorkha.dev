---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Build and Ship App Image
description: Learn how to build a Docker image of app and how to ship it
excerpt: Learn how to build a Docker image of app and how to ship it
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase4/
prev_link: /workshops/docker-101/phase3/
next_link: /workshops/docker-101/phase5/
comments: true
---

In the previous section, we had seen how to build, run and ship static website or application.
It had only one container.

In this section, we will running application which contain Database and we need at
least two container to properly run the application.

## Building Application Image

- Get the application source code.
  - Download zip or tar file from [here](https://github.com/gorkhadev/docker-nginx-app/releases/tag/v1){:target="_blank"} and unzip in your machine
  - Or you can clone the repo as `git clone https://github.com/gorkhadev/docker-nginx-app`
- Enter into the `docker-nginx-app` directory
- Check the Dockerfile:

  ~~~bash
  FROM nginx

  COPY ./brgrestaurant/ /usr/share/nginx/html
  ~~~

- Build the application image by running following command:

  ~~~bash
  $ docker build -t static-app:v1 .
  ~~~

- Run the application container as:

  ~~~bash
  $ docker run -d -p 8000:80 static-app:v1
  ~~~

- Open URL [http://localhost:8000](http://localhost:8000){:target="_blank"} in your browser.

## Shipping the Application Image

To ship the application image, we need registry where we can push our application image.
For the demo purpose, we will be using [Docker Hub](https://hub.docker.com/){:target="_blank"}.

__NOTE:__ One can use private registry as well to store Docker images.

### Prepare the application image

Currently, our application image repository name is `static-app`. We need to rename as per our
Docker Hub username.

Run following command to give new tag to image:

~~~bash
$ docker login
# Enter your Docker Hub credentials

$ docker tag static-app:v1 mentorbrg/static-app:v1
~~~

__NOTE:__ Use your _Docker Hub_ username instead of _mentorbrg_.

### Push the application image

Run following command to push the application image:

~~~bash
$ docker push mentorbrg/static-app:v1
~~~

## Verify the application image

Visit [Docker Hub](https://hub.docker.com/){:target="_blank"} and verify the application image.

## Use application image

To use application image, we will be deleting the application image we created in earlier step.
Then, Docker will pull the image from registry and run the container out of it.

~~~bash
# Delete previous app image
$ docker rmi -f mentorbrg/static-app:v1

# Run the container from app image
$ docker run -d -p 8000:80 mentorbrg/nginx-site:v1
~~~

Open URL [http://localhost:8000](http://localhost:8000){:target="_blank"} in your browser.
