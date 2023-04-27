---
layout: syllabus_page
title: Setup Environment
date: 25th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-one/
tags:
 - git
 - github
description: Setup Environment
permalink: /ruby-on-rails/section-one/setup-environment/
prev_link: /ruby-on-rails/section-one/installation/
next_link: /ruby-on-rails/section-two/
disable_toc: true
---

# Git and GitHub setup

We'll be using Git for our version control system.
Git has become a _de facto_ version control system for many developers.

It is the heart of hosting services such as Github, Bitbucket, Gitlab and others. 
If you don't already have a [GitHub](https://github.com){:target="\_blank"} account, make sure to create one.

Now, replace the `your name` and `your email` in the following steps with the ones you used for your GitHub account.

```shell
git config --global user.name "your name"
git config --global user.email "your-email@domain.com"
git config --global core.editor "vim" # make vim as your default Git editor
```

# Setup Editor

I personally recommend [VS Code](https://code.visualstudio.com/){:target="_blank"} which has become popular among developers in recent years.

According to search results, Visual Studio Code is often listed as one of the best editors and IDEs.
In particular, a 2021 Stack Overflow Developer Survey found that Visual Studio Code has a significant lead as the IDE of choice across all developers surveyed.

It offers wide range of features like:

- __Intellisense:__ For code-completion and syntax highlighting
- __Extension:__  Third-party plugins that makes VSCode more usable
- __Integrated Terminal:__ Provides a built-in terminal inside VSCode

Check this nice blog on [Beginners guide for Ruby on Rails ready VS Code](https://medium.com/@ivanraybuglosa/beginners-guide-for-a-ruby-on-rails-ready-visual-studio-code-da9fe77a1356){:target="_blank"}.

I would recommend installing the extensions mentioned above to have nice experience in developing Ruby on Rails application.
