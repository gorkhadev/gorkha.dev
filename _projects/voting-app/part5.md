---
layout: tutorial_series
learning_type: projects
tutorial_name: voting-app-sinatra
title: Result page
date: 11th Oct, 2020 02:00:00
description: Add result route and its view
permalink: /projects/voting-app-sinatra/part5/
prev_link: /projects/voting-app-sinatra/part4/
next_link: /projects/voting-app-sinatra/part6/
comments: true
---

Till now we are able to cast vote. However, now we need to create a page to display our voting result.

## Add the results route and its view

We need to add route for the result page as `/results` which you can see as a hyperlink in `/cast` page as you can notice below.

{% include util/lazy-img.html src="projects/voting-app-sinatra/5.1.png" %}

Add the following code into `voting.rb` file:

```ruby
get '/results' do
  @votes = { 'HAM' => 7, 'PIZ' => 5, 'CUR' => 3 }
  erb :results
end
```

Here, we are creating dummy data `@votes` which simulates the number of votes for particular dish.

Now, create its view file as `results.erb` under `views` directory.

```erb
<h1>Voting Results</h1>
<table>
  <% CHOICES.each do |id, text| %>
    <tr>
      <th><%= text %></th>
      <td><%= @votes[id] || 0 %>
      <td><%= '#' * (@votes[id] || 0) %></td>
    </tr>
  <% end %>
</table>

<p><a href='/'>Cast more votes!</a></p>
```

Now, check the results page after restarting the server (`Ctrl+c` and run app again). You will see following similar page:

{% include util/lazy-img.html src="projects/voting-app-sinatra/5.2.png" alt="Voting app add results route" %}

## Code explanation

The `@votes` is an instance variable which we had used to hold some dummy results at present.

In the `results.erb` page, `@votes[id]` has been used to get the count for the particular dish. The code snippet `'#' * (@votes[id])` basically print the symbol `#` as many as vote count.
