---
layout: tutorial_series
learning_type: projects
tutorial_name: voting-app-sinatra
title: Storing voting results
date: 11th Oct, 2020 02:00:00
description: Data persistence with YAML Store
permalink: /projects/voting-app-sinatra/part6/
prev_link: /projects/voting-app-sinatra/part5/
comments: true
---

So far we have played with static dummy data.

Let's store the voting result and update the count whenever we vote for the specific dish.

## Adding YAML Store library

Add following code at the top of `voting.rb` file:

```ruby
require 'yaml/store'
```

## Update cast and result route handlers

Now, update the `post '/cast'` and `get /results` handlers as below:

```ruby
post '/cast' do
  @title = 'Thanks for casting your vote!'
  @vote  = params['vote']

  # create a votes.yml file and update the particular votes
  @store = YAML::Store.new 'votes.yml'
  @store.transaction do
    @store['votes'] ||= {}
    @store['votes'][@vote] ||= 0
    @store['votes'][@vote] += 1
  end
  erb :cast
end

get '/results' do
  @title = 'Results so far:'
  @store = YAML::Store.new 'votes.yml'
  @votes = @store.transaction { @store['votes'] }
  erb :results
end
```

We are using YAML here to easily manage our voting data.

{% include util/highlight.html
    text="YAML stands for <em>YAML Ain't Markup Language</em>. It is a data serialization language that matches user’s expectations about data. It designed to be human friendly and works perfectly with other programming languages. It is highly useful in manage data." class="h5"
%}

## App preview

The web app now will functionally look like below:

{% include util/lazy-img.html src="projects/voting-app-sinatra/6.gif" alt="Voting app final view" %}

{% include util/highlight.html
    text="There are many areas of improvement here which I leave up to you. This is quite basic and serve as the base for
    further development." type="success" class="h4"
%}
