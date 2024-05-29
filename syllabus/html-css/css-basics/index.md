---
layout: course
title: CSS Basics
date: 5th Jan, 2024 1:00:00
course: html-css
type: section
description: CSS Basics - getting familiar with CSS
permalink: /html-css/css-basics/
disable_toc: true
---

# Welcome to the section CSS Basics

{% include util/note.html
    note="In this phase, we will try to get familiar with the basics of CSS."
%}

<!-- The __HyperText Markup Language or HTML__ is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.

Read more about it in [HTML in Wikipedia.](https://en.wikipedia.org/wiki/HTML){:target="_blank"} -->

#### Have a wonderful journey in mastering HTML and CSS skills.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.html-css %}
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
    <hr class="my-3" />
    <div class="row">
      <h4>Visit Other Sections</h4>
      <div class="link-wrapper d-flex flex-wrap gap-3">
        <a href="/html-css/html-basics/" class="btn btn-sm btn-outline-secondary px-3">HTML Basics</a>
        <a href="/html-css/css-intermediate/" class="btn btn-sm btn-outline-secondary px-3">CSS Intermediate</a>
        <a href="/html-css/css-advanced/" class="btn btn-sm btn-outline-secondary px-3">CSS Advanced</a>
        <a href="/html-css/web-projects/" class="btn btn-sm btn-outline-secondary px-3">Web Projects</a>
      </div>
    </div>
  </div>
</div>
