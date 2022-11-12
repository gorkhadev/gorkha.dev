---
layout: syllabus_page
title: App root URL
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - ux
description: App root URL
permalink: /ruby-on-rails/section-three/app-root-url/
prev_link: /ruby-on-rails/section-three/design-basic-ux/
next_link: /ruby-on-rails/section-three/app-new-idea/
disable_toc: true
comments: true
---

# Application Root URL

The root URL is the website top level url, i.e `https://localhost:3000/` in our application case. It usually represents the domain URL of the website like `https://brgtrainings.com`.

In Rails, the `root` method defines where it should send us for the route `/`.

It is quite conventional to put the root route at the top of the `config/routes.rb` file as it is ideally the first route to be matched when we navigate to the site.

Let's display the ideas listing when we navigate the root URL. To do that we need to update the `root` method in the `config/routes.rb` file as:

```ruby
Rails.application.routes.draw do

  root 'ideas#index'
  resources :ideas, only: [:index, :show]

end
```

Now, if you open the url `https://localhost:3000`, it will display the list of ideas similar to `https://localhost:3000/ideas/`.
