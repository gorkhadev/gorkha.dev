---
layout: tutorial_series
learning_type: workshop
tutorial_name: ruby-and-rails
date: 11th Oct, 2020 02:00:00
title: Getting started with first Ruby on Rails app
description: Create the basic Ruby on Rails application and understand the CRUD concept
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
thumbnail: workshop/ideapasal/thumbnail.png
permalink: /workshop/ruby-and-rails/phase3/
prev_link: /workshop/ruby-and-rails/phase2/
next_link: /workshop/ruby-and-rails/phase4/
comments: true
---

{% include util/lazy-img.html src="workshop/ideapasal/ideapasal1.jpg" alt="Idea Pasal server" %}

Now, we are ready to create our first Ruby on Rails application.

## Ruby on Rails Installation

Install the Ruby on Rails framework by running the following command:

```ruby
gem install rails
```

This will install the latest version of Rails.

Try verifying by checking the version as:

```ruby
rails -v
# output : Rails 7.0.4.3
```

## Getting started with app

We will be creating a _Pasal(or store)_ for storing ours ideas. We should be able to create, view, update and delete our idea in this pasal.

Go through the following commands to get started with application:

1. Let's start with creating the  application by running following command:

    ```ruby
    rails new ideapasal
    ```

2. Enter into the folder `ideapasal` and open the application in the editor:

    ```ruby
    cd ideapasal
    code .
    ```

  __NOTE:__ You can use different editor as well other than VS Code.

3. Now run the server by running following command:

    ```ruby
    rails s
    ```

4. Open the url [http://localhost:3000](http://localhost:3000){:target="_blank"} in the browser, you should see following output:

    {% include util/lazy-img.html src="workshop/ideapasal/ideapasal2.jpg" alt="Idea Pasal server" %}

## Create the scaffold for Idea

Now, we are going to Model, Views and Controller to manage our idea in the pasal.

1. Run the following command to create the scaffold of idea that will allows you to list, add, remove, edit, and view ideas:

    ```ruby
    rails generate scaffold idea name:string description:text image:string
    ```

2. Run the following command to update the database and restart the server:

    ```ruby
    rails db:migrate
    rails server
    ```
3. Open [http://localhost:3000/ideas](http://localhost:3000/ideas){:target="_blank"} in your Browser to view the list of ideas.

4. Now, try to create a new idea and view it. Also, try to update existing idea and finally try to delete them.

## Update the root route of the application

Currently, our main route i.e `/` is displaying the default Rails application page.

Let's try to display the ideas which we saw earlier in `/ideas` route.

Open the `config/routes.rb` file. After the first line, add this line and save it:

```ruby
root to: 'ideas#index'
```

The final `config/routes.rb` fill will look like below:

```ruby
Rails.application.routes.draw do
  root to: 'ideas#index'

  resources :ideas
end
```

__NOTE:__ You should put the root route at the top of the file, because it is the most popular route and should be matched first.

Now, try to open [http://localhost:3000/](http://localhost:3000/){:target="_blank"} in your Browser. It will now show the list of ideas.

{% include util/congrats.html
   text="You have now created your first application in Ruby on Rails. "
%}

Click __Next__ to proceed to styling the application.
