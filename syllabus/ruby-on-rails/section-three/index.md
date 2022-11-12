---
layout: course
title: Section Three
date: 25th Sept, 2020 1:00:00
course: ruby-on-rails
type: section
description: Section Three - Installation and Setup
permalink: /ruby-on-rails/section-three/
thumbnail: courses/ror/crud-basic-app.jpg
prev_section: /ruby-on-rails/section-two/
disable_toc: true
---

# Welcome to Section Three

In this section, we will build our first basic application. We will call this app as `IdeaStore`, a store having lot of ideas.

## Preview of the application

An `IdeaStore` is a web application which list all the innovative ideas from different people.

{% include util/embed-youtube.html id="vg_Us8wOWG4" %}

Proceed with following sub-sections one at a time.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.ruby-on-rails %}
      {% for section in section_hash.links %}
        {% for sub_section in section.children %}
          {% assign section_link = page.permalink | replace_first: "/", "" %}
          {% if sub_section.url contains section_link %}
            <div class="col-md-6">
              {% include course/topic-card.html
                          topic=sub_section index=forloop.index %}
            </div>
          {% endif %}
        {% endfor %}
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
