---
layout: course
title: Section Two
date: 25th Sept, 2020 1:00:00
course: ruby-on-rails
type: section
description: Section Two - Web and MVC Architecture
permalink: /ruby-on-rails/section-two/
prev_section: /ruby-on-rails/section-one/
disable_toc: true
---

# Welcome to Section Two

It is important to understand the basic concepts of Web and application architecture. In this section, we will see basics of how Web work and see the MVC architecture.

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
