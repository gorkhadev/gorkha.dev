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

A `Hash` is a collection of key-value pairs data. These key-value pairs provide a useful way to store
and access data. A hash is created using symbols as keys and any data types as values.

Hashes are often used to hold data that are related, such as the information about a user.

## Creating Hash with implicit syntax

- Newest form (introduced in 1.9 version)

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, created_by: 'Matz' }
  ```

- Old forms

  ```ruby
  language = { :name => 'Ruby', :birth_year => 1995, :created_by => 'Matz' }
  ```

- Using `new` method

  ```ruby
  language = Hash.new
  language[:name] = 'Ruby'
  language[:birth_year] = 1995
  language[:created_by] = 'Matz'
  puts language # {:name=>"Ruby", :birth_year=>1995, :created_by=>"Matz"}
  ```

  If you pass argument to `new`, it will create a Hash with default value. It means if the value doesn't exist for any key
  then this default value will be returned.

  ```ruby
  language = Hash.new("C")
  language[:birth_year] = 1995
  language[:created_by] = 'Matz'
  puts language # {:birth_year=>1995, :created_by=>"Matz"}

  # Notice below
  puts language[:lang] # C
  puts language[:some_random_key]

  # output
  C # any key whose value doesn't exist will have this value
  ```

## Accessing element from Hash

We can retrieve values from a Hash using `[]` operator using `key` inside it.

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
puts language[:name] # Ruby
puts language[:birth_year] # 1995
puts language[:created_by] # Matz

puts language[:any_random_key] # nil
```

## Adding element to a Hash

If you want to add a new element(key-value pair) to Hash, its quite easy.
Just assign new value by accessing hash with the key to be updated using `[]` operator as below:

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
language[:latest_version] = "2.7"

puts language

# output
{:name=>"Ruby", :birth_year=>1995, :type=>"language", :latest_version=>"2.7"}
```

## Updating existing element in a Hash

Suppose, you want to update the value of existing element. You can do so by using following syntax:

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language', latest_version: "2.7" }
# Update latest version to 2.8
language[:latest_version] = "2.8"

puts language

# output
{:name=>"Ruby", :birth_year=>1995, :type=>"language", :latest_version=>"2.8"}
```

## Removing key-value from an Array

You can delete a hash element using following ways:

- `delete` method: It will delete key-value pair whose key is matched with the provided key.

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, type: 'language' }
  language.delete(:type)
  # NOTE: language.delete('type') won't delete the element in above step

  puts language # {:name=>'Ruby', :birth_year=>1995}
  ```

{% include util/note.html
          note="If you use <em>language.delete('type')</em>, Ruby won't delete the element as Ruby
                treat <em>'type'</em> as string and we have 'type' as symbol in above key." type="caution" %}

- `shift` method: Removes the first element from the Hash.

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, type: 'language' }
  language.shift
  puts language # {:birth_year=>1995, :type=>"language"}
  ```

## Iterating over a Hash

  Iterating over hashes is similar to iterating over arrays with some few differences.
  We have similar methods of iterating over Hash as we have for Array.

- `each` method:

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, type: 'language', latest_version: '2.7' }
  language.each do |key, value|
    puts "Language #{key} is #{value}."
  end

  # output
  Language name is Ruby.
  Language birth_year is 1995.
  Language type is language.
  Language latest_version is 2.7.
  ```

  The above can be improved further as to have intended output i.e no underscore in `birth_year` and `latest_version` in output.

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, type: 'language', latest_version: '2.7' }
  language.each do |key, value|
    puts "Language #{key.to_s.gsub('_', ' ')} is #{value}."
  end

  # output
  Language name is Ruby.
  Language birth year is 1995.
  Language type is language.
  Language latest version is 2.7.
  ```

- `each_key` method iterate over Hash passing key as parameter.

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, type: 'language' }
  language.each_key do |key|
    puts key
  end

  # output
  name
  birth_year
  type
  ```

- `each_value` method iterate over Hash passing value as parameter.

  ```ruby
  language = { name: 'Ruby', birth_year: 1995, type: 'language' }
  language.each_value do |value|
    puts value
  end

  # output
  Ruby
  1995
  language
  ```

## Common Hash methods

### keys and values

The method `keys` and `values` return all the keys and values of Hash as an Array respectively.

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
language.keys   # [:name, :birth_year, :type]
language.values # ["Ruby", 1995, "language"]
```

### has_key? or key?

The `has_key?` or `key?` methods checks if a hash contains a specific key or not. It returns a boolean value.

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
language.has_key?(:type)  # true
language.has_key?('type') # false

language.key?(:type)      # true
```

__NOTE:__ `key?` method is actually an alias of `has_key?` method.

### has_value?

It returns `true` if the given value is present for some key in hash.

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
language.has_value?('Ruby')  # true
language.has_value?('C')     # false
```

### key(value)

It returns the key of the specified value passed as an argument. If the value is not found, returns `nil`.

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
language.key('Ruby') # name
language.key('Matz') # nil
```

### select

It returns a new hash consisting of entries for which the block returns `true`.

```ruby
language = { name: 'Ruby', birth_year: 1995, type: 'language' }
string_elements = language.select {|key, value| value.is_a?(String) }

puts string_elements # {:name=>"Ruby", :type=>"language"}
```

__NOTE__: You can see all Hash methods in their official documentation [here](https://ruby-doc.org/core-2.7.1/Hash.html){:target="_blank"}. Go through it and familiarize yourself. There are many handy methods available.
