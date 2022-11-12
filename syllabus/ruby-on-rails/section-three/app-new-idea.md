---
layout: syllabus_page
title: App new idea
date: 29th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - post
 - new
description: App new idea
permalink: /ruby-on-rails/section-three/app-new-idea/
prev_link: /ruby-on-rails/section-three/app-root-url/
next_link: /ruby-on-rails/section-three/app-edit-idea/
disable_toc: true
comments: true
---

# Creating a new Idea

In this page, we will create a new idea in our application.

The expected REST URL for creating a new idea is `/ideas/new` which is a `GET` request.

Open url `https://localhost:3000/ideas/new` in your browser and see what happens.

It is expected that you will get following error:

{% include util/lazy-img.html src="courses/ror/app-new-1.jpg" %}

Few important things to note here:

- `Parameters` says you have `id` as `new`
- The method that is being invoked here is `show` in `IdeasController`

## Reason for error

The root reason here is that since we have only two routes i.e `index` and `show` which maps to `/ideas` and `/ideas/:id` respectively, when we hit URL `/ideas/new`, Rails basically assume that we are looking for idea with id `new`.

{% include util/note.html
    note="Now, we will follow the <strong>Route-Controller-Action-View</strong> pattern i.e first add <em>Route</em>, then <em>Controller and its action</em> and then <em>View</em>."
%}

## Add new and create routes

Update the `routes.rb` file with route for `new` and `create`:

```ruby
Rails.application.routes.draw do

  root 'ideas#index'
  resources :ideas, only: [:index, :show, :new, :create]

end
```

Now, if you check available routes for `Idea` resource, you will get following:

```shell
$ rails routes | grep idea
    root GET   /                        ideas#index
  ideas GET    /ideas(.:format)         ideas#index
        POST   /ideas(.:format)         ideas#create
new_idea GET   /ideas/new(.:format)     ideas#new
    idea GET   /ideas/:id(.:format)     ideas#show
```

And, you will notice we have the required routes for creating a new idea:

- `GET /ideas/new` and
- `POST /ideas`

Now, reload the browser with url `https://localhost:3000/ideas/new`, we get __expected error__.

```shell
Unknown action

The action 'new' could not be found for IdeasController
```

## Add controller action and basic view

Add following change in `IdeasController` below `show` method:

```ruby
def new
end
```

And, create a new view file with name `new.html.erb` under `app/views/ideas/` with following content:

```erb
<h1>New Idea</h1>
```

On reloading the browser, you will get a message `New Idea` in H1 heading size.

{% include util/note.html
    note="Congrats! The route, controller, action, and view are now working harmoniously!"
%}

## New idea form

In a web application, the component that interact with user to accept any kind of information is called as _Form_.

Let's create a simple form which will collect the information about _title_ and _description_ for our new idea.

To create a form within `new.html.erb` template, we will use a form builder.
The primary form builder for Rails is provided by a helper method called `form_with`.
To use this method, add following code into `app/views/ideas/new.html.erb`:

```erb
<%= form_with scope: :idea, local: true do |form| %>
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

And, add following CSS to `app/assets/stylesheets/application.css`:

```css
form {
  padding: 10px;
  background-color: #eee;
  width: 350px;
}
form p:first-of-type input {
  width: 95%;
}
form textarea {
  width: 95%;
  height: 100px;
}
```

Now, reload the browser with URL `https://localhost:3000/ideas/new`, you will see following:

{% include util/lazy-img.html src="courses/ror/app-new-2.jpg" %}

## Important: Form action

{% include util/note.html
    note="Form <em>action</em>, <em>method</em> or <em>data-remote</em> are what confuses most of the beginners."
    type="caution"
%}

Right click over form and click on `View Page Source`, you will notice following:

{% include util/lazy-img.html src="courses/ror/app-new-3.jpg" %}

The URL in the `action` attribute is not the desired URL as we are looking URL `/ideas/` with `POST` verb as you notice in `rails routes` in section [Add new and create routes](#add-new-and-create-routes).

Update the `form` in `app/views/ideas/new.html.erb` by adding `url: ideas_path` and check the page source again.

You will notice

```html
<form action="/ideas" accept-charset="UTF-8" method="post">
...
</form>
```

__NOTE:__ `local: true` in the form is the option to disable Ajax behavior as  `form_with` default behavior of submitting request to server is through Ajax. See [Working with JavaScript in Rails#form-with](https://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html#form-with){:target="_blank"}.

## Actual form changes

The final expected changes for `form` in `app/views/ideas/new.html.erb` is as follows:

```erb
<%= form_with scope: :idea, url: ideas_path, local: true do |form| %>
  ...
<% end %>
```

## create controller action

When you try to submit above form with `title` and `description`, you will get following error:

```shell
Unknown action

The action 'create' could not be found for IdeasController
```

Add following changes for `create` method in `IdeasController` below `new`:

```ruby
def create
  @idea = Idea.new(idea_params)

  if @idea.save
    redirect_to @idea
  else
    render 'new'
  end
end

private

def idea_params
  params.require(:idea).permit(:title, :description)
end
```

The logic is quite simple. We have already seen ways of [creating an idea through rails console](/ruby-on-rails/section-three/app-idea-model/#creating-a-record){:target="_blank"}.

We have used 3rd approach i.e `Idea#new` with params but slightly in different way here.

The code snippet

```ruby
params.require(:model_name).permit(comma-separated-model-attributes)
```

is known as __Strong Parameters__ which is a security practice to help prevent accidentally allowing users to update sensitive model attributes.

{% include util/note.html
    note="With strong parameters, Action Controller parameters are forbidden to be used in Active Model mass assignments until they have been permitted. This means that you'll have to make a conscious decision about which attributes to permit for mass update."
    source="https://guides.rubyonrails.org/action_controller_overview.html#strong-parameters" source_label="(see Rails Guides)"
%}

## Reload the page to see idea creation

Now, reload the URL where you were seeing error:

```shell
Unknown action

The action 'create' could not be found for IdeasController
```

You will see that your idea has been created since your browser sent the same request containing form details to `create` method of `IdeasController`.

Now, since this time we had those actions defined, the server went ahead and saved the idea and redirected to newly created idea with the line `redirect_to @idea`.

If you hit by any error then you will see the same `/ideas/new` page (see `render 'new'` in `else` part of `create` method).

{% include util/lazy-img.html src="courses/ror/app-new-4.jpg" %}

{% include util/highlight.html
    text="Congratulations! You created your first idea successfully." class="h4" type="success"
%}
