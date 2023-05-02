---
layout: tutorial_series
projects: true
learning_type: workshop
tutorial_name: ruby-and-rails
title: Ruby and Ruby on Rails Hands-on Workshop
date: 11th Oct, 2020 02:00:00
description: A hands-on learning experience on Ruby language and Ruby on Rails framework
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
permalink: /workshop/ruby-and-rails/
thumbnail: workshop/ideapasal/thumbnail.jpg
disable_sidebar: true
disable_toc: true
---

In this hands-on workshow, you will get the practical learning experience of Ruby language and Ruby on Rails framework.

## Why learn Ruby?

Many companies like GitHub, SoundCloud, Shopify and others use Ruby due to many reasons. Following are some of the common reasons:

- Ruby is a free and open-source language. Check its [source code](https://github.com/ruby/ruby){:target="_blank"}.
- It's a cross-platform programming language and runs on major operating systems like Windows, macOS, or Linux.
- The syntax in Ruby is very simple to be close to the English language. You don’t have to spend much effort and time memorizing what symbols mean to write code. Following is one such example:

  ```ruby
  puts "Welcome to Ruby" if user.is_beginner?
  ```

- Ruby is commonly used in startups as you can use it to build complete apps in a relatively short amount of time with a small team of developers.
- Ruby has a huge, vibrant and helpful community where developers are willing to help beginners. If you are in Nepal, check the [Ruby Nepal Community](https://rubynepal.org/){:target="_blank"}.

## What is Ruby used for?

Ruby is a general-purpose programming language and it has been used for many different purposes. Following are top places where Ruby can be used:

- __Web development:__ One of popular web frameowkr, Ruby on Rails, is built in Ruby. Ruby on Rails was first released in 2005 and one of the most popular web frameworks since then. We will see more about Ruby on Rails in the below section.
- __DevOps__
  - [Vagrant](https://www.vagrantup.com/){:target="_blank"} is a tool written in Ruby that helps developers to manage lightweight, reproducible, and portable development environments through Virtual Machines.
  - [Chef](https://www.chef.io/){:target="_blank"} and [Puppet](https://www.puppet.com/){:target="_blank"} are other DevOps tools written in Ruby that help in configuring a server or application with simple configuration files. These tools make sure that the applications will run correctly wherever they are deployed.
- __Automation:__ Ruby is also a scripting language that help developers write scripts quickly which can be used to automate manual processes.

## Why learn Ruby on Rails?

- Popular Web framework to build modern web applications
- Startup favorite web framework. [Click here to read more.](https://www.clustox.com/why-you-should-use-ruby-on-rails-for-your-startup){:target="_blank"}
- Rails has an established Job Market [(See Websites built with Ruby on Rails, 3.8M+ sites).](https://trends.builtwith.com/framework/Ruby-on-Rails){:target="_blank"}
- Friendly framework and easy learning
- Friendly and large Ruby/Ruby on Rails Community.

## Join Ruby and Rails Community in Nepal

{% include image.html
  path="ruby-rails-nepal.jpg"
  title="Ruby and Rails Community Nepal"
  class="shadow"
%}

If you want to join Ruby/Rails community in Nepal, then check [Ruby Nepal Community](https://rubynepal.org/){:target="_blank"}.

## Phases

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    {% for section_hash in site.data.workshop.ruby-and-rails %}
      {% for section in section_hash.links %}
        <div class="row mb-4 project-phase shadow-sm">
          <div class="col-md-7">
            <a href="{{ site.url }}/{{ site.baseurl }}{{ section.url }}" class="text-secondary">
              <div class="card border-0 mb-3">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">{{ forloop.index }}) {{ section.title }}</h5>
                  {% if section.description %}
                    <p class="card-text">{{ section.description }}</p>
                  {% endif %}
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-5 p-2">
            <a href="{{ site.url }}/{{ site.baseurl }}{{ section.url }}">
              <img src="/assets/img/{{ section.thumbnail }}" class="border img-fluid" />
            </a>
          </div>
        </div>
      {% endfor %}
    {% endfor %}
  </div>
</div>
