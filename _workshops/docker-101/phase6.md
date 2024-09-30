---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Persist App Data in Docker
description: Learn how to persiste application data in Docker container
excerpt: Learn how to persiste application data in Docker container
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase6/
prev_link: /workshops/docker-101/phase5/
next_link: /workshops/docker-101/phase7/
comments: true
---

In the previous episode, we saw how to run dynamic application and interact with it by updating user's information.

However, one of the issue currently is that when we restart or remove the container, then we lost the data we updated to our user.

## Overview of Docker Volume

{% include util/lazy-img.html src="workshops/docker-101/volume.jpg" alt="Docker Volume" caption="https://docs.docker.com/engine/storage/volumes/" %}

- We need Docker volume for data persistance.
- Folder or directory in the host file system is mounted into the virtual file system of Docker. Example:

  ~~~bash
  $ docker run -d -p 8080:80 --volume /home/username/static-app:/usr/share/nginx/html nginx
  ~~~

- There type of volume types:

  - __Host Volume:__ You decide where on the host file system the reference is made. See above example.
  - __Anonymous Volume:__ For each container, a folder is generated in the host file system that get mounted.

    ~~~bash
    $ docker run -v /var/lib/mysql/data mysql
    ~~~

    __NOTE:__ Above command is just an example and might not work. It might be stored in the host system defined by Docker like in Linux it will be mounted on `/var/lib/docker/volumes/random-hash/_data`

  - __Named Volume:__ You can reference the volume by name and it should be used in production.

    ~~~bash
    $ docker run -v app-db:/var/lib/mysql/data mysql
    ~~~

    __NOTE:__ Above command is just an example and might not work. It might be stored in the host system defined by Docker like in Linux it will be mounted on `/var/lib/docker/volumes/random-hash/_data`
