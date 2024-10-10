---
layout: tutorial_series
mission: true
mission_type: multi-task
modules: 3
learning_type: missions
tutorial_name: calculator
title: Calculator in HTML, CSS and JavaScript
date: 26th Oct, 2020 1:00:00
duration: 6 Hrs
description: Calculator in HTML, CSS and JavaScript
permalink: /missions/calculator/
thumbnail: missions/calculator/thumbnail.png
disable_sidebar: true
disable_toc: true
---

In this tutorial series, we are trying to build a calculator in HTML, CSS and JavaScript.

Go through the following phases to build the calculator.

{% include util/note.html
    note="The tutorial has been built thinking college graduates in mind and assumes that you have already basic knowledge of HTML, CSS, and JavaScript."
%}

## Phases

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    {% for section_hash in site.data.missions.calculator %}
      {% for section in section_hash.links %}
        <div class="row mb-3 project-phase">
          <div class="col-md-7">
            <a href="/{{ site.baseurl }}{{ section.url }}" class="text-secondary">
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
            <a href="/{{ site.baseurl }}{{ section.url }}">
              <img src="/assets/img/{{ section.thumbnail }}" class="img-fluid" />
            </a>
          </div>
        </div>
      {% endfor %}
    {% endfor %}
  </div>
</div>
