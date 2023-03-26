---
layout: tutorial_series
learning_type: projects
tutorial_name: voting-app-sinatra
title: Layout and views
date: 11th Oct, 2020 02:00:00
description: Extract common view component into layout
permalink: /projects/voting-app-sinatra/part4/
prev_link: /projects/voting-app-sinatra/part3/
next_link: /projects/voting-app-sinatra/part5/
comments: true
---

In our previous phase, if you notice in both of `index.erb` and `cast.erb` files, you will see some common code. We can extract the page layout related common code in Sinatra through _Layout_ feature.

## Common layout

Create a layout file `layout.erb` under `views` directory and add the common HTML content from both which
looks as follows:

```erb
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Voting App</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <h1><%= @title %></h1>
    <%= yield %>
  </body>
</html>
```

In general _Layout_ is used to define the HTML structure of the web page.

{% include util/highlight.html
    text="In Sinatra, we deal with forms which is HTML fragments, not fully structured.
    <em>Yield</em> means that the layout should wait to the templates to render and then proceed.
    What happens is that the page is rendering the layout file then it stops when it hits the 'yield' statement and
    render the associated template file. When the template is done, it keeps going to render everything else after the 'yield' statement in the layout. <br>Therefore, it is very important to be cautious about choosing the right spot for yielding statement in your layout." class="h5"
%}

## Update the views files

Update the views files `index.erb` and `cast.erb` as follows:

- `index.erb` file:

  ```erb
  <!-- Remove html, title and body tags -->
  <p>What's for dinner?</p>

  <form action='cast' method='post'>
    <ul>
      <% CHOICES.each do |id, text| %>
        <li>
          <label>
            <input type='radio' name='vote' value='<%= id %>' id='vote_<%= id %>' />
            <%= text %>
          </label>
        </li>
      <% end %>
    </ul>

    <button type='submit'>Cast this vote!</button>
  </form>
  ```

- `cast.erb` file:

  ```erb
  <!-- Remove html, title and body tags -->
  <p>You cast: <%= CHOICES[@vote] %></p>
  <p><a href='/results'>See the results!</a></p>
  ```

Now, if you reload the web app (`https://localhost:4567`) and cast the vote, you will get the same experience as before.
