---
layout: course
course: c
title: Learn C Practically
permalink: /c/
disable_toc: true
disable_sidebar: true
---

{% include util/note.html
    note="The content of the syllabus is still in building stage. However, you can still begin your learning."
    type="important"
%}

# Welcome to 'Learn C Practically' Course

This course has been designed to get the basic understanding of C language. After completing this course you should be able to understand and write C programs.

{% include util/highlight.html
    text="This course has been designed with the intention of being used in an interactive online or classroom teaching session. <br>Feel free to use it for your self-learning purpose." class="h5"
%}

The course has been divided into different sections with a section goal.

## Target Audience

- School or College Students
- Beginner who want to know essentials of C language

## C Introduction

C is a general-purpose, procedural computer programming language.
It was developed by Dennis Ritchie between 1972 and 1973 to construct utilities running on Unix at AT & T Labs.

It provided many core features like low-level access to memory, simple set of keywords, and clean style which make it the best suitable language for system programming like operating system or compiler development.

We will know more about it in _Section One_.

## Why learn C

- __Middle level language__

  C is considered as the middle-level language as it can be used to write both the system level programs or general purpose softwares.

- __C powers the world__

  C is everywhere. Like most Operating system kernels are written in C like Windows, Linux, maOS, Android and so on.
  In the web world, all modern browsers like Chrome and Firefox are written in C too.

- __Helps understand the fundamentals of Computer Theories__

  Being one of the popular old language, most of the core components of Computer like Networking, Designing, Architecture or Operating Systems were written in C. Having knowledge of C will help one to understand these concepts or theories well.
  High level or modern programming language gives a abstract view and hide these low level details.

- __Faster Performance__

  Programs written in C are compiled and executed faster than any other programming language. Hence, it is one of the preferred language to be used for performance intensive applications.

- __Embedded Programming__

  C is highly used in Embedded Programming. Embedded Programming is also referred to as micro-controller programming,
  where C program is used to control micro-controllers. Micro controllers and embedded programming is widely used in auto-motives, Robotics, Hardwares etc.

- __Help understand high level language well__

  Since, most of the high level language or its libraries are written in C like Python or Ruby interpreter are written in C, having knowledge of C will help you understand those languages better.

## Points to remember

- Code snippets can be copied by selecting the code inside the gray area.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly viewable in mobile and tablet.

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
    {% for section_hash in site.data.c %}
      {% for section in section_hash.links %}
        <div class="col-md-6">
          {% include course/topic-card.html topic=section index=forloop.index %}
        </div>
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
