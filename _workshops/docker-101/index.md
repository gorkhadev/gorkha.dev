---
layout: tutorial_series
workshops: true
learning_type: workshops
tutorial_name: docker-101
title: Docker 101 Hands-on Workshop
date: 30th Sept, 2024 02:00:00
description: A hands-on learning experience of Docker tool
excerpt: A hands-on learning experience of Docker tool
permalink: /workshops/docker-101/
thumbnail: workshops/docker-101/thumb.jpg
---

{% include util/lazy-img.html src="workshops/docker-101/thumb.jpg" alt="Docker 101 Hands-on Workshop" %}

In this hands-on workshop, you will get the practical learning experience of Docker technology.

## Connect with Instructor

- [Dhanu Sir's Website](https://dhanusir.com)
- [Dhanu Sir's Facebook page](https://facebook.com/dhanusir)

## Workshop Phases

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    {% for section_hash in site.data.workshops.docker-101 %}
      <div class="row mb-4 project-phase">
      {% for section in section_hash.links %}
        <div class="col-md-6">
          <div class="workshop-card shadow-sm mb-5">
            <a href="{{ site.url }}/{{ site.baseurl }}{{ section.url }}" class="text-secondary">
              <div class="card border-1 mb-3">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">{{ forloop.index }}) {{ section.title }}</h5>
                  {% if section.description %}
                    <p class="card-text">{{ section.description }}</p>
                  {% endif %}
                </div>
              </div>
            </a>
          </div>
        </div>
      {% endfor %}
      </div>
    {% endfor %}
  </div>
</div>
