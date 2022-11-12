---
layout: course
title: Section One
date: 15th April, 2020 1:00:00
course: ruby
type: section
description: Section One - getting familiar with language
permalink: /ruby/section-one/
disable_toc: true
---

# Welcome to Section One

{% include util/note.html
    note="In this phase, we will try to get familiar with the language."
%}

__Hello!__

Say _Hi_ to Ruby.

In this section, you will be getting yourself familiar with the Ruby language.

Ruby is a dynamic, object-oriented, general-purpose and open-source programming language. It is a very
simple, developer friendly and easy to use programming language.

#### Have a wonderful journey in learning Ruby.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.ruby %}
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
