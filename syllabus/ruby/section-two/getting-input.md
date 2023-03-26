---
layout: syllabus_page
title: Getting input from User in Ruby language
date: 8th May, 2020 4:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - input
description: Getting input from User in Ruby language
permalink: /ruby/section-two/getting-input/
prev_link: /ruby/section-two/iterators/
next_link: /ruby/section-two/method/
comments: true
---

# Getting input from User in Ruby language

Sometimes during the program you want ask user to interact with the program like asking his name or other details.

This can be easily achieved by using the Ruby `gets` method which may be considered the opposite of `puts` which will print the output
to standard output device, i.e., monitor.

In Ruby, we can get user input like this:

```ruby
puts "Enter your name: "
name = gets.chomp
puts "Hello #{name}, how are you"
```

Running this code, I would see this:

```
Enter your name:
RubyGuru
Hello, RubyGuru, how are you
```

{% include util/note.html
    note="The reason for using 'chomp' after 'gets' is that 'gets' will read the data entered by
    user and store into variable 'name' along with new line character that you gave with the press of the enter or return key, represented by a 'newline' character as '\n'.
    The method 'chomp' will remove the trailing new line character and store the rest of the data into 'name'."
%}

```ruby
puts "Enter your name: "
name = gets
puts "Hello #{name}, how are you"
```

Without the chomp, it will show the "enter" at the place that I pressed it.

I will run the code above, and we can see:

```
Enter your name:
RubyGuru
Hello, RubyGuru
, how are you
```

## Extended example

In the following example, I have extended the use of `gets` to accept other details of person
and transforming the data into appropriate variables.

```ruby
print "Enter your name: "
name = gets.chomp
print "Enter your age: "
age = gets.to_i
print "Enter your address: "
addr = gets.chomp

puts "Hello, #{name}, how are you"
puts "If I am right, your age is '#{age}'"
puts "And, your address is '#{addr}', right?"
```

When I run the above program:

```
Enter your name: foo
Enter your age: 10
Enter your address: barpak, gorkha, Nepal
Hello, foo, how are you
If I am right, your age is '10'
And, your address is 'barpak, gorkha, Nepal', right?
```

### NOTE

- `to_i` is used to convert the numeric string to integer.
- `print` is used to ask information because `puts` will add new line char and give a feeling that you are entering your data in another line.

## Calculator

Let's build a small calculator program in Ruby.
Here, we ask the user for two numbers and then print the addition of them.

```ruby
print "Enter first number: "
number1 = gets.to_f

print "Enter second number: "
number2 = gets.to_f

puts "#{number1} + #{number2} = #{number1 + number2}"
```

### Output

```ruby
Enter first number: 5
Enter second number: 15
5.0 + 15.0 = 20.0
```
