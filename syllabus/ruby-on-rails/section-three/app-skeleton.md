---
layout: syllabus_page
title: Ruby on Rails app skeleton
date: 25th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - ruby-on-rails
description: Ruby on Rails app skeleton
permalink: /ruby-on-rails/section-three/app-skeleton/
prev_link: /ruby-on-rails/section-three/
next_link: /ruby-on-rails/section-three/app-idea-model/
disable_toc: true
comments: true
---

# Ruby on Rails app skeleton

Let's create the application skeleton which is a set of files generated when you run the `rails new` command.

Let's create a new Rails app and name it as `ideastore`.

## App creation

{% include util/note.html
    note="I highly recommend to create a dedicated folder to store all your projects. I usually have <em>projects</em> folder." type="recommend"
%}

Run following commands to create rails skeleton of `ideastore`:

```shell
$ mkdir projects
$ cd projects
$ rails new ideastore
    create
    create  README.md
    create  Rakefile
...
    remove  config/initializers/cors.rb
    remove  config/initializers/new_framework_defaults_6_0.rb
       run  bundle install
Fetching gem metadata from https://rubygems.org/............
Fetching gem metadata from https://rubygems.org/.
Resolving dependencies...
Using rake 13.0.1
Using concurrent-ruby 1.1.7
...
Fetching webpacker 4.3.0
Installing webpacker 4.3.0
Bundle complete! 17 Gemfile dependencies, 74 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
    run  bundle binstubs bundler
    run  bundle exec spring binstub --all
* bin/rake: Spring inserted
* bin/rails: Spring inserted
      rails  webpacker:install
    create  config/webpacker.yml
Copying webpack core config
    create  config/webpack
    create  config/webpack/development.js
    create  config/webpack/environment.js
    create  config/webpack/production.js
    create  config/webpack/test.js
...
Installing all JavaScript dependencies [4.3.0]
         run  yarn add @rails/webpacker@4.3.0 from "."
yarn add v1.22.4
info No lockfile found.
[1/4] 🔍  Resolving packages...
...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
...
├─ webpack-dev-middleware@3.7.2
├─ webpack-dev-server@3.11.0
└─ ws@6.2.1
✨  Done in 19.51s.
Webpacker successfully installed 🎉 🍰
```

If everything goes well with above command, you should see the message `Webpacker successfully installed`.

## Go inside the app

```shell
$ cd ideastore
```

## Run server

Now, run the server as:

```shell
$ rails server # or just rails s
rails s
=> Booting Puma
=> Rails 6.0.3.3 application starting in development
=> Run `rails server --help` for more startup options
Puma starting in single mode...
* Version 4.3.6 (ruby 2.7.1-p83), codename: Mysterious Traveller
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://127.0.0.1:3000
* Listening on tcp://[::1]:3000
Use Ctrl-C to stop
...
```

## Open the app

Open url `http://localhost:3000` in your browser. You should be able to see web page similar to following :

{% include image.html img="courses/ror/app-skeleton.jpg" %}
