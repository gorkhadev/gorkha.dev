---
layout: course
title: Exploring Linux Operating Systems
date: 5th June, 2024 1:00:00
course: get-started-with-linux
type: section
description: Exploring Linux Operating Systems
permalink: /get-started-with-linux/exploring-linux/
prev_link: /get-started-with-linux/intro-and-setup/setup-lab/
disable_toc: true
---

# Welcome to the section "Exploring Linux Operating Systems"

In this section, we will try to explore the Linux operating system. We will see the important steps one need to perform post installation.

We will also learn to navigate the filesystem graphically.

Then, we will see how one can install an application and run it.

Finally, we will play around with some of the important OS settings that will help our life in working with the Operating System.

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
