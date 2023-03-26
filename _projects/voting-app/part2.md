---
layout: tutorial_series
learning_type: projects
tutorial_name: voting-app-sinatra
title: List of choices to vote from
date: 11th Oct, 2020 02:00:00
description: Create a page to list different choices one can vote for
permalink: /projects/voting-app-sinatra/part2/
prev_link: /projects/voting-app-sinatra/part1
next_link: /projects/voting-app-sinatra/part3/
comments: true
---

In this tutorial, we will be adding a page to display the list of choices from where one can vote.

## Adding View index

In the previous phase, the HTML part might be too tricky to handle if the response we want to send is complex.

One of the way to handle displaying content is through `View` which is a component or part of web application which handles displaying the content.

To ease of management, let's create a folder with name `views` and write our content for our root URL (`/`) into `index.erb` file.

The content for `index.erb` file is as follows:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Voting App</title>
  </head>
  <body>
    <h2>What's for dinner?</h2>

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
  </body>
</html>
```

And, add following dummy data for our list of voting options in `voting.rb` file as:

```rb
CHOICES = {
  'HAM' => 'Hamburger',
  'PIZ' => 'Pizza',
  'CUR' => 'Curry',
  'NOO' => 'Noodles'
}

get '/' do
 ...
end
```

After restarting the server, the web page will now show following:

{% include util/lazy-img.html src="projects/voting-app-sinatra/1.png" alt="Voting app view index" %}

## Code explanation

You might be wondering how about code is working. Right?

It is quite easy to understand. Just think the whole files including `voting.rb` or any erb files as part of one system.

Now, we have defined a constant `CHOICES` which is a global constant and available to all the Ruby files including erb files.

Hence, in the `index.erb` file we are able to access it.

Considering the following code snippet:

```erb
<% CHOICES.each do |id, text| %>
  ...
  <input type='radio' name='vote' value='<%= id %>' id='vote_<%= id %>' />
  <%= text %>
  ...
<% end %>
```

The ERB tag `<% ... %>` is used to perform execution of Ruby code. Here it is performing `each` iteration.
And, tag `<%= ... %>` is used to execute the Ruby code and replace the tag with evaluated results.

Hence, the above code will generate following HTML content:

```html
<li>
  <label>
    <input type="radio" name="vote" value="HAM" id="vote_HAM">
    Hamburger
  </label>
</li>
<li>
  <label>
    <input type="radio" name="vote" value="PIZ" id="vote_PIZ">
    Pizza
  </label>
</li>
...
```

See [ERB Templates](https://webapps-for-beginners.rubymonstas.org/erb/erb_templates.html){:target="_blank"} for more.
