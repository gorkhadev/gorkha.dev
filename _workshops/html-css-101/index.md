---
layout: tutorial_series
workshops: true
learning_type: workshops
tutorial_name: html-css-101
title: HTML and CSS 101 Hands-on Workshop
date: 23rd Sept, 2024 02:00:00
description: A hands-on learning experience of HTML and CSS foundation
excerpt: A hands-on learning experience of HTML and CSS foundation
permalink: /workshops/html-css-101/
thumbnail: workshops/html-css-101/thumb.jpg
---

{% include util/lazy-img.html src="workshops/html-css-101/thumb.jpg" alt="HTML and CSS 101 Hands-on Workshop" %}

In this hands-on workshop, you will get the practical learning experience of HTML and CSS foundational knowledge.

## Connect with Instructor

- [Dhanu Sir's Website](https://dhanusir.com)
- [Dhanu Sir's Facebook page](https://facebook.com/dhanusir)

## Workshop Phases

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    {% for section_hash in site.data.workshops.html-css-101 %}
      <div class="row mb-4 project-phase">
      {% for section in section_hash.links %}
        <div class="col-md-6">
          <div class="shadow mb-5">
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
        </div>
      {% endfor %}
      </div>
    {% endfor %}
  </div>
</div>
