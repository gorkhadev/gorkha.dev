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

# Method in Ruby language

Method allows us to write the piece of code at one place which get executed many times.
This encourages modularity in the programs since writing same code at different places tend to create more errors.

__NOTE__: Ruby methods are similar to the functions in other languages.

## Defining Method

In order to use a method, we need to first define it. A method is defined with the `def` keyword followed by method name and at the end we need to use `end` keyword to denote end of that method.

## Syntax

```ruby
def method_name
  code ...
end
```

__NOTE:__ Ruby method name should follow `snake_case` as it is recommended.
See [Naming Conventions](../naming-conventions#snake-case-for-symbols-methods-and-variables){:target="_blank"}.


## Method with parameters

As like other programming language, we can pass arguments to method in Ruby.

```ruby
def hello(name)
  puts "Hello, #{name}"
end

hello("Ruby")   # output: Hello, Ruby
```

## Default parameters

Ruby method can have default parameter. This parameter is used when call the method without passing any argument.

```ruby
def hello(name='Foo')
  puts "Hello, #{name}"
end

hello() # or just hello
hello("Ruby")

# output
Hello, Foo
Hello, Ruby
```

{% include util/note.html
            note="The parentheses are optional in method call if you are not passing any argument." %}

## Return Values

By default, a method returns the last statement that was evaluated in the body of the method. However, you can explicitly use the `return` keyword anywhere in the body to return from that point.

```ruby
def hello(name)
  return "Returned"
  puts "Hello, #{name}"   # this expression is never evaluated
end

def add(num1, num2)
  num1 + num2     # no need of 'return' keyword
end

add(10, 5)  # output: 15
```

## Multiple Return values

In Ruby, we can return multiple values from a method unlike in many languages like `C`.

```ruby
def swap(num1, num2)
  [num2, num1]
  # or use return num2, num1 instead of Array syntax
end

num1 = 10
num2 = 5

num1, num2 = swap(num1, num2)
puts num1 # output: 5
puts num2  # output: 10
```

## Chaining Methods

We can chain methods together if we know the return value properly. This will help us to write expressive code.

```ruby
def add(num1, num2)
  num1 + num2
end

add(2, 3).times { |i| puts "#{i} Hello" }

# output
0 Hello
1 Hello
2 Hello
3 Hello
4 Hello
```

## Method calls as arguments

In Ruby, we can use method call as an argument to other methods.

```ruby
def add(num1, num2)
  num1 + num2
end

def subtract(num1, num2)
  num1 - num2
end

def multiply(num1, num2)
  num1 * num2
end

puts multiply(add(3, 7), subtract(10, 5)) # output: 50
```

## Local Variable Scope in Method

A method creates its own scope. And, the variable defined in the method are only accessible within that method and cannot be
referenced from outside of method definition.

Also, this local variable cannot access data outside of the method definition unless the data itself is passed as a parameter.

```ruby
# we assume that the 'update_name' will update
# the name variable from 'Foo' to 'Ruby'
name = "Foo"

def update_name
  name = "Ruby"
end

puts name # output: Foo
```

However, we can able to access some of the data if passed as parameter.

```ruby
languages = ['Ruby', 'C', 'Python', 'Go']

def update_language(languages)
  languages << 'JavaScript'
end

update_language(languages)
puts languages

# output
['Ruby', 'C', 'Python', 'Go']
```

__NOTE__: We can update only `Array` here since it is passed as reference to method.
