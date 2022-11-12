---
layout: course
title: Section One
date: 25th Sept, 2020 1:00:00
course: ruby-on-rails
type: section
description: Section One - Installation and Setup
permalink: /ruby-on-rails/section-one/
disable_toc: true
---

# Welcome to Section One

Before starting with building an app in Ruby on Rails, we need to prepare our development environment and install prerequisite packages.

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
