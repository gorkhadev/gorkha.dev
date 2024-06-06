---
layout: course
title: User and group management
date: 6th June, 2024 1:00:00
course: get-started-with-linux
type: section
description: Understanding the concepts of user and group management
permalink: /get-started-with-linux/user-and-group-management/
prev_link: /get-started-with-linux/text-editors-and-tmux/intro-to-tmux/
disable_toc: true
---

# Welcome to the section "User and group management"

In this section, we will see how to manage user and group in Linux.

We will briefly understand the ways to manage users and groups in Linux.

At the end, we will try to understand the important concept of "sudo" and "su".

#### Have a wonderful journey in learning Linux skills.

<div class="section-index">
  <hr class="panel-line">
  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.get-started-with-linux %}
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
    <!-- <hr class="my-3" />
    <div class="row">
      <h4>Visit Other Sections</h4>
      <div class="link-wrapper d-flex flex-wrap gap-3">
        <a href="/html-css/css-basics/" class="btn btn-sm btn-outline-secondary px-3">CSS Basics</a>
        <a href="/html-css/css-intermediate/" class="btn btn-sm btn-outline-secondary px-3">CSS Intermediate</a>
        <a href="/html-css/css-advanced/" class="btn btn-sm btn-outline-secondary px-3">CSS Advanced</a>
        <a href="/html-css/web-projects/" class="btn btn-sm btn-outline-secondary px-3">Web Projects</a>
      </div>
    </div> -->
  </div>
</div>
