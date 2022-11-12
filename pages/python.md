---
layout: course
title: Python Basics
course: python
permalink: /python/
page_name: python
disable_sidebar: true
disable_toc: true
---

{% include util/note.html
    note="The content of the syllabus is still in building stage. However, you can still begin your learning."
    type="important"
%}

# Welcome to Python Basics

This course has been designed to get the basic understanding of Python language. After completing this course you should be able to understand and write Python programs.

{% include util/highlight.html
    text="This course has been designed with the intention of being used in an interactive online or classroom teaching session. <br>Feel free to use it for your self-learning purpose." class="h5"
%}

The course has been divided into different sections with a section goal.

## Python Introduction

Python is an interpreted, high-level, general-purpose programming language. Created by _Guido van Rossum_ and first released in __1991__.
Python's design philosophy emphasizes code readability with its notable use of significant whitespace.
Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.

Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. [(source)](https://en.wikipedia.org/wiki/Python_%28programming_language%29){:target="_blank"}

We will know more about it in _Section One_.

## Points to remember

- Code snippets can be copied by selecting the code inside the gray area.
- The code examples has been tried in specific OS/Ruby version (`macOS/Ubuntu 18.04 or 20.04` and `Python 3`). In most of the cases, you will have the same output.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly __viewable in mobile and tablet__.
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
    {% for section_hash in site.data.python %}
      {% for section in section_hash.links %}
        <div class="col-md-6">
          {% include course/topic-card.html topic=section index=forloop.index %}
        </div>
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
