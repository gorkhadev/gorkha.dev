---
layout: syllabus_page
title: Iterators in Ruby language
date: 8th May, 2020 03:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - control-flow
  - iterators
description: Iterators in Ruby language
permalink: /ruby/section-two/iterators/
prev_link: /ruby/section-two/loops/
next_link: /ruby/section-two/getting-input/
comments: true
---

# Iterators in Ruby language

In computer programming, an iterator is an entity which enables programmer to traverse through the element of container, particularly a list (or array).

In Ruby, iterator is a method that loop through the collection and allow to execute a code block.

Ruby provides many different type of iterators.

- `each` Iterator
- `map` or `collect` Iterator
- `times` Iterator
- `upto` Iterator
- `downto` Iterator
- `step` Iterator
- `each_line` Iterator

## each Iterator

This iterator loop through each element of collection (potentially Array, Hash or Range) one by one, executes the code block for each element and return the base collection.

### Example

```ruby
arr = [1, 2, 3, 4, 5]
returned_val = arr.each do |num|
  puts num
end

puts returned_val

# output
1
2
3
4
5
[1, 2, 3, 4, 5] ( similar to original array)
```

## map or collect Iterator

Both `map` or `collect` iterators returns a new object based on the execution of code block inside it passing each element one by one.

### Example

```ruby
arr = [1, 2, 3, 4, 5]
returned_val = arr.map do |num|
  puts num
  num * 2
end

puts returned_val

# output
1
2
3
4
5
[2, 4, 6, 8, 10]  (updated array)
```

### map! or collect! Iterator

This iterator will update the original collection based on the execution of code block inside it.

#### Example

```ruby
arr = [1, 2, 3, 4, 5]
arr.map! do |num|
  puts num
  num * 2
end

puts arr

# output
1
2
3
4
5
[2, 4, 6, 8, 10]  (original array got updated)
```

## times Iterator

By using `times` iterator we can execute a code block specified number of times.

### Example

```ruby
5.times do |num|
  puts num
end

# output
0
1
2
3
4
```

## upto Iterator

The `upto` iterator iterates upward from one number(source) to another number(destination).

__NOTE__: The destination number should be greater than source number.

```ruby
1.upto(5) do |num|
  puts num
end

# output
1
2
3
4
5
```

## downto Iterator

The `downto` iterator iterates downward from one number(source) to another number(destination).

__NOTE__: The destination number should be lesser than source number.

```ruby
10.downto(5) do |num|
  puts num
end

# output
10
9
8
7
6
5
```

## step Iterator

The `step` iterator is used to iterate while skipping specified number(or step) over a range.

__NOTE__: The `step` iterator only works for `Range` datatype not on `Array`.

```ruby
(1..10).step(2) do |num|
  puts num
end

# output
1
3
5
7
9
```

### Numeric step method

The `step` method invokes the given block with the sequence of numbers starting at specified number, incremented by step (defaulted to 1) on each call.

The loop finishes when the value to be passed to the block is greater than limit (if step is positive) or less than limit (if step is negative), where limit is defaulted to infinity.

```ruby
1.step(to: 10, by: 2) do |num|
  puts num
end

# output
1
3
5
7
9
```

__NOTE:__ `to` and `by` are optional here. We can write as `1.step(10, 2) do ... end`

Check [`Numeric#step`](https://ruby-doc.org/core-2.7.1/Numeric.html#method-i-step){:target="_blank"} for more detail.

## each_line Iterator

The `each_line` iterator is used to iterate over a new line in a string.

```ruby
lines = "First line\nSecond line\nThird line"
lines.each_line do |line|
  puts line
end

# output
First line
Second line
Third line
```
