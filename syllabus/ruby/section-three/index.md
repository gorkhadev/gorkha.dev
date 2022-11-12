---
layout: course
title: Section Three
date: 8th Sept, 2020 1:00:00
course: ruby
type: section
description: Section Three - more building blocks
permalink: /ruby/section-three/
prev_section: /ruby/section-two/
disable_toc: true
---

### Congratulations on the completion of section two.

# Welcome to Section Three

{% include util/note.html
    note="In this phase, we will try to learn few other building blocks of the language."
%}


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
