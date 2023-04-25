---
layout: syllabus_page
title: Method in Ruby language
date: 8th May, 2020 5:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - method
description: Method in Ruby language
permalink: /ruby/section-two/method/
prev_link: /ruby/section-two/getting-input/
next_link: /ruby/section-two/naming-conventions/
comments: true
---

# Method in Ruby

A method allows us to write the piece of code at one place which get executed many times.
This encourages modularity in the programs since writing the same code at different places tend to create more errors.

__NOTE__: Ruby methods are similar to functions in other languages.

## Defining Method

In order to use a method, we need to first define it.
A method is defined with the `def` keyword followed by method name and at the end we need to use `end` keyword to denote end of that method.

## Syntax

```ruby
def method_name
  # code ...
end
```

__NOTE:__ The Ruby method name should be written as `snake_case`.
See [Naming Conventions](../naming-conventions#snake-case-for-symbols-methods-and-variables){:target="_blank"}.


## Method with arguments

As like other programming languages, we may pass arguments to a method in Ruby.

```ruby
def hello(name)
  puts "Hello, #{name}"
end

hello("Ruby")   # output: Hello, Ruby
```

## Default arguments

Ruby method can have default arguments.
This arguments is used when call the method without passing any argument.

```ruby
def hello(name = 'Foo')
  puts "Hello, #{name}"
end

hello()        # or just hello which is usually preferred
hello("Ruby")
```

Output:

```plain
# output
Hello, Foo
Hello, Ruby
```

{% include util/note.html
    note="The parentheses are usually not used when using a method without arguments."
%}

## Return Values

By default, a method returns the result of the last statement evaluated in the body of the method.
However, you can explicitly use the `return` keyword anywhere in the body to return from that point.

```ruby
def hello(name)
  return "Returned" # our early return
  puts "Hello, #{name}" # this expression is never evaluated
end

def add(number1, number2)
  number1 + number2     # no need of 'return' keyword
end

add(10, 5)  # output: 15
```

## Multiple Return values

In Ruby, only a single object may be returned.
If we need multiple values from a method call, then we store those in an Array.

```ruby
def swap(number1, number2)
  [number2, number1]
end

number1 = 10
number2 = 5

number1, number2 = swap(number1, number2)
puts number1 # output: 5
puts number2  # output: 10
```

## Chaining Methods

We can chain methods together if we know the return value properly.
This will help us to write expressive code.

```ruby
def add(number1, number2)
  number1 + number2
end

add(2, 3).times { |i| puts "#{i} Hello" }
```

Output:

```plain
0 Hello
1 Hello
2 Hello
3 Hello
4 Hello
```

## Method calls as arguments

In Ruby, we can use a method call as an argument to other methods.

```ruby
def add(number1, number2)
  number1 + number2
end

def subtract(number1, number2)
  number1 - number2
end

def multiply(number1, number2)
  number1 * number2
end

puts multiply(add(3, 7), subtract(10, 5)) # output: 50
```

## Local Variable Scope in Method

A method creates its own scope.
A variable defined in the method are only accessible within that method and cannot be invoked from outside of method definition.

```ruby
# we might assume that the 'update_name' will
# update the name variable from 'Foo' to 'Ruby'
name = "Foo"

def update_name
  name = "Ruby"
end

puts name # output: Foo
```

However, we are able to access some of the data if passed as argument.

```ruby
languages = ['Ruby', 'C', 'Python', 'Go']

def update_language(languages)
  languages << 'JavaScript'
end

update_language(languages)
puts languages
```

Output:

```plain
Ruby
C
Python
Go
JavaScript
```

__NOTE__: We can update the array here since it is passed as reference to method.
