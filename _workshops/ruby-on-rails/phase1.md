---
layout: tutorial_series
learning_type: workshop
date: 11th Oct, 2020 02:00:00
tutorial_name: ruby-and-rails
title: Introduction and Lab Preparation
description: Introduction of the instructor(s), participants and lab preparation.
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
thumbnail: workshop/ideapasal/thumbnail.png
permalink: /workshop/ruby-and-rails/phase1/
prev_link: /workshop/ruby-and-rails/
next_link: /workshop/ruby-and-rails/phase2/
comments: true
---

## Instructor Introduction

The instructor for this workshop is __Budh Ram Gurung__.
He is also known as __Dhanu Sir__ and founder of this platform.

He is a _Career Growth Coach, IT Coach, Life Coach, and an Entrepreneur._

He has been teaching independently from 2019 and helping students in developing skills required get JOB in IT industry.

Previously, he has worked as a Software Developer ranging from startup to MNC ([Red Hat](https://redhat.com/){:target="_blank"}).
He has around 12 Years of IT experience.

Read more about him [here](/about).

## Participant Introduction

Let's have a quick round of introduction from participants.

The participants can introduce themselves in the following format:

```
[Name] [Studying in 3rd Year BCA or Working in Foo Company]
[I want to become ...]
```

## Hands-on Lab Preparation

For the hands-on lab experience, you can go with either two approaches:

1. Create your own lab environment in your machine (recommended)
2. Use the online development environment like [Replit](https://replit.com/~){:target="_blank"}

## Creating Lab Environment for Ruby

1. Ensure that you have a Linux OS installed in your machine (preferrably Ubuntu).
   If you are a __Windows OS user__, then use [VirtualBox](https://www.virtualbox.org/){:target="_blank"} to create a Ubuntu OS VM.

    __NOTE:__ The lab instructions are prepared based on the Ubuntu 20.04 release and should work in most of the OS releases.

2. Install Ruby by following the instructions below:

  - __Install GPG keys:__ As a first step, install GPG keys used to verify installation package:

    ```sh
    gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
    ```

  - __Install RVM stable with Ruby:__ Then, run following command to get the latest stable version Ruby.

    ```sh
    \curl -sSL https://get.rvm.io | bash -s stable --ruby
    ```

    For more information, proceed to [RVM website][rvm-link]{:target="_blank"}.

  - Verify the installation by running the following command:

    ```sh
    ruby -v
    ```

## Play with Interactive Ruby (IRB)

__Interactive Ruby Shell (IRB or irb)__ is a REPL (Read Eval Print Loop) for programming in the object-oriented scripting language Ruby.

The program is launched from a command line and allows the execution of Ruby statements giving an immediate response, letting us experiment interactively.

Try to run following in the `irb`:

```
# start the irb
irb
```

Then, start playing with Ruby statements as:

```
>> "Hello World"
>> 120
>> 15/2
>> 15.0/2
```

{% include util/congrats.html
   text="You are now ready with the hands-on experience of Ruby."
%}

Click on the __Next__ button to proceed with the introduction of Ruby language.
