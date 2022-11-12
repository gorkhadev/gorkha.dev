---
layout: syllabus_page
title: App edit idea
date: 29th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - put
 - edit
description: App edit idea
permalink: /ruby-on-rails/section-three/app-edit-idea/
prev_link: /ruby-on-rails/section-three/app-new-idea/
next_link: /ruby-on-rails/section-three/app-delete-idea/
disable_toc: true
comments: true
---

# Editing an existing Idea

In this page, we will update the existing idea. It might happen that you didn't like the description of particular idea, then in such case we perform edit or update.

Open url `https://localhost:3000/ideas/1/edit` in your browser and see what happens.

It is expected that you will get following error:

```shell
Routing Error

No route matches [GET] "/ideas/1/edit"
...
```

Now, you know we need to follow `Route-Controller-Action-View` pattern.

Let's go ahead and add all the changes.

## edit route

Add following in `routes.rb` i.e `:edit` and `:update` after `:create`:

```ruby
Rails.application.routes.draw do

  root 'ideas#index'
  resources :ideas, only: [:index, :show, :new, :create, :edit, :update]

end
```

Check `rails routes` and you will get required routes for perform editing:

```shell
$ rails routes | grep idea
  ...
  edit_idea GET    /ideas/:id/edit(.:format)   ideas#edit
       idea GET    /ideas/:id(.:format)        ideas#show
            PATCH  /ideas/:id(.:format)        ideas#update
            PUT    /ideas/:id(.:format)        ideas#update
  ...
```

## add edit and update controller actions

Add following methods in `IdeasController` below `create` method:

```ruby
def edit
  @idea = Idea.find(params[:id])
end

def update
  @idea = Idea.find(params[:id])

  if @idea.update(idea_params)
    redirect_to @idea
  else
    render 'edit'
  end
end
```

## create view

Create a new view with name `edit.html.erb` inside `app/views/ideas/edit.html.erb` with following content:

```erb
<h1>Edit Idea</h1>

 <%= form_with model: @idea, local: true do |form| %>
  <p>
    <%= form.label :title %><br>
    <%= form.text_field :title, placeholder: 'your idea title ...' %>
  </p>

  <p>
    <%= form.label :description %><br>
    <%= form.text_area :description, placeholder: 'your idea description ...' %>
  </p>

  <p>
    <%= form.submit %>
  </p>
<% end %>
```

{% include util/note.html
    note="Check <strong>'model: @idea'</strong> inside <em>form_with</em> here. The '@idea' is actually referring to the instance variable we have created in the <strong>edit</strong> method in the 'IdeasController'. And, this allows Rails to automatically populates the 'title' and 'description' in the form."
    type="important"
%}

You should be able to see following now after reloading the page with URL `/ideas/1/edit`:

{% include util/lazy-img.html src="courses/ror/app-edit-1.jpg" %}

Now, go ahead and update either `title`, `description` or both and submit the form.

You will be redirected to updated idea page on successful update operation (due to this line `redirect_to @idea`).

{% include util/lazy-img.html src="courses/ror/app-edit-2.jpg" %}

{% include util/highlight.html
    text="Congratulations! You updated your idea successfully." class="h4" type="success"
%}

## Few UX changes

Add following changes to `app/views/ideas/index.html.erb` file to add editing feature from Ideas index page:

```erb
<table>
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th colspan="2">Actions</th>
  </tr>

  <% @ideas.each do |idea| %>
    <tr>
      <td><%= idea.title %></td>
      <td><%= idea.description %></td>
      <td><%= link_to 'Show', idea_path(idea) %></td>
      <td><%= link_to 'Edit', edit_idea_path(idea) %></td>
    </tr>
  <% end %>
</table>
```

And, add following code in the `edit.html.erb` so one can cancel editing and return to index page:

```erb
<p>
  <%= link_to  "Cancel and return", ideas_path %>
</p>
```
