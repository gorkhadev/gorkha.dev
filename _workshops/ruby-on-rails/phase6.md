---
layout: tutorial_series
learning_type: workshops
tutorial_name: ruby-and-rails
date: 11th Oct, 2020 02:00:00
title: Final styling
description: Performing the final styling of the application
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
thumbnail: workshops/ideapasal/thumbnail.png
permalink: /workshops/ruby-and-rails/phase6/
prev_link: /workshops/ruby-and-rails/phase5/
comments: true
---

{% include util/lazy-img.html src="workshops/ideapasal/ideapasal.jpg" alt="Idea Pasal Final Styling" %}

Now, you will perform the final UI changes to your application.

## Update the styling of listing ideas view

Update the `app/views/ideas/index.html.erb` file with the following content:

```erb
<h1>Ideas</h1>

<%= link_to "Add a new idea", new_idea_path, class: "btn btn-primary mb-3" %>

<div class="list-group w-auto">
  <% @ideas.each do |idea| %>
    <%= render idea %>
  <% end %>
</div>
```

Now, refresh the ideas list view in the browser and see the changes.

Similarly, update the other views of the application.

## Update the styling of showing idea view

Update the `app/views/ideas/show.html.erb` file:

```erb
<div id="<%= dom_id @idea %>" class="d-flex gap-2 py-3">
  <div class="d-flex flex-column gap-2 w-100">
    <h1><%= @idea.name %></h1>
    <p><%= @idea.description %></p>
    <small class="opacity-50 text-nowrap">Last updated <%= time_ago_in_words @idea.updated_at %></small>
  </div>
  <%= image_tag(@idea.image_url, width: 150, height: 150, class: "img-thumbnail") if @idea.image? %>
</div>

<div class="d-flex gap-2 py-2">
  <%= link_to "Edit this idea", edit_idea_path(@idea), class: "btn btn-primary" %>
  <%= link_to "Back to ideas", ideas_path, class: "btn btn-outline-secondary" %>
  <%= button_to "Destroy this idea", @idea, method: :delete, class: "btn btn-danger", form: { data: { turbo_confirm: "Are you sure?" } } %>
</div>
```

- `dom_id` helper method:

  The `dom_id` used here is basically a record identifier helper in Rails to associate records with the DOM elements.

  Following is the brief example how it works:

  ```ruby
  dom_id(Post.new)         # => "new_post"
  dom_id(Post.find 42)     # => "post_42"
  ```

  Read more about `dom_id` in [ActionView::RecordIdentifier documentation.](https://api.rubyonrails.org/classes/ActionView/RecordIdentifier.html){:target="_blank"}

- `time_ago_in_words` helper method:

  It is the `Date` helper method which return the friendly message of time/date.

  Following is the brief example how it works:

  ```ruby
  time_ago_in_words(3.minutes.from_now)                 # => 3 minutes
  time_ago_in_words(3.minutes.ago)                      # => 3 minutes
  time_ago_in_words(Time.now - 15.hours)                # => about 15 hours
  time_ago_in_words(Time.now)                           # => less than a minute
  time_ago_in_words(Time.now, include_seconds: true)    # => less than 5 seconds
  ```

  Read more about `time_ago_in_words` in [ActionView::Helpers::DateHelper documentation.](https://api.rubyonrails.org/v7.0.4.2/classes/ActionView/Helpers/DateHelper.html#method-i-time_ago_in_words){:target="_blank"}

## Update the styling of editing idea view

Update the `app/views/ideas/edit.html.erb` file:

```erb
<h1>Editing idea</h1>

<%= render "form", idea: @idea %>

<br>

<div class="d-flex gap-2 py-2">
  <%= link_to "Show this idea", @idea, class: "btn btn-primary" %>
  <%= link_to "Back to ideas", ideas_path, class: "btn btn-outline-secondary" %>
</div>
```

## Update the styling of idea form

Update the `app/views/ideas/_form.html.erb` file:

```erb
<%= form_with(model: idea, class: "row g-3") do |form| %>
  <% if idea.errors.any? %>
    <div style="color: red">
      <h2><%= pluralize(idea.errors.count, "error") %> prohibited this idea from being saved:</h2>

      <ul>
        <% idea.errors.each do |error| %>
          <li><%= error.full_message %></li>
        <% end %>
      </ul>
    </div>
  <% end %>

  <div class="col-md-6">
    <div>
      <%= form.label :name, class: "form-label" %><br>
      <%= form.text_field :name %>
    </div>
    <div>
      <%= form.label :description, class: "form-label" %><br>
      <%= form.text_area :description, rows: 8, cols: 55 %>
    </div>
  </div>
  <div class="col-md-6">
    <h2>Idea Image</h2>
    <% if idea.image? %>
      <%= image_tag(idea.image_url, width: 400, class: 'shadow') %>
    <% end %>

    <div class="mt-4">
      <% if idea.image? %>
        <span>Want to update?</span>
      <% end %>

      <%= form.file_field :image %>
    </div>

  </div>

  <div class="mt-4">
    <%= form.submit "Update the Idea", class: "btn btn-lg px-5 btn-success" %>
  </div>
<% end %>
```

## Update the styling of idea partial

Update the `app/views/ideas/_idea.html.erb` file:

```erb
<div id="<%= dom_id idea %>" class="list-group-item list-group-item-action d-flex gap-3 py-3">
  <div class="d-flex flex-column gap-2 w-100">
    <h2><%= link_to idea.name, idea_path(idea) %></h2>
    <p><%= idea.description %></p>
    <small class="opacity-50 text-nowrap">Last updated <%= time_ago_in_words idea.updated_at %></small>
  </div>
  <%= image_tag(idea.image_url, width: 150, height: 150, class: "img-thumbnail flex-shrink-0") if idea.image? %>
</div>
```
