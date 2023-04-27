---
layout: syllabus_page
title: Hash in Ruby language
date: 22nd Aug, 2020 22:00:00
course: ruby
parent: /ruby/section-two/
tags:
 - datatype
 - hash
description: Hash in Ruby language
permalink: /ruby/section-three/hash/
prev_link: /ruby/section-three/array/
next_link: /ruby/section-three/class/
comments: true
---

# Hash in Ruby language

A `Hash` is a collection of key-value pairs data.
These key-value pairs provide a useful way to store and access data.
A `Hash` is created using symbols as keys and any data types as values.

Hashes are often used to hold data that are related, such as the information about a user.

## Creating a Hash with implicit syntax

- Newest form (introduced in Ruby 1.9)

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, created_by: 'Matz'}
  ```

- Old forms

  ```ruby
  language = {:name => 'Ruby', :birth_year => 1995, :created_by => 'Matz'}
  ```

Note: Do not use space inside of the delimiters for `Hash`, similar to how we would not use a space inside the delimiters of `Array`.

- Using the `new` method

  ```ruby
  language = Hash.new
  language[:name] = 'Ruby'
  language[:birth_year] = 1995
  language[:created_by] = 'Matz'
  puts language # {:name=>"Ruby", :birth_year=>1995, :created_by=>"Matz"}
  ```

  If you pass argument to `new`, it will create a Hash with default value.
  It means if the value doesn't exist for any key
  then this default value will be returned.

  ```ruby
  language = Hash.new("C")
  language[:birth_year] = 1995
  language[:created_by] = 'Matz'
  puts language # {:birth_year=>1995, :created_by=>"Matz"}

  # Notice below
  puts language[:lang] # C
  puts language[:some_key_that_does_not_exist]

  # output
  C # any key whose value does not exist will have this value
  ```

## Accessing an element from Hash

We can retrieve values from a `Hash` using `[]` operator using a key inside it.

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
puts language[:name]       # Ruby
puts language[:birth_year] # 1995
puts language[:created_by] # Matz

puts language[:any_key_that_does_not_exist] # nil
```

## Adding element to a Hash

If you want to add a new element(key-value pair) to Hash, we can do so by assigning a new value to a key.
The method is `[]=` and we can see it being used below with "syntactic sugar":

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
language[:latest_version] = "2.7"

puts language

# output
{:name=>"Ruby", :birth_year=>1995, :type=>"language", :latest_version=>"2.7"}
```

## Updating an existing element in a Hash

Suppose that you want to update the value of an existing element. You can do so by using the following syntax:

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language', latest_version: "2.7"}
# Update latest version to 2.8
language[:latest_version] = "3.2.2"

puts language

# output
{:name=>"Ruby", :birth_year=>1995, :type=>"language", :latest_version=>"3.2.2"}
```

## Removing a key-value from an Array

You can delete a hash element using the following ways:

- `delete` method: It will delete key-value pair whose key is matched with the provided key.

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, type: 'language'}
  language.delete(:type)
  # NOTE: language.delete('type') won't delete the element in above step

  puts language # {:name=>'Ruby', :birth_year=>1995}
  ```

{% include util/note.html
  note="If you use <code>language.delete('type')</code>, Ruby won't delete the element as Ruby treat <code>'type'</code> as string and we have <code>:type</code> as a symbol in above key."
  type="caution"
%}

- `shift` method: Removes the first element from the Hash.

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, type: 'language'}
  language.shift
  puts language # {:birth_year=>1995, :type=>"language"}
  ```

## Iterating over a Hash

  Iterating over a `Hash` is similar to iterating over an `Array` with a few differences.
  We have similar methods of iterating over Hash as we have for Array.

- `each` method:

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, type: 'language', latest_version: '2.7'}
  language.each do |key, value|
    puts "Language #{key} is #{value}."
  end
  ```

  Output:

  ```plain
  Language name is Ruby.
  Language birth_year is 1995.
  Language type is language.
  Language latest_version is 2.7.
  ```

  The above can be improved further as to have the intended output, i.e., no underscore in `birth_year` and `latest_version` in output.

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, type: 'language', latest_version: '2.7'}
  language.each do |key, value|
    puts "Language #{key.to_s.gsub('_', ' ')} is #{value}."
  end
  ```

  Output:

  ```plain
  Language name is Ruby.
  Language birth year is 1995.
  Language type is language.
  Language latest version is 2.7.
  ```

- `each_key` method iterates over a `Hash` passing its key as a parameter.

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, type: 'language'}
  language.each_key do |key|
    puts key
  end
  ```

  Output:

  ```plain
  name
  birth_year
  type
  ```

- `each_value` method iterates over a `Hash` passing its value as a parameter.

  ```ruby
  language = {name: 'Ruby', birth_year: 1995, type: 'language'}
  language.each_value do |value|
    puts value
  end
  ```

  Output:

  ```plain
  Ruby
  1995
  language
  ```

## Some Hash methods

### keys and values

The method `keys` and `values` return all the keys and values of a `Hash` as an `Array`, respectively.

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
language.keys   # [:name, :birth_year, :type]
language.values # ["Ruby", 1995, "language"]
```

### has_key? or key?

The `has_key?` or `key?` method checks if a hash contains a specific key or not.
It returns a boolean value.

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
language.has_key?(:type)  # true
language.has_key?('type') # false

language.key?(:type)      # true
```

__NOTE:__ Methods `has_key?`, `key?`, and `member?` are aliases for `include?`. 

### has_value?

It returns `true` if the given value is present for some key in hash.

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
language.has_value?('Ruby')  # true
language.has_value?('C')     # false
```

### key(value)

It returns the key of the specified value passed as an argument.
If the value is not found, returns `nil`.

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
language.key('Ruby') # name
language.key('Matz') # nil
```

### select

It returns a new hash consisting of entries for which the block returns `true`.

```ruby
language = {name: 'Ruby', birth_year: 1995, type: 'language'}
string_elements = language.select {|key, value| value.is_a?(String) }

puts string_elements # {:name=>"Ruby", :type=>"language"}
```

__NOTE__: You can see all `Hash` methods in their official documentation [here](https://ruby-doc.org/core-3.2.2/Hash.html){:target="_blank"}.
Go through it and familiarize yourself.
There are many handy methods available.
