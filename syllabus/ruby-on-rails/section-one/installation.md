---
layout: syllabus_page
title: Ruby and Rails Installation
date: 25th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-one/
tags:
 - ruby
 - rvm
 - ruby-on-rails
description: Ruby Installation
permalink: /ruby-on-rails/section-one/installation/
prev_link: /ruby-on-rails/section-one/
next_link: /ruby-on-rails/section-one/setup-environment/
disable_toc: true
---

# Installing Prerequisites

Before installing Ruby we need to install the prerequisites or dependencies packages.

## Ubuntu

{% include util/note.html
    note="Ubuntu is our default or recommended OS for Ruby on Rails app development."
%}

Go through with following commands to install `curl` and setup package repositories in your terminal:

```shell
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Now, install the dependencies required for the proper development of Ruby on Rails application:

```shell
sudo apt-get update
sudo apt-get install git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn
```

## macOS

Unlike Ubuntu, macOS has all the pre-requisite packages installed when you install `Xcode`. If you find any error related to these packages, consider reinstalling Xcode via following command:

```shell
xcode-select --install
```

# Installing Ruby

Check [Getting started with Ruby](/ruby/section-one/getting-started/){:target="_blank"} page to install Ruby as per the Operating System you have.

Verify the installation by running following command:

```shell
$ ruby -v
ruby 2.7.1p83 (2020-03-31 revision a0c7c23c9c) [x86_64-darwin19]
```

__NOTE:__ You might have different version depending on your OS and Ruby version.

## Install bundler

Install the `bundler` which manages Ruby gems (or packages as in other languages).

```shell
$ gem install bundler
```

# Installing Ruby on Rails

Run the following command in your Terminal to install latest version of Rails.

```shell
gem install rails
```

For specific version installation, specify the version as follows:

```shell
gem install rails -v 6.0.2.2
```

And we verify installation of Rails as:

```shell
rails -v
# Rails 6.0.3.3
```
