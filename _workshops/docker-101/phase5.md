---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Build Dynamic App Image
description: Learn to build dynamic app image in Docker
excerpt: Learn to build dynamic app image in Docker
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase5/
prev_link: /workshops/docker-101/phase4/
next_link: /workshops/docker-101/phase6/
comments: true
---

Now, we know how to build and ship application through the _Static Website_ workflow we gone through in previous episode.

In this episode, we will se how to build and deploy Dynamic application which need Database to store their data.

## Building Application Image

- Get the application source code.
  - Download zip or tar file from [here](https://gitlab.com/nanuchi/techworld-js-docker-demo-app){:target="_blank"} and unzip in your machine
  - Or you can clone the repo as `git clone https://gitlab.com/nanuchi/techworld-js-docker-demo-app.git docker-node-app`
- Enter into the `docker-node-app` directory
- Check the Dockerfile:

  ~~~bash
  FROM node:13-alpine

  ENV MONGO_DB_USERNAME=admin \
      MONGO_DB_PWD=password

  RUN mkdir -p /home/app

  COPY ./app /home/app

  # set default dir so that next commands executes in /home/app dir
  WORKDIR /home/app

  # will execute npm install in /home/app because of WORKDIR
  RUN npm install

  # no need for /home/app/server.js because of WORKDIR
  CMD ["node", "server.js"]
  ~~~

- Build the application image by running following command:

  ~~~bash
  $ cd docker-node-app
  $ docker build -t node-app:v1 .
  ~~~

## Starting the Application

To properly start the application, we need to setup _Mongo DB_ through running Mongo DB container.

__NOTE:__ Try this in your local setup as in the online service, it is giving error due to system configurations.

- Create docker network:

  We are creating a separate network here for our dynamic application instead of using default Docker network.

  ~~~bash
  $ docker network create mongo-network
  ~~~

- Start Mongo DB:

  We are creating a separate network here for our dynamic application instead of using default Docker network.

  ~~~bash
  $ docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo
  ~~~

- Start Mongo Express (Web-based MongoDB admin interface):

  ~~~bash
  $ docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password --net mongo-network --name mongo-express -e ME_CONFIG_MONGODB_SERVER=mongodb mongo-express
  ~~~

- Open Mongo Express interface from browser using URL [http://localhost:8081](http://localhost:8081){:target="_blank"}.
- Create _user-account_ database and _users_ collection in Mongo Express.
- Start your code locally by running following commands:

  ~~~bash
  npm install
  node server.js

  # NOTE: For this step, you need to have `Node JS` installed in your machine.
  ~~~

  __NOTE:__ You can run the container of the application image built in the [Building Application Image](#building-application-image) above to start your application.

- Access the application UI from browser using URL [http://localhost:3000](http://localhost:3000){:target="_blank"}.
