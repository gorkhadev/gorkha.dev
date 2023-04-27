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

As the name itself says, `Command line arguments`, you can assume pretty correctly that these might be the arguments you pass while running your Ruby programs, similar to how we pass arguments to a method.

```ruby
$ ruby languages.rb Ruby C Python JavaScript
```

Where
- `ruby languages.rb` is the way to run the Ruby program
- `Ruby C Python JavaScript` are four different arguments passed to it

{% include util/note.html
    note="This concept forms the basis in writing Command Line Interface(CLI) applications."
%}

## Varying the number of arguments (`ARGV` Array)

`ARGV` stands for ARGument Vector which is a one-dimensional Array.
It contains the full list of arguments in the order as passed as arguments.

{% include util/note.html
    note="All the arguments are as a string.
    If you are passing a numeric value then it need to be converted."
%}

## Key points to remember

- `ARGV` is an array which contains all the argument passed while running a Ruby program.
- You can use the `ARGV.length` method to find the number of arguments passed.
- You can use the `ARGV.each` method to iterate over the list of arguments and then perform operations on each argument.
  - Indeed, any of the methods that you can use for an instance of `Array` you can use for `ARGV`.
- You can use the `__FILE__` pseudo variable to access the file name from Ruby program.
  See [Ruby Pseudo Variables](../variables-constants#ruby-pseudo-variables){:target="_blank"}.

### Example

Create a file named `languages.rb` and type following lines.

```ruby
puts "File name is: #{__FILE__}"
puts "Total arguments length: #{ARGV.length}"
puts "Arguments are:"

ARGV.each do |arg|
  puts "- {arg}"
end
```

And, run `languages.rb` as:

```shell
$ ruby cmd.rb Ruby C Python JavaScript
```

The output is:

```
File name is: languages.rb
Total arguments length: 4
Arguments are:
- Ruby
- C
- Python
- JavaScript
```

## Exercises

- Write a command line program to check whether a given number is even or odd.

Create a file named `cmd_even_odd.rb`.

```ruby
number = ARGV[0]       # store into meaningful variable
number = number.to_i      # convert the numeric string into integer
puts "Checking whether number #{number} is even or odd."

answer = if number.even?
           "even."
         else
           "odd."
         end

puts "number is #{answer}."
```

Run the program as:

```ruby
$ ruby cmd_even_odd.rb 10
Checking whether number 10 is even or odd.
10 is even.
$ ruby cmd_even_odd.rb 5
Checking whether number 5 is even or odd.
5 is odd.
```

- Write a command line program to display your name, phone and age.
  If age is above 16 then print message as "You are an adult now.

Create file named `info.rb`.

```ruby
name, phone, age = ARGV[0], ARGV[1], ARGV[2]
age = age.to_i
puts "Name is #{name}."
puts "Phone is #{phone}."

answer = 
  if age > 16
    "You are an adult now."
else
    "You are yet to become adult."
end

puts answer
```

Run the program as:

```ruby
$ ruby info.rb Foo 1213131 17

# output:
Name is Foo.
Phone is 1213131.
You are an adult now.
```
