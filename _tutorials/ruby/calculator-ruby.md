---
layout: tutorial
tutorial: true
title: Simple Calculator in Ruby
date: 20th Sept, 2020 02:00:00
tags:
 - ruby
 - beginner
description: Simple Calculator in Ruby
permalink: /tutorials/calculator-ruby/
thumbnail: https://asciinema.org/a/361518.svg
external: true
comments: true
---

In this tutorial, we are going to see how to build a simple calculator in Ruby.

We will create a menu driven program where we ask user an option out of available options to perform
specific operations.

## Demo

{% include asciinema.html id="361518" %}

## Prerequisites

- Enthusiasm and passion to Learn
- Basic knowledge of Ruby language
  - [Variables](/ruby/section-two/variables-constants/){:target="_blank"}
  - [Loop](/ruby/section-two/loops/){:target="_blank"}
  - [Conditional Operators](/ruby/section-two/conditionals/){:target="_blank"}
  - [Getting input from User](/ruby/section-two/getting-input/){:target="_blank"}

## Solution Steps

{% include util/note.html
    note="The solution I described here is one of the simple solution.
          I recommend you to first try to write program which is functional and then think of optimization or
          style improvement later."
%}

Follow the steps below to build the simple calculator in Ruby.

- Let's first print the menu to the screen to get operation to be performed from user.

  ```ruby
  puts "--- Calculator ---"
  puts "1. Addition"
  puts "2. Subtraction"
  puts "3. Multiplication"
  puts "4. Division"
  puts "5. Exit"
  print "Which operation you want to perform: "
  ```

- Next step is to get option from user.

  ```ruby
  operation = gets.to_i
  # get option from user and convert into number
  ```

  __NOTE:__ `gets` will return the data in String format and hence we need to convert it into number explicitly to be used for later purpose.

- Now, since we need to accept two numbers from user for each operation, we can define a method as `accept_operands` at the
  top of program and then call later whenever it is required.

  ```ruby
  def accept_operands
    print "Enter first number: "
    operand1 = gets.to_i
    print "Enter second number: "
    operand2 = gets.to_i
    [operand1, operand2]
  end
  ```

  __NOTE:__ We can return multiple values from Ruby methods.

- We need to check the `operation` option we accepted from user in the 2nd step and perform respective operation:

  ```ruby
  case operation
  when 1
    num1, num2 = accept_operands()
    res = num1 + num2
    puts "#{num1} + #{num2} = #{res}"
  when 2
    num1, num2 = accept_operands()
    res = num1 - num2
    puts "#{num1} - #{num2} = #{res}"
  when 3
    num1, num2 = accept_operands()
    res = num1 * num2
    puts "#{num1} * #{num2} = #{res}"
  when 4
    num1, num2 = accept_operands()
    res = num1.to_f / num2
    puts "#{num1} / #{num2} = #{res}"
  else
    puts "Invalid choice"
  end
  ```

- Wrap above code in a loop using `loop` statement and `break` out of loop when `operation` is equal to `5`.

  ```ruby
  loop do
    # ...
    break if operation == 5
    # ...
  end
  ```

## Solution

```ruby
# calculator.rb
def accept_operands
  print "Enter first number: "
  operand1 = gets.to_i
  print "Enter second number: "
  operand2 = gets.to_i
  [operand1, operand2]
end

loop do
  puts "--- Calculator ---"
  puts "1. Addition"
  puts "2. Subtraction"
  puts "3. Multiplication"
  puts "4. Division"
  puts "5. Exit"
  print "Which operation you want to perform: "

  operation = gets.to_i
  # get option from user and convert into number

  break if operation == 5

  case operation
  when 1
    num1, num2 = accept_operands()
    res = num1 + num2
    puts "#{num1} + #{num2} = #{res}"
  when 2
    num1, num2 = accept_operands()
    res = num1 - num2
    puts "#{num1} - #{num2} = #{res}"
  when 3
    num1, num2 = accept_operands()
    res = num1 * num2
    puts "#{num1} * #{num2} = #{res}"
  when 4
    num1, num2 = accept_operands()
    res = num1.to_f / num2
    puts "#{num1} / #{num2} = #{res}"
  else
    puts "Invalid choice"
  end

  puts ""   # needed to print next iteration in next line
end
```

## Possible optimizations

- You can add other mathematical operations as per your need.
- We can accept multiple operands in operations like addition.
- We can make it _Object Oriented_ by wrapping the program in a class and use method as operations name.
