---
layout: syllabus_page
title: Command Line Arguments in Ruby language
date: 8th May, 2020 18:00:00
course: ruby
parent: /ruby/section-two/
tags:
 - cmd
 - arguments
description: Command Line Arguments in Ruby language
permalink: /ruby/section-two/cmd-args/
prev_link: /ruby/section-two/naming-conventions/
next_link: /ruby/section-three/
comments: true
---

# Command Line Arguments in Ruby language

As the name says itself `Command line arguments`, you can assume pretty correct that these might be the arguments you pass
while running your Ruby programs as how we pass arguments to a method.

```ruby
$ ruby languages.rb Ruby C Python JavaScript
```

Where
- `ruby languages.rb` is the way to run Ruby program
- Ruby, C, Python and JavaScript are four different arguments passed to it

{% include util/note.html
    note="This concept forms the basis in writing Command Line Interface(CLI) applications."
%}

## Varying the number of arguments (`ARGV` Array)

`ARGV` stands for ARGument Vector which is a one-dimensional Array.
It contains the full list of arguments in the order as passed as arguments.

{% include util/note.html
    note="All the arguments are in the string form. If you are passing numeric value then it need to be converted."
%}

## Key points to remember

- `ARGV` is an array which contains all the argument passed while running Ruby program.
- You can use `ARGV.length` method to find the total arguments passed.
- You can use `ARGV.each` method to iterate over the list of arguments and then perform operation on each argument.
- You can use `__FILE__` pseudo variable to access the file name from Ruby program.
  See [Ruby Pseudo Variables](../variables-constants#ruby-pseudo-variables){:target="_blank"}.

### Example

Create a file named `languages.rb` and type following lines.

```ruby
puts "File name is: #{__FILE__}"
puts "Total arguments length: #{ARGV.length}"
puts "Arguments are:"

ARGV.each do |arg|
  puts arg
end
```

And, run `languages.rb` as

```ruby
$ ruby cmd.rb Ruby C Python JavaScript

# output:
File name is: languages.rb
Total arguments length: 4
Arguments are:
Ruby
C
Python
JavaScript
```

## Exercises

- Write a command line program to check whether given number is even or odd.

  Create  file named `cmd_even_odd.rb`.

  ```ruby
  num = ARGV[0]       # store into meaningful variable
  num = num.to_i      # convert the numeric string into integer
  puts "Checking whether number #{num} is even or odd"

  if num.even?
    puts "#{num} is even."
  else
    puts "#{num} is odd."
  end
  ```

  Run the program as:

  ```ruby
  $ ruby cmd_even_odd.rb 10

  # output:
  Checking whether number 10 is even or odd
  10 is even.

  $ ruby cmd_even_odd.rb 5
  # output:
  Checking whether number 5 is even or odd
  5 is odd.
  ```

- Write a command line program to display your name, phone and age. If age is above 16 then print message as "You are an adult now.

  Create  file named `info.rb`.

  ```ruby
  name, phone, age = ARGV[0], ARGV[1], ARGV[2]
  age = age.to_i
  puts "Name is #{name}"
  puts "Phone is #{phone}"

  if age > 16
    puts "You are an adult now."
  else
    puts "You are yet to become adult."
  end
  ```

  Run the program as:

  ```ruby
  $ ruby info.rb Foo 1213131 17

  # output:
  Name is Foo
  Phone is 1213131
  You are an adult now.
  ```
