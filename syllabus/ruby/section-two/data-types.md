---
layout: syllabus_page
title: Data Types
date: 23th April, 2020 02:00:00
course: ruby
parent: /ruby/section-two/
tags:
 - data-types
 - number
 - string
 - boolean
 - array
 - hash
 - symbol
 - range
 - nil
description: Data Types in Ruby language
permalink: /ruby/section-two/data-types/
prev_link: /ruby/section-two/
next_link: /ruby/section-two/variables-constants/
comments: true
---

# Data Types in Ruby language

{% include util/highlight.html
    text="Data types represents different types of data like text, string, numbers etc.
          It also represents a kind of value which determines what operations can be performed on that data."
%}

Ruby has several data types and all data types are based on classes as it is a pure Object-Oriented language.

The following are the basic data types recognized in Ruby:

- Number (Class: `Numeric`)
  - Integer (Class: `Integer`)
  - Float (Class: `Float`)
- String (Class: `String`)
- Boolean (Class: `TrueClass` or `FalseClass` )
- Array (Class: `Array`)
- Hash  (Class: `Hash`)
- Symbol (Class: `Symbol`)
- Range (Class: `Range`)
- Nil (Class: `NilClass`)

### Try yourself

```ruby
puts "I am string".class
puts 10.class
puts 14.3.class
puts true.class
puts false.class
puts ["I am string", 10, 14.3, true, false].class
puts({ num: 10, float: 14.3, bool: true}.class)
puts :foo.class
puts (1..10).class
puts nil.class
```

## Numbers

A number is defined as a sequence of digits, and may contain dot(`.`) as a decimal mark.
Optionally the user can use the underscore(`_`) as a separator to _make number more readable_.
There are two different kinds of numbers i.e integer and float.

{% include util/note.html
    note="Before Ruby v2.4.0, integer numbers had two categories, Fixnum and Bignum. From v2.4.0, both are
now classified under one class i.e Integer."
    source="https://bugs.ruby-lang.org/issues/12005"
%}

#### Basic Operations

We can perform many basic operations with numbers like addition, subtraction, multiplication, division etc.

```ruby
# Integer
5 + 5 # evaluation: 10
20 - 10 # evaluation: 10
20 * 5 # evaluation: 100
20 / 5 # ovalua: 4

# Float
1.5 + 2.5 # evaluation: 4.0
5.5 - 2.5 # evaluation: 3.0
2.5 * 2 # evaluation: 5.0
10 / 2.5 # evaluation: 4.0

# Surprise!
15/2 # evaluation: 7
15.0/2 # evaluation: 7.5
15.fdiv(2) # evaluation: 7.5
```

__NOTE__: `#` is used to mark the beginning of a comment.

We will see more details about numbers in another section.

## String

A string is a sequence of characters that may represent a word or a sentence.
Strings are enclosed by a text within a single (`'`) or double (`"`) quotes.
You can use both double quotes and single quotes to create strings.
Strings are objects of the class `String`.

### String Interpolation

It is the way to evaluate some Ruby code between the opening `#{` and closing `}` bits and the result will be embedded into the string surrounding it.

```ruby
# String concatenation
name = "Ruby"
puts "Hello, " + name   # output: Hello, Ruby

# String interpolation
name = "Ruby"
puts "Hello, #{name}"   # output: Hello, Ruby
```

### Double vs Single quote string

- Double quoted string allow interpolation while single quote doesn't

  ```ruby
  name = "Ruby" # defined some value name
  puts "My name is #{name}" # output: My name is Ruby
  puts 'My name is #{name}' # output: My name is #{name}
  # Single quoted string didn't substituted value of 'name'
  ```

- Double quote strings allow escape sequences while single quote do not.

  ```ruby
  puts "\n" # output: new line is shown
  puts '\n' # output: \n
  ```

### Best Practice

As many of the Ruby Linters suggest, use single quote for defining a "simple" string and use double quote in the case of interpolation or escaping sequences.
More importantly, be consistent in your choice.

## Boolean

In Ruby there is no Boolean data type, but intead we have two different objects: `false` and `true`.
`true` is an instance of `TrueClass` and `false` is an instance of `FalseClass`.

Instead, there is this "boolean" idea of truthy and falsy that is used, while we can also be strict with a `true` and `false` evaluation if we need to be.

### AND, OR and NOT

