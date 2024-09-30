---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Overview of Docker Compose
description: Get started with Docker Compose and run multiple containers
excerpt: Get started with Docker Compose and run multiple containers
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase7/
prev_link: /workshops/docker-101/phase6/
comments: true
---

So far we have seen how to run single container from command line at once.

In this episode, we will see how to run multiple containers at once, through single command.

## Overview of Docker Compose

- Tool for defining and running multi-container Docker applications.
- YAML file (`docker-compose.yaml`) defines the application's services configurations.
- Single command to start and stop all services.

## Running Dynamic application without volume

In this section, we will run our Dynamic application using Docker Compose without having any _Volume_.

- Our _docker-compose.yaml_ will looks like below:

  ~~~bash
  version: '3'
  services:
    my-app:
      image: docker-node-app
      ports:
        - 3000:3000
    mongodb:
      image: mongo
      ports:
        - 27017:27017
      environment:
        - MONGO_INITDB_ROOT_USERNAME=admin
        - MONGO_INITDB_ROOT_PASSWORD=password
    mongo-express:
      image: mongo-express:0.54 # latest is having issue
      ports:
        - 8080:8081
      environment:
        - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
        - ME_CONFIG_MONGODB_ADMINPASSWORD=password
        - ME_CONFIG_MONGODB_SERVER=mongodb
  ~~~

- Start the application using following command:

  ~~~bash
  $ docker-compose up # you can use -d in detach mode
  ~~~

  __NOTE:__ Note that the application image _docker-node-app_ has to be build before running `docker-compose up` command.

  >> ## Instructor
  >>
  >> Explain the docker-compose.yaml file. Show how to create data in this running application.
  >> Also, discuss the data persistance issue.
  {: .instructor}

## Running Dynamic application with volume

Now, we will run our Dynamic application using Docker Compose having _Volume_.

- Our _docker-compose.yaml_ will looks like below:

  ~~~bash
  version: '3'
  services:
    my-app:
      image: docker-node-app
      ports:
        - 3000:3000
    mongodb:
      image: mongo
      ports:
        - 27017:27017
      environment:
        - MONGO_INITDB_ROOT_USERNAME=admin
        - MONGO_INITDB_ROOT_PASSWORD=password
      volumes:
        - mongo-data:/data/db
    mongo-express:
      image: mongo-express:0.54 # latest is having issue
      ports:
        - 8081:8081
      environment:
        - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
        - ME_CONFIG_MONGODB_ADMINPASSWORD=password
        - ME_CONFIG_MONGODB_SERVER=mongodb
  volumes:
    mongo-data:
      driver: local
  ~~~

  >> ## Instructor
  >>
  >> Show the demo of data persistance issue.
  {: .instructor}
  