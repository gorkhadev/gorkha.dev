---
layout: syllabus_page
title: MVC Architecture
date: 25th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-two/
tags:
 - mvc
description: MVC Architecture
permalink: /ruby-on-rails/section-two/mvc-architecture/
prev_link: /ruby-on-rails/section-two/how-web-work/
next_link: /ruby-on-rails/section-three/
disable_toc: true
---

# MVC Architecture

Ruby on Rails is built around the _model-view-controller_(MVC) pattern. It's simply means to separate the data, logic, and display layers of your program.

## Models

  These are basically classes in Ruby on Rails that talk to the database. These classes act as an interface between you and database. You need not to write SQL queries most of the time.

  - These are resources that you use in the application. For example: `User`, `Post`, `Article`, `Idea` etc
  - They are usually accompanied by database layer. Most of the time you will have tables in the database accompanying your model. Like a `User` model will have `users` table etc.

## Views

  It handles the front-end of your application. It displays the output to browser and responding with non-html data. In a standard Rails application, views comprises of HTML, CSS, JavaScript, template engines etc. You will have to work with view
  files like for displaying list of users, you will have `users.html.erb` where `.erb` is an ERB template which contains HTML as well as Ruby statements.

## Controllers

  It take user input (like a URL) and decide what to do (like show a page, post a comment etc). They are responsible for choosing the right model and sending data to the views. Also, as your Rails knowledge improves, with constant refactoring, you move business logic into the model (fat model, skinny controller). In most of cases, controllers just take inputs, may be process something useful, call model methods, and pass outputs to the view.

## General flow of application

General flow of Rails application:

- Request is made at browser
- Request is received at router of rails application
- Request is routed to appropriate action in a controller
- Specific action in controller either renders a view template or communicates with model
- Model communicates with database
- Model sends back information to controller
- Controller renders view

## File naming pattern

Following table will give an idea how the files in Model, View or Controller and table looks like in a standard Rails application and also notice the naming pattern (or convention rather).

| Models | Views | Controllers | Table Name |
| `User` | `home.html.erb` | `users_controller.rb` | `users` |
| `Post` | `new.html.erb` | `posts_controller.rb` | `posts` |
| `Article` | `article.html.erb` | `articles_controller.rb` | `articles` |

## Suggested Video

Check this nice short video from [What is MVC Architecture](https://www.youtube.com/watch?v=mtZdybMV4Bw){:target="_blank"}.
