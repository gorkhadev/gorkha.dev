---
layout: tutorial_series
learning_type: workshops
date: 30th Sept, 2024 02:00:00
tutorial_name: docker-101
title: Working with basic Docker Commands
description: Play around with basic Docker Commands
excerpt: Play around with basic Docker Commands
thumbnail: workshops/docker-101/thumb.jpg
permalink: /workshops/docker-101/phase3/
prev_link: /workshops/docker-101/phase2/
next_link: /workshops/docker-101/phase4/
comments: true
---

In this section, you will go through some of the commonly used Docker commands.
These commands will you understand more about the functionalities of Docker and its ecosystem.

## Basic Commands

| Command | Description | Example |
| :- | :- | :- |
| `docker version` | Show Docker version | `docker version` |
| `docker info` | Display system-wide information | `docker info` |
| `docker pull` | Pull docker image or repository from registry | `docker pull alpine` |
| `docker images` | List images | `docker images` |
| `docker run` | Run a command in a new container | `docker run -it alpine sh` |
| `docker create` | Create a new container | `docker create -it alpine sh` |
| `docker exec` | Run a command in running container | `docker exec <container id/name> sh` |
| `docker ps` | List containers | `docker ps` |
| `docker inspect` | Display information on Docker object | `docker inspect <object id/name>` |
| `docker logs` | Fetch the logs of a container | `docker logs <container id/name>` |
| `docker stats` | Display a live stream of container(s) resource usage | `docker stats` |
| `docker network` | Manage networks | `docker network ls` |
| `docker rename` | Rename a container | `docker rename <old name> <new name>` |
| `docker stop` | Stop one or more running containers | `docker stop <container id/name> [or more]` |
| `docker rm` | Remove one or more containers | `docker rm <container id/name> [or more]` |
| `docker rmi` | Remove one or more images | `docker rmi <image id/name> [or more]` |
| `docker volume` | Manage volumes | `docker volume ls` |
| `docker build` | Build an image from a Dockerfile | `docker build -t image_name:v1 .` |

__NOTE:__ Check the complete list of [Docker CLI here](https://docs.docker.com/engine/reference/commandline/docker/){:target="_blank"}.


## Playing with Commands

Try running following commands and understand what is happening:
>
~~~bash
# List all images
$ docker images
>
# Pull Postgres latest image (debian based)
$ docker pull postgres
>
# Pull Postgres alpine image
$ docker pull postgres:13.4-alpine
>
# Run Postgres container based on latest image
$ docker run --name deb-postgres -e POSTGRES_PASSWORD=password -d postgres
>
# Run Postgres container based on alpine image
$ docker run --name alpine-postgres -e POSTGRES_PASSWORD=password -d postgres:13.4-alpine
>
# See all the running containers
$ docker ps
>
# Execute command on running container (run same for alpine-postgres)
$ docker exec -it deb-postgres bash
root@83b53844c490:/# su postgres
postgres@83b53844c490:/$ psql
>
# --- playaround with database ----
CREATE DATABASE dhanu; # create database
\c dhanu; # use database
CREATE TABLE users (
  person_id serial PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  email  VARCHAR(255) UNIQUE NOT NULL
); # create users table
INSERT INTO users(username, password, email)
VALUES ('admin', 'admin123', 'admin@dhanugurung.com');
INSERT INTO users(username, password, email)
VALUES ('foo', 'foo123', 'foo@dhanugurung.com');
# --- end of playing ----
>
\q # exit from psql
exit # exit from postgres user
exit # exit from root
>
# Stop running container
$ docker stop alpine-postgres
>
# Seel all containers (exited as well)
$ docker ps -a
>
# Remove an exited container
$ docker stop alpine-postgres
>
# Remove a running container
$ docker stop deb-postgres
>
# See logs of a container
$ docker logs deb-postgres
~~~
