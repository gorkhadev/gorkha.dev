---
layout: course
title: Ruby on Rails
course: ruby-on-rails
permalink: /ruby-on-rails/
page_name: ruby-on-rails
disable_toc: true
disable_sidebar: true
---

{% include util/note.html
    note="This is a comprehensive course on Ruby on Rails. We will learn by building a small app and adding features on top of it."
    type="important"
%}

# Welcome to Ruby on Rails

This course has been designed to get the basic understanding of Ruby on Rails web framework. After completing this course you should be able to understand and build dynamic web applications in Ruby on Rails.

{% include util/highlight.html
    text="This course has been designed with the intention of being used in an interactive online or classroom teaching session. <br><em>However, one can use this syllabus and self-learn Ruby on Rails.</em>" class="h4"
%}

The course has been divided into different sections with a section goal.

{% include util/note.html
    note="It is highly recommended to use Linux or macOS for the Ruby on Rails development as the experience of working
    in Windows OS is sometime painful."
    type="caution"
%}

## Ruby on Rails Introduction

Ruby on Rails is a server-side web application development framework written in the [Ruby](/ruby/) programming language.
It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.

It is a model–view–controller (MVC) framework and provides default structures for a database, a web service, and web pages.
It encourages and facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing.

- It is created by David Heinemeier Hansson (DHH) and released around July 2004.
- It emphasizes _Convention over Configuration (CoC)_, and the _Don't Repeat Yourself (DRY)_ principle.
  - _Convention over Configuration_ means a developer only needs to specify unconventional aspects of the application. For example, if there is a class Sale in the model, the corresponding table in the database is called sales by default.
  - _Don't repeat yourself_ means that information is located in a single, unambiguous place. For example, using the ActiveRecord module of Rails, the developer does not need to specify database column names in class definitions. Instead, Ruby on Rails can retrieve this information from the database based on the class name.

Read [Wikipedia page on Ruby on Rails](https://en.wikipedia.org/wiki/Ruby_on_Rails){:target="_blank"} for more on it's history, initial releases and others.

## Points to remember

- Code snippets can be copied by selecting the code inside the gray area.
- The code examples has been tried in specific OS/Ruby version (`macOS/Ubuntu 18.04` and `Ruby 2.7.1`). In most of the cases, you will have the same output.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly viewable in mobile and tablet.

{% include util/note.html
          note="Use <strong>Desktop</strong> for the best learning experience as you can practice the code snippet along with." type="important" %}

## Learning Notations

{% include util/note.html
          note="<strong>Info: </strong> Indicates some information." %}

{% include util/note.html
          note="<strong>Warning: </strong> Indicates warning." type="warning" %}

{% include util/note.html
          note="<strong>Recommended: </strong> Indicates recommendation." type="recommend" %}

{% include util/note.html
          note="<strong>Important: </strong> Indicates important point or phrase." type="important" %}

{% include util/note.html
          note="<strong>Caution: </strong> Indicates caution." type="caution" %}

## Sections

<div class="section-index">
  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.ruby-on-rails %}
      {% for section in section_hash.links %}
        <div class="col-md-6">
          {% include course/topic-card.html topic=section index=forloop.index %}
        </div>
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
