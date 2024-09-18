---
layout: tutorial_series
learning_type: workshops
tutorial_name: ruby-and-rails
title: Introduction to Ruby language
date: 11th Oct, 2020 02:00:00
description: Get started with Ruby language and play around with its basics language features.
excerpt: A hands-on learning experience on Ruby language and Ruby on Rails framework
thumbnail: workshops/ruby-on-rails-101/thumb.jpg
permalink: /workshops/ruby-and-rails/phase2/
prev_link: /workshops/ruby-and-rails/phase1
next_link: /workshops/ruby-and-rails/phase3/
comments: true
---

Welcome to the introduction of Ruby language.

Now, you will get hands-on experience with Ruby language.

## Try Ruby

{% include util/lazy-img.html src="workshops/ideapasal/try-ruby.jpg" alt="Try Ruby" %}

Visit the [Try Ruby portal](https://try.ruby-lang.org/){:target="_blank"}.

Now, just read and follow the instructions given in the left section, try to copy or write on the editor and then run the Ruby statements.

## Go through the Ruby Basics Course

You can also go through the basic Ruby Course. [Click here](/ruby/section-one/).

{% include util/lazy-img.html src="workshops/ideapasal/ruby-basics.jpg" alt="Ruby Basics Course" %}

Just follow the course content, copy the code and try to run the Ruby statements in the IRB.

Following is the example of running [_Data Types in Ruby language_](https://dhanusir.com/ruby/section-two/data-types#try-yourself){:target="_blank"} code snippet in IRB:

```ruby
irb(main):001:0> puts "I am string".class
String
=> nil
irb(main):002:0> puts 10.class
Integer
=> nil
irb(main):003:0> puts 14.3.class
Float
=> nil
irb(main):004:0> puts true.class
TrueClass
=> nil
irb(main):005:0> puts false.class
FalseClass
=> nil
irb(main):006:0> puts ["I am string", 10, 14.3, true, false].class
Array
=> nil
irb(main):007:0> puts({ num: 10, float: 14.3, bool: true}.class)
Hash
=> nil
irb(main):008:0> puts :foo.class
Symbol
=> nil
irb(main):009:0> puts (1..10).class
Range
=> nil
irb(main):010:0> puts nil.class
NilClass
=> nil
```

## Running Ruby statements in a file

Since, the statements you run in IRB are temporary, to save your code you must create a Ruby program with an extenstin `.rb`.

Copy the example code given in the chapter [_Class in Ruby Language_](https://dhanusir.com/ruby/section-three/class#example-1){:target="_blank"} in a file named `class_demo.rb` and then run the program through Terminal(Linux/macOS) or Command Prompt/PowerShell(Windows) as below:

```ruby
ruby class_demo.rb
```

It should give the following output:

```ruby
Name: Foo Student
Total number of students: 1
Name: Bar Student
Total number of students: 2
Name: Baz Student
Total number of students: 3
Total students in School: 1000
```

{% include util/congrats.html
   text="You have now got the basic experience of Ruby and ready with the introduction of Ruby on Rails web framework."
%}

Click __Next__ to proceed to create your first Ruby on Rails web application.
