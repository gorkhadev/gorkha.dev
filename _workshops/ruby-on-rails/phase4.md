---
layout: tutorial_series
learning_type: workshop
tutorial_name: ruby-and-rails
date: 11th Oct, 2020 02:00:00
title: Adding Bootstrap v5 and Basic Styling
description: Learn to add CSS framework like Bootstrap v5 and perform basic styling.
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
thumbnail: workshop/ideapasal/thumbnail.png
permalink: /workshop/ruby-and-rails/phase4/
prev_link: /workshop/ruby-and-rails/phase3/
next_link: /workshop/ruby-and-rails/phase5/
comments: true
---

{% include util/lazy-img.html src="workshop/ideapasal/ideapasal3.jpg" alt="Idea Pasal Styling" %}

To style the application, we will be using one of the popular CSS framework [Bootstrap v5](https://getbootstrap.com/docs/5.2/getting-started/introduction/){:target="_blank"}.

## Adding Bootstrap v5

Open the `app/views/layouts/application.html.erb` file and above the following line:

```erb
<%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
```

add following line:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
```

__NOTE:__ It loads Bootstrap from a server on the Internet and we don’t have to install it locally before you can use it.

### Updating the Ideas layout

In the same file above, replace this line `<%= yield %>` with the following lines:

```erb
<div class="container">
  <%= yield %>
</div>
```

Your application should looke like below:

{% include util/lazy-img.html src="workshop/ideapasal/ideapasal4.jpg" alt="Idea Pasal Styling" %}

## Adding basic styling

Now, let's add some basic styling to our application.

### Add a navigation bar

In the same file above, under the `<body>` tag add the following lines of code. This will add a navigation bar to the app.

```erb
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">IdeaPasal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link <%= 'active' if current_page?(controller: 'ideas') %>" href="/ideas">Ideas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Add Footer

Before the `</body>` closing tag at the end of the file, add following lines:

```erb
<footer class="mt-5 text-center text-white bg-secondary">
  <div class="container">
    IdeaPasal <%= Time.now.year %>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
```

Also, fix the footer at the bottom of the page by adding following CSS in the `application.css` file:

```css
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
```

Save the changes in your files and refresh the Browser to see the changes.

{% include util/congrats.html
   text="You have now learnt how to style your Ruby on Rails application."
%}

Click __Next__ to proceed to upload the image for your idea.
