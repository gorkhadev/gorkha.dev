---
layout: syllabus_page
title: App delete idea
date: 29th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - delete
description: App delete idea
permalink: /ruby-on-rails/section-three/app-delete-idea/
prev_link: /ruby-on-rails/section-three/app-edit-idea/
next_link: /ruby-on-rails/section-three/more-ui-ux-changes/
disable_toc: true
comments: true
---

# Deleting an Idea

The final action to perform is deleting an idea.

In this page, we will delete the existing idea.

## adding delete option in index page

Let's update an action link in the index page so that one can perform deleting operation.

Add following changes to `app/views/ideas/index.html.erb` file to add deleting feature:

```erb
<table>
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th colspan="3">Actions</th>
  </tr>

  <% @ideas.each do |idea| %>
    <tr>
      <td><%= idea.title %></td>
      <td><%= idea.description %></td>
      <td><%= link_to 'Show', idea_path(idea) %></td>
      <td><%= link_to 'Edit', edit_idea_path(idea) %></td>
      <td><%= link_to 'Delete', idea_path(idea) %></td>
    </tr>
  <% end %>
</table>
```

On reloading the ideas index page, `https://localhost:3000/ideas`, you will see following:

{% include util/lazy-img.html src="courses/ror/app-delete-1.jpg" %}

Now, click on the `Delete` link to perform deletion of any of the idea. See what happens.

{% include util/highlight.html
    text="Surprise! You got redirected to idea's show page." class="h4"
%}

The reason is simple. Right now the URL for delete link is `GET /ideas/:id` which is exactly same as for showing idea (check by viewing its page source). We actually need `DELETE /ideas/:id`.

## delete route

Let's update our `routes.rb` file add delete route.

```ruby
Rails.application.routes.draw do

  root 'ideas#index'
  resources :ideas, only: [:index, :show, :new, :create, :edit, :update, :destroy]

end
```

__NOTE:__ Notice `:destroy` above which add delete route for idea resource, `DELETE /ideas/:id`.

Confirm with `rails routes`:

```shell
rails routes | grep 'idea'
  ...
  DELETE /ideas/:id(.:format)     ideas#destroy
```

## destroy controller action

Add following controller action in `IdeasController`:

```ruby
def destroy
  @idea = Idea.find(params[:id])
  @idea.destroy

  redirect_to ideas_path
end
```

## View change

The last thing remaining is to update the `Delete` link in order to perform delete operation instead of showing.

To do that just add `method` option with `:delete` value. See [Rails URLHelper link_to](https://api.rubyonrails.org/v5.1.7/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to){:target="_blank"}.

Update the `link_to` with `Delete` label as follows:

```erb
<%= link_to 'Delete', idea_path(idea), method: :delete %>
```

Now, click on the `Delete` link and see what happens.

{% include util/highlight.html
    text="Awesome! You are able to delete idea now. However, it is dangerous to not ask confirmation on any of the deletion operation." class="h4"
%}

Let's update our delete link to ask confirmation from user before performing delete. Now, update the `link_to`as follows:

```erb
<%= link_to 'Delete', idea_path(idea), method: :delete,
            data: { confirm: 'Are you sure, you want to delete this idea?' } %>
```

Now, click on the `Delete` link and see the updated behavior. You will notice a popup with confirmation message.

{% include util/lazy-img.html src="courses/ror/app-delete-2.jpg" %}

On click `OK`, the idea will be delete from the application.
