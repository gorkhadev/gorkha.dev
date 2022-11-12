---
layout: syllabus_page
title: Creating Idea controller in app
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - controller
description: Creating Idea controller in app
permalink: /ruby-on-rails/section-three/app-idea-controller/
prev_link: /ruby-on-rails/section-three/app-idea-route/
next_link: /ruby-on-rails/section-three/app-idea-view/
disable_toc: true
comments: true
---

# Creating Idea controller in Rails

Let's fix the error we got in the previous page for `uninitialized constant IdeasController`:

```shell
Routing Error

uninitialized constant IdeasController Did you mean? Ideastore
...
```

## Fixing error for controller

Let's try to understand error here.

The error says that our application doesn't have constant (or class in this case) with name `IdeasController`.
Let's fix this by creating a controller with file name `ideas_controller.rb` under `app/controllers` folder.

```ruby
# app/controller/ideas_controller.rb
class IdeasController < ApplicationController
end
```

Now, the above error should be fixed but we will different error.

```shell
Unknown action

The action 'show' could not be found for IdeasController
```

This error says that we don't have action (or method in terms of programming) inside `IdeasController`.

Updated the `IdeasController` with method `show` as:

```ruby
# app/controller/ideas_controller.rb
class IdeasController < ApplicationController
  def show
  end
end
```

## Template error

The error related to controller has gone and we are now getting following error which is related to view:

```shell
No template for interactive request

IdeasController#show is missing a template for request formats: text/html

NOTE!
...
```