- If we use `and` with any two operands and if both of them are `true`, then the result will be `true`.
  Otherwise, it will be `false`.
  `and` can be understood as both ( first and second both )`.
- If we use `or` and if at least one of the two operands is `true`, then the result will be `true`.
  The result will be `false` if both the operands are `false`.
  `OR can be understood as either ( first or second any )`.
- You can understand `not` by thinking that it will do the opposite.
  We can consider this "negation".
  This can be understood as described below.
  - not false is true
  - not true is false

### `&&,` `||` and `!`

In Ruby there are three main boolean operators:

- `&&` which represents logical _and_.
  For an `&&` to evaluate to `true`, both operand values must evaluate to `true`. For example:

```ruby
puts true && true # output: true
puts true && false # output: false
```

- `||` which represents logical _or_.
  For an `||` to evaluate to `true`, only one operand value must evaluate to `true`. For example:

```ruby
puts false || true # output: true
```

- `!` (pronounced as "not") which represents logical _not_.
   A `!` ("not") reverses the logical state of its operand, i.e., if a condition is `true`, then `!` will make it `false`; if it is `false`, then `!` will make it `true`.
   For example:

```ruby
puts !true # output: false
puts !false # output: true
```

### More Example

```ruby
x = 10
y = 20
puts x == 10 && y == 20
puts x == 3 || y == 20
puts x == 3 && y == 20
puts x == 3 || y == 2
puts !x # output: false as using ! operator to non-zero result to false
```

#### Output:

```ruby
true
true
false
false
false
```

### Best Practice

Use `&&/||` for boolean expressions, `and/or` for flow control. [(source)](https://github.com/rubocop-hq/ruby-style-guide#andor)

See [_The Pickaxe_](http://www.ruby-doc.com/docs/ProgrammingRuby/html/tut_expressions.html) for more information about "operators" (often methods) in Ruby, and their precedence.

```ruby
# boolean expression
if codition1 && condition2
  do_something
end

# control flow
document.saved? or document.save!
```

## Array

Ruby arrays are ordered (indexed) collections of objects.
They can hold objects like integer, number, hash, string, symbol or any other array.

An array is a list of values enclosed in square brackets its elements are separated by commas.

Each element in an array is referred to by an index which starts at 0 like in C.
A negative index is assumed to be relative to the end of the array, i.e., `-1` indicates the last element of the array, `-2` is the 2nd last element and so on.

### Creating Arrays

The two common ways to create arrays are:

- Using square brackets

```ruby
fruits = ['mango', 'banana', 'apple'] # evaluates as: fruits array with three fruit names
```

- Using `Array.new`

```ruby
numbers = Array.new(3, 0) # evaluates as: numbers array with 3 elements initialized to 0
puts numbers # [0, 0, 0]

languages = Array.new(5, 'ruby')
puts languages # ['ruby', 'ruby', 'ruby', 'ruby', 'ruby]
```

This approach is quite useful in creating an array with some predetermined values.

### Accessing element in Array

You can access an array's element by using its index value.

```ruby
fruits = ['mango', 'banana', 'apple']
puts fruits[0] # output: 'mango'
```

### Removing an element from an Array

The common way to delete an element from an Array is using the `delete` method.

```ruby
languages = ['C', 'Ruby', 'Python', 'Go', 'C']
languages.delete('C')
puts languages # ['Ruby', 'Python', 'Go']
```

__NOTE__: It will remove all occurrences of the specified element.

See __Array__ page for more detail.

## Hash

A `Hash` is a collection of key-value pairs data.
These key-value pairs provide a useful way to store and access data.
Hashes are often used to hold data that are related.

You define a hash like:

```ruby
# Similar to the Perl Hash, unsurprisingly
user = { "first_name" => "Foo", "last_name" => "Bar" }
# or similar to JSON (without the string requirement for the keys)
user = { first_name: "Foo", last_name: "Bar" }
```

### Accessing element from Hash

You can retrieve values from a Hash using `[]` method requesting a key inside it.

```ruby
user = { first_name: "Foo", last_name: "Bar" }
puts user[:first_name] # output: Foo
```

See __Hash__ page for more detail.

## Symbol

`Symbol` is similar to `String` but symbols are immutable, i.e., it's state can’t be changed once created.
_It will always have the same size in memory._
Its value is its identity.

### Better for performance

When you create two `String` objects with the same value, those two objects two different objects.
However, when you create two Symbols, it is the same object. See below results.

```ruby
# string
>> "foo".object_id
=> 70288511587360
>> "foo".object_id
=> 70288504327720
```

```ruby
# symbol
>> :foo.object_id
=> 2098908
>> :philip.object_id
=> 2104348
>> :foo.object_id
=> 2098908
```

### Best practice

Use symbol to identify something since it refer to only one object.
This is why keys are often symbols in a `Hash`.

## Range

Ruby ranges describes a set of values with an indicated beginning and end. 
alues of a range can be numbers, characters, strings or objects.
It provides the flexibility and can reduce the size of code.

A common use is to define a range of values for array.

There are two basic forms:

- Using `start..end`(two dots): Include the end's value as part of object
- Using `start...end`(three dots): Exclude the end's value as part of object

```ruby
(1..10).to_a    # evaluation: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(1...10).to_a   # evaluation: [1, 2, 3, 4, 5, 6, 7, 8, 9]
('a'..'e').to_a # evaluation: ["a", "b", "c", "d", "e"]
```

## Nil

`nil` is a Ruby object used to represent an "empty" or "default" value.
It’s the only other object that will evaluate as "false" in a conditional statement by itself, the other being `false`.
We call this "falsey", since it is not literally `false`, yet it evaluates as such. value, meaning that it behaves like `false`, and it ecan be used as a conditional statement for this purpose.
`nil` is the single object of `NilClass`.

__NOTE__: There is ONLY one `nil` object, with an `object_id` of 8 in 64-bit machine(4 in 32-bit). 
