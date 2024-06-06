---
layout: course
title: Introduction to Linux
date: 6th June, 2024 1:00:00
course: get-started-with-linux
type: section
description: Introduction to important concepts of Linux OS
permalink: /get-started-with-linux/intro-to-linux/
prev_link: /get-started-with-linux/understanding-linux/distros-in-linux/
disable_toc: true
---

# Welcome to the section "Introduction to Linux"

In this section, we will see important concepts of Linux OS.

We will see Linux terminals like Bash and Sh and its working. Then, we will see Linux filesystem hierarchy.

After that, we will see different commands related to files and directories.

Finally, we will understand how package management works in Linux.

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
