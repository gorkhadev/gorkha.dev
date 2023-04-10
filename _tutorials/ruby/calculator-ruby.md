---
layout: tutorial
tutorial: true
title: Simple Calculator in Ruby
date: 20th Sept, 2020 02:00:00
duration: 1.5 Hrs
author: Dhanu
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

We will create a menu driven program where we ask user an option from the displayed options shown to perform specific operations.

## Demo

{% include asciinema.html id="361518" %}

## Prerequisites

- Enthusiasm and passion to learn
- Basic knowledge of the Ruby language
  - [Variables](/ruby/section-two/variables-constants/){:target="_blank"}
  - [Loop](/ruby/section-two/loops/){:target="_blank"}
  - [Conditional Operators](/ruby/section-two/conditionals/){:target="_blank"}
  - [Getting input from User](/ruby/section-two/getting-input/){:target="_blank"}

## Solution Steps

{% include util/note.html
    note="The solution I described here is one of the simplests solutions.
    I recommend to write a working program first, and then think of optimization or style improvements later."
    type="caution"
%}

Follow the steps below to build a simple calculator in Ruby.

- Let's print a menu to the screen to show the available operations to the user.

  ```ruby
  puts "--- Calculator ---"
  puts "1. Addition"
  puts "2. Subtraction"
  puts "3. Multiplication"
  puts "4. Division"
  puts "5. Exit"
  ```

- The next step is to ask the user for an option.

  ```ruby
  print "Which operation you want to perform: "
  operation = gets.to_i
  # get option from user and convert into number
  ```

  __NOTE:__ `gets` will return the data in as a String, hence we need to convert it into a number.

  - We will need to accept two numbers from the user for each operation.
    We can define a method as `accept_operands` at the top of program and then call it later whenever it is needed.

  ```ruby
  def accept_operands
    print "Enter first number: "
    operand1 = gets.to_i
    print "Enter second number: "
    operand2 = gets.to_i
    [operand1, operand2]
  end
  ```

  __NOTE:__ We can only return a single value from a method, and so we choose to return an Array with two elements.

- We need to check the `operation` option we accepted from the user in the 2nd step and perform the chosen operation:

  ```ruby
  case operation
  when 1
    number1, number2 = accept_operands()
    result = number1 + number2
    puts "#{number1} + #{number2} = #{result}"
  when 2
    number1, number2 = accept_operands()
    result = number1 - number2
    puts "#{number1} - #{number2} = #{result}"
  when 3
    number1, number2 = accept_operands()
    result = number1 * number2
    puts "#{number1} * #{number2} = #{result}"
  when 4
    number1, number2 = accept_operands()
    result = number1.to_f / number2
    puts "#{number1} / #{number2} = #{result}"
  else
    puts "Invalid choice"
  end
  ```

- Wrap the above code in a loop using the `loop` statement and `break` out of loop when `operation` is equal to `5`.

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
    number1, number2 = accept_operands()
    result = number1 + number2
    puts "#{number1} + #{number2} = #{result}"
  when 2
    number1, number2 = accept_operands()
    result = number1 - number2
    puts "#{number1} - #{number2} = #{result}"
  when 3
    number1, number2 = accept_operands()
    result = number1 * number2
    puts "#{number1} * #{number2} = #{result}"
  when 4
    number1, number2 = accept_operands()
    result = number1.to_f / number2
    puts "#{number1} / #{number2} = #{result}"
  else
    puts "Invalid choice"
  end

  puts # Will print a newline
end
```

## Possible optimizations

- You can add other mathematical operations.
- We can accept multiple operands in operations like addition.
- We can make it _Object Oriented_ by wrapping the program in a class and use methods as operations name.
