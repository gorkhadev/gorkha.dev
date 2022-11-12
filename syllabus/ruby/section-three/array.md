---
layout: syllabus_page
title: Array in Ruby language
date: 22nd Aug, 2020 18:00:00
course: ruby
parent: /ruby/section-two/
tags:
 - datatype
 - array
description: Array in Ruby language
permalink: /ruby/section-three/array/
prev_link: /ruby/section-three/
next_link: /ruby/section-three/hash/
comments: true
---

# Array in Ruby language

Ruby arrays are ordered collections of objects. They can hold objects like integer, number, hash, string, symbol
or any other array.

An array is a list of variables enclosed in square brackets and separated by commas.

Each element in an array is referred to by an index which starts at 0 like in C. A negative index is assumed to
be relative to the end of the array i.e `-1` indicates the last element of the array, `-2` is the 2nd last element
and so on.

## Creating Arrays

The two common ways to create arrays are:

- Using square brackets

  ```ruby
  fruits = ['mango', 'banana', 'apple'] # output: fruits array with three fruits name
  ```

- Using `Array.new`

  ```ruby
  numbers = Array.new(3, 0) # output: numbers array with 3 elements initialized to 0
  puts numbers # [0, 0, 0]

  languages = Array.new(5, 'ruby')
  puts languages # ['ruby', 'ruby', 'ruby', 'ruby', 'ruby]
  ```

  This approach is quite useful in creating an array with some default values.

## Accessing element in Array

You can access array element by using its index value.

```ruby
fruits = ['mango', 'banana', 'apple']
puts fruits[0] # output: 'mango'
```

## Accessing multiple elements

One can access multiple elements as well. It can be achieved by passing two indices.

```ruby
languages = ['C', 'Ruby', 'Python', 'Go']
high_level = languages[1,3]
puts high_level # ["Ruby", "Python", "Go"]
```

{% include util/note.html
            note="Ruby doesn't throw any error if the user tries to access the element that doesn’t exist. Instead it returns <em>nil</em>." type="caution" %}

## Adding element to an Array

If you want to add new element to Array, then you can achieve that through following methods.

- `push` method:

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.push('JavaScript')
  puts languages # ['C', 'Ruby', 'Python', 'Go', 'JavaScript']
  ```

- Using `<<` operator:

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages << 'JavaScript'
  puts languages # ['C', 'Ruby', 'Python', 'Go', 'JavaScript']
  ```

- If you want to add as the beginning, use `unshift` method:

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.unshift('JavaScript')
  puts languages # ['JavaScript', 'C', 'Ruby', 'Python', 'Go']
  ```

## Removing element from an Array

Similar to addition, Ruby provide many methods to remove element from an Array. Following are few common methods:

- `delete` method: It will delete all the occurrences of the specified element from array.

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go', 'C']
  languages.delete('C')
  puts languages # ['Ruby', 'Python', 'Go']
  ```

- `delete_at` method: Delete the element at the specified index.

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.delete_at(2)
  puts languages # ['C', 'Ruby', 'Go']
  ```

- `pop` method: It is used to remove the element from end of the array.

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.pop
  puts languages # ['C', 'Ruby', 'Python']
  ```

- `shift` method: Removes the first element from the array.

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.shift
  puts languages # ['Ruby', 'Python', 'Go']
  ```

## Iterating over an Array

  There are many ways we can iterate over an Array.

- `each` method is the most common way to iterator over an Array.

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.each do |lang|
    puts "#{lang} is Nice"
  end

  # output
  C is Nice
  Ruby is Nice
  Python is Nice
  Go is Nice
  ```

  __NOTE__: Method `each_index` will only give index instead of element.

- `each_with_index` method provides you an index along with element while iterating over Array.

  ```ruby
  languages = ['C', 'Ruby', 'Python', 'Go']
  languages.each_with_index do |lang, i|
    puts "#{i+1}. #{lang} is Nice"
  end

  # output
  1. C is Nice
  2. Ruby is Nice
  3. Python is Nice
  4. Go is Nice
  ```

## Comparing Arrays

You can compare two arrays for equality using the `==` operator.

```ruby
lang1 = ['C', 'Ruby', 'Python', 'Go']
lang2 = ['C', 'Ruby', 'Python', 'Go']
puts lang1 == lang2 # true

lang2.delete('C')
puts lang1 == lang2 # false
```

## Common Array methods

### include?

This method checks whether the argument given is included in the array or not.

```ruby
languages = ['C', 'Ruby', 'Python', 'Go']
puts languages.include?('Ruby') # true
```

### sort

This method helps to sort the Array elements.

```ruby
languages = ['C', 'Ruby', 'Python', 'Go']
puts languages.sort # ["C", "Go", "Python", "Ruby"]
```

### concat

This method will concat another method with the existing one.

```ruby
languages = ['C', 'Ruby', 'Python', 'Go']
updated = languages.concat(['Rust', 'Dart'])
puts updated # ["C", "Ruby", "Python", "Go", "Rust", "Dart"]
```

__NOTE__: You can see all Array methods in their official documentation [here](https://ruby-doc.org/core-2.7.0/Array.html){:target="_blank"}. Go through it and familiarize yourself. There are many handy methods available.
