---
layout: syllabus_page
title: Design basic UX
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - ux
description: Design basic UX
permalink: /ruby-on-rails/section-three/design-basic-ux/
prev_link: /ruby-on-rails/section-three/design-basic-ui/
next_link: /ruby-on-rails/section-three/app-root-url/
disable_toc: true
comments: true
---

# Design basic UX

The minimal definition of User Experience(UX) refers to the interaction between the user and a product (or website here).
User experience design considers all the different elements that combine together to give experience to user. For example, how a user goes from one page to another is one of the basic example.

In our `IdeaStore` app context, you can notice that once you are on idea page (`/ideas/1`), there is no way to go back to ideas list currently. And, this gives a bad user experience of this website to user.

## Add link to ideas list

Add a link to ideas list in the `show.html.erb` page.

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

<p>
  <%= link_to  "Back to all ideas", ideas_path %>
</p>
```

__NOTE:__ `ideas_path` is a route helper which returns `/ideas` path.

The idea page should look as follows:

{% include image.html
    img="courses/ror/design-basic-ux.jpg" class="shadow"
%}
