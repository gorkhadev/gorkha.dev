---
layout: course
learning_type: course
title: Get started with Linux
course: get-started-with-linux
permalink: /get-started-with-linux/
page_name: linux
disable_sidebar: true
disable_toc: true
---

# Welcome to "Get started with Linux" course

This course has been designed for the complete beginners who want to start with Linux.

This can be perfect course if you want to switch from Windows to Linux.

{% include util/note.html
    note="This course has been designed with the intention of being used in an interactive online or classroom teaching session. <br>Feel free to use it for your self-learning purpose." class="h5"
%}

The course has been divided into different sections.

## Points to remember

- Code snippets can be copied by selecting the code inside the gray area.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly viewable in mobile and tablet.
- This is the complete beginner friendly course.

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
    {% for section_hash in site.data.get-started-with-linux %}
      {% for section in section_hash.links %}
        <div class="col-md-6">
          {% include course/topic-card.html topic=section index=forloop.index %}
        </div>
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
