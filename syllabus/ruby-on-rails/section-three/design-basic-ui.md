---
layout: syllabus_page
title: Design basic UI
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - ui
description: Design basic UI
permalink: /ruby-on-rails/section-three/design-basic-ui/
prev_link: /ruby-on-rails/section-three/app-list-ideas/
next_link: /ruby-on-rails/section-three/design-basic-ux/
disable_toc: true
comments: true
---

# Design basic UI

The minimal definition of User Interface(UI) represents look, feel and interactivity of the website. It includes thinking properly about icons and buttons, typography and color schemes, spacing, image placement, responsive design etc.

In our `IdeaStore` app context, we have to design the UI of two pages:

- List of ideas (`/ideas/`)
- Display of one idea (`/ideas/1`)

## application.css

If you want to use CSS for styling the web pages in your application, you need to add all your CSS inside
`app/stylesheets/application.css` file.

## UI design for ideas list

Add following CSS inside `app/stylesheets/application.css`:

```css
html {
  font-family: arial, sans-serif;
}

table {
  border-collapse: collapse;
}
td, th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 10px;
}
tr:nth-child(even) {
  background-color: #eee;
}
```

The idea listing page should look as follows:

{% include image.html
    img="courses/ror/design-basic-ui-1.jpg" class="shadow" %}

## UI design for single idea

First update the `show.html.erb` as follows:

```erb
<h1>Idea</h1>

<div class="idea">
  <div class="title">
    <strong>Title: </strong> <%= @idea.title %>
  </div>
  <div class="description">
    <strong>Description: </strong>
    <p>
      <%= @idea.description %>
    <p>
  </div>
</div>
```

Then, add following css for styling single idea into `application.css`:

```css
.idea {
  border: 1px solid #ddd;
  width: 350px;
}
.idea .title {
  background-color: #eee;
  padding: 10px;
}
.idea .description {
  padding: 10px;
  height: 100px;
}
```

The idea page should look as follows:

{% include image.html
    img="courses/ror/design-basic-ui-2.jpg" class="shadow"
%}
