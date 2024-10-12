---
layout: post
title: Install Ruby and Start With Jekyll
date: 2024-10-11
tags:
- jekyll
- firstblog
- programming
status: publish
type: post
published: true
author: Bikash Mishra
thumbnail: blog/myblogs/thumbnail.png
cover_img: blog/myblogs/cover_img.png
page_name: blog
---

_If you're looking to create a fast, customizable, and static website, Jekyll is one of the best options out there. It's particularly popular for building blogs and project documentation websites. In this tutorial, we'll guide you through the process of installing Ruby, setting up Jekyll, and creating your first Jekyll website._

# What is Jekyll?

Jekyll is a static site generator that transforms your plain text files into websites. It's perfect for those who prefer to work with markdown and want a simple, minimalistic approach to blogging or creating websites. Jekyll is also the engine behind GitHub Pages, making it easy to host your site for free.

## Prerequisites

Before we dive in, here’s what you’ll need:
- A basic understanding of how to use the command line
- [Ruby](https://www.ruby-lang.org/en/) installed on your system

## Step 1: Install Ruby

The first step is to install Ruby, as Jekyll is built on Ruby. Let’s break down the installation process for different platforms.

``For macOS:``

1) _Open the terminal and run:_

~~~shell

  brew install ruby

~~~

2) _Add Ruby to your PATH by editing your .bash_profile or .zshrc_

~~~shell


  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
  source ~/.zshrc

~~~

`` For Windows: ``

1) _Download the Ruby installer from RubyInstaller._

2) _Run the installer, and ensure that the option "Add Ruby to your PATH" is checked._

`` For Linux (Ubuntu/Debian): ``

1) _Open your terminal and run the following commands:_

~~~shell

  sudo apt update
  sudo apt install ruby-full build-essential zlib1g-dev


~~~

2) _Add Ruby to your PATH:_

~~~shell

  echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
  echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
  source ~/.bashrc

~~~

## Step 2: Install Jekyll

Once Ruby is installed, the next step is to install Jekyll. This is done through Ruby’s package manager, ``gem``.

1) _Run the following command in your terminal:_

~~~shell

  gem install jekyll bundler

~~~

2) _Verify that Jekyll is successfully installed by checking the version:_

~~~shell

  jekyll -v

~~~

## Step 3: Create Your First Jekyll Website

Now that Jekyll is installed, it’s time to create your first website.

1) _Navigate to the directory where you want to create your website:_

~~~shell

  cd ~/path/to/your/folder

~~~

2) _Run the following command to create a new Jekyll site:_

~~~shell

  jekyll new myblog

~~~

3) _Navigate to your new site’s directory:_

~~~shell

  cd myblog

~~~

4) _Start the Jekyll server:_

~~~shell

  bundle exec jekyll serve

~~~

5) _Open your browser and go to `http://localhost:4000` to see your new Jekyll site!_


## Step 4: Customize Your Jekyll Site

Now that your Jekyll site is up and running, you can customize it to suit your needs. You can modify the `_config.yml` file to change settings such as your site title, description, and theme.

Additionally, you can add new posts by creating markdown files inside the `_posts` directory. The default format for post filenames is ``YEAR-MONTH-DAY-title.md`. For example:



```2024-10-11-my-first-post.md```



Inside the post file, you can write your content using Markdown, and Jekyll will automatically convert it into HTML when you build your site.

## Step 5: Deploy Your Site

Once you're happy with your site, you can deploy it to GitHub Pages for free. If you already have a GitHub account, follow these steps to host your Jekyll site:

1) Push your Jekyll project to a GitHub repository.

2) Go to the repository settings and enable GitHub Pages.

3) GitHub will automatically generate your site and make it available at `https://your-username.github.io/your-repository`.


## Conclusion

Installing Ruby and starting with Jekyll is a straightforward process, even for beginners. With Jekyll, you have full control over your website's design and content, without needing to worry about databases or complicated backend code. Now, go ahead and start building your own site, and don’t forget to experiment with Jekyll themes and plugins to enhance your website further.

Happy building!

