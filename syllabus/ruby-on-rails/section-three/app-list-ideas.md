---
layout: syllabus_page
title: Listing all ideas in app
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - view
 - list
description: Listing all ideas in app
permalink: /ruby-on-rails/section-three/app-list-ideas/
prev_link: /ruby-on-rails/section-three/app-idea-view/
next_link: /ruby-on-rails/section-three/design-basic-ui/
disable_toc: true
comments: true
---

# Listing all ideas in app

Till now we have seen how to display single idea. In this page we will display all the ideas.

The rails `resources: ideas` route provide us a route `GET /ideas` which is responsible for listing all the ideas in our app.

See [Resourceful routing](/ruby-on-rails/section-three/app-idea-route/#resourceful-routing){:target="_blank"}.

## Ideas index path

Let's open the url `https://localhost:3000/ideas`.

You will get following error:

```shell
Routing Error

No route matches [GET] "/ideas"
...
```

## Route-Controller-Action-View pattern

So, now we need to follow the similar pattern as we did with single idea which is as follows:

- Add route in `routes.rb`
- Add controller file and class (created once)
- Add action
- Add view

{% include util/note.html
    note="This pattern is universal to Rails application. I encourage you to follow it, understand it properly how it works until you are confident enough to know every component." type="important"
%}

## Listing ideas

Do the following changes in their respective files to display the list of ideas.

### routes.rb

```ruby
Rails.application.routes.draw do
  resources :ideas, only: [:index, :show]
end
```

Now, we have following available routes:

```shell
$ rails routes | grep idea
  ideas GET   /ideas(.:format)        ideas#index
  idea GET    /ideas/:id(.:format)    ideas#show
```

## ideas_controller.rb

Added following code above the `show` method:

```ruby
def index
  @ideas = Idea.all
end
```

`Idea.all` will fetch all the ideas from the database and store into `@ideas` variable which will be available in its corresponding view `index.html.erb`.

## index.html.erb

We are using tabular format for listing ideas. Add following code into `app/views/ideas/index.html.erb` file.

```erb
<h1>All awesome ideas</h1>

<table>
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th></th>
  </tr>

  <% @ideas.each do |idea| %>
    <tr>
      <td><%= idea.title %></td>
      <td><%= idea.description %></td>
      <td><%= link_to 'Show', idea_path(idea) %></td>
    </tr>
  <% end %>
</table>
```

__NOTE:__ `link_to` is a Rails view helper to create an anchor tag and `idea_path(idea)` is Rails way of representing URL for particular idea. See [Resourceful route helpers](/ruby-on-rails/section-three/app-idea-route/#route-helpers){:target="_blank"}. See [ActionView URL Helper link_to](https://api.rubyonrails.org/v5.2.3/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to){:target="_blank"}.

Now, open the URL `https://localhost:3000/ideas` in your browser. You should now see the idea listing as following.

{% include image.html img="courses/ror/all-ideas.jpg" class="shadow" %}

__NOTE:__ You can notice that there is button `Show` at the right most of every idea. If you click on it, it will show the corresponding idea.
