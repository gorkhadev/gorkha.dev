---
layout: tutorial_series
learning_type: projects
tutorial_name: voting-app-sinatra
title: Sinatra intro and basic app
date: 11th Oct, 2020 02:00:00
description: Getting start with Sinatra and create a basic web app
permalink: /projects/voting-app-sinatra/part1/
prev_link: /projects/voting-app-sinatra/
next_link: /projects/voting-app-sinatra/part2/
comments: true
---

## What is Sinatra

Even though this tutorial assumes that you already have some knowledge of Sinatra, we will go through few components which will be used to build this application.

In a simplest form, Sinatra is a tiny web framework written in Ruby to create Web applications quickly.
Visit [sinatrarb.com](http://sinatrarb.com){:target="_blank"}.

## Setup your tools

- This tutorial assumes you have Ruby preinstalled else consider checking [getting started with Ruby](/ruby/section-one/getting-started/) to install Ruby in your system.
- First we need to install the web framework in our system. Run the following command to install Sinatra into the system:

  ```shell
  $ gem install sinatra --no-document
  Successfully installed sinatra-2.1.0
  1 gem installed
  ```

  __NOTE:__ The flag `--no-document` will help to speed up the installation to gem by not installing the documentation. If you want documentation of the Sinatra gem too, consider removing it from the above command.

## Basic app setup

Let's first create a project folder with name as `voting_app`.

```shell
$ mkdir voting_app
$ cd voting_app
```

Then, create a file named `voting.rb` with following content:

```ruby
require 'sinatra'

get '/' do
  'Hello, voter!'
end
```

## Run your app

Rechecking our location of project which is

```shell
$ pwd
/some/user/voting_app/

$ ls
voting.rb
```

Now, run the app by running the command as:

```shell
$ ruby voting.rb
== Sinatra (v2.1.0) has taken the stage on 4567 for development with backup from Thin
Thin web server (v1.7.2 codename Bachmanity)
Maximum connections set to 1024
Listening on localhost:4567, CTRL+C to stop
```

Now, open the url [http://localhost:4567](http://localhost:4567) in your browser to see your app.

You should see a web page with `Hello, voter!` as it's content.

## Code explanation

The way to define route in Sinatra is to write a HTTP method paired with URL-matching pattern. Each route is associated with a block:

```ruby
get '/' do
  # code
end

post '/' do
  # code
end
```

Check the [Sinatra#routes](https://github.com/sinatra/sinatra#routes) to get more details.

In the above step, we have defined a `GET` route for our root URL (`/`) and inside it we are just return a string.

Simple enough so far.

## HTML response

Let's update our implementation above to return HTML content instead of text.

Update the `get '/'` implementation as:

```ruby
get '/' do
  '<h1>Hello, voter!</h1>'
end
```

## Restart App

Restart the app by pressing `Ctrl+C` to stop the existing server and then run `ruby voting.rb`.

You will see `Hello, voter!` in heading H1 format in the browser.

{% include util/lazy-img.html src="projects/voting-app-sinatra/0.png" alt="Voting basic app" %}
