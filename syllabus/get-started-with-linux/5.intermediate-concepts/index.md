---
layout: course
title: Linux intermediate concepts
date: 6th June, 2024 1:00:00
course: get-started-with-linux
type: section
description: Introduction to intermediate concepts in Linux
permalink: /get-started-with-linux/intermediate-concepts/
prev_link: /get-started-with-linux/intro-to-linux/other-file-commands/
disable_toc: true
---

# Welcome to the section "Linux intermediate concepts"

In this section, we will try to go through the intermediate level Linux concepts.

We will see file display commands, go through the commands related to file or directory compression.

Then, we will see how to manage environment variables in Linux.

We will also try to understand the concept of process monitoring and memory management.

Finally, there are two bonus chapters where we will cover how to run C program in Linux and how to install
MySQL in Linux.

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
