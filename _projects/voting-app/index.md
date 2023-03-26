---
layout: tutorial_series
projects: true
learning_type: projects
tutorial_name: voting-app-sinatra
title: Voting Web App in Sinatra
date: 11th Oct, 2020 02:00:00
description: Voting Web App in Sinatra
permalink: /projects/voting-app-sinatra/
thumbnail: projects/voting-app-sinatra/6.gif
disable_sidebar: true
disable_toc: true
---

In this tutorial, we are going to build a simple Voting web application using Sinatra.

## Demo

{% include util/embed-youtube.html id="yZYH4RXT0X0" %}

## Prerequisites

- Enthusiasm and passion to Learn
- Basic knowledge of HTML and CSS
- Basic knowledge of Ruby language
- Basic knowledge of [Sinatra](http://sinatrarb.com){:target="_blank"}

## Inspiration for the tutorial

The idea and content of this tutorial has been inspired by the
[Rails Guides - create your first voting app in Sinatra](https://guides.railsgirls.com/sinatra-app){:target="_blank"}.
I am presenting it in my own way with little or updated content.

{% include util/note.html
    note="The tutorial has been built thinking college graduates in mind and assumes that you have already basic knowledge of HTML, CSS, and JavaScript."
%}

## Resources

- [Sinatra Website](http://sinatrarb.com){:target="_blank"}
- [Sinatra in GitHub](https://github.com/sinatra/sinatra/){:target="_blank"}
- [Source Code](https://github.com/brgtrainings/voting_app_sinatra){:target="_blank"}

## Phases

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    {% for section_hash in site.data.projects.voting-app-sinatra %}
      {% for section in section_hash.links %}
        <div class="row mb-3 project-phase">
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
              <img src="/assets/img/{{ section.thumbnail }}" class="img-fluid" />
            </a>
          </div>
        </div>
      {% endfor %}
    {% endfor %}
  </div>
</div>
