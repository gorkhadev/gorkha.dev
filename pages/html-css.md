---
layout: course
title: HTML and CSS foundation
course: html-css
permalink: /html-css/
page_name: ruby
disable_sidebar: true
disable_toc: true
---

{% include util/note.html
    note="The content of the syllabus is still in building stage. However, you can still begin your learning."
    type="important"
%}

# Welcome to HTML and CSS foundation course!

This course has been designed to get the basic understanding of HTML and CSS to the mastery of these skills

{% include util/note.html
    note="This course has been designed with the intention of being used in an interactive online or classroom teaching session. <br>Feel free to use it for your self-learning purpose." class="h5"
%}

The course has been divided into different sections with a section goal.

## Points to remember

- Code snippets can be copied by selecting the code inside the gray area.
- The code examples has been tried in specific OS/Ruby version (`macOS/Ubuntu 18.04` and `Ruby 2.7.1`). In most of the cases, you will have the same output.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly viewable in mobile and tablet.
- This can be considered as the comprehensive course.

{% include util/note.html
          note="Use <strong>Desktop</strong> for the best learning experience as you can practice the code snippet along with." type="important" %}

## Learning Notations

{% include util/note.html
          note="<strong>Info: </strong> Indicates some information." %}

{% include util/note.html
          note="<strong>Warning: </strong> Indicates warning." type="warning" %}

{% include util/note.html
          note="<strong>Recommended: </strong> Indicates recommendation." type="recommend" %}

{% include util/note.html
          note="<strong>Important: </strong> Indicates important point or phrase." type="important" %}

{% include util/note.html
          note="<strong>Caution: </strong> Indicates caution." type="caution" %}

## Sections

<div class="section-index">
  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.html-css %}
      {% for section in section_hash.links %}
        <div class="col-md-6">
          {% include course/topic-card.html topic=section index=forloop.index %}
        </div>
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
