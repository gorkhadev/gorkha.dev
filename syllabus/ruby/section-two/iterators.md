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

In Ruby, an iterator is a method that can loop through the collection and allow to execute a code block.

Ruby provides many different type of iterators.

- `each` Iterator
- `map` or `collect` Iterator
- `times` Iterator
- `upto` Iterator
- `downto` Iterator
- `step` Iterator
- `each_line` Iterator
- And many more…

## `each` Iterator

This iterator loops through each element of a collection (potentially Array, Hash, Range, or even your own collection) one by one, executes the code block for each element and returns the base collection.
This iterator is a requirement for including `Enumerable` module, without it, most methods that `Enumerable` provides will not work.

### Example

```ruby
array = [1, 2, 3, 4, 5]
returned_value = array.each do |number|
  puts number
end

puts returned_value
```

Output:
```plain
1
2
3
4
5
[1, 2, 3, 4, 5]
```

The Array that is shown is the same Array that `each` was called on.

## map or collect Iterator

Both `map` or `collect` iterators returns a new object based on the execution of code block inside it passing each element one by one.

### Example

```ruby
array = [1, 2, 3, 4, 5]
returned_value = array.map do |number|
  puts number
  number * 2
end

puts returned_value
```

Output:

```plain
1
2
3
4
5
[2, 4, 6, 8, 10]
```

The Array shown is a new object.

### map! or collect! Iterator

This iterator will update the original collection based on the execution of code block inside it.

#### Example

```ruby
array = [1, 2, 3, 4, 5]
array.map! do |number|
  puts number
  number * 2
end

puts array
```

Output:

```plain
1
2
3
4
5
[2, 4, 6, 8, 10] 
```

The Array shown is the same array that `map!` was called on, but updated in place.
Hence the "bang" or "danger" indicator.

## times Iterator

By using `times` iterator we can execute a code block specified number of times.

### Example

```ruby
5.times do |num|
  puts num
end
```

Output:

```plain
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
```

Output:

```plain
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
```

Output:

```plain
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
```

Output:

```plain
1
3
5
7
9
```

### Numeric step method

The `step` method invokes the given block with the sequence of numbers starting at specified number, incremented by step (step amount defaults to 1) on each call.

The loop finishes when the value to be passed to the block is greater than limit (if step is positive) or less than limit (if step is negative), where limit is defaulted to infinity.

```ruby
1.step(to: 10, by: 2) do |num|
  puts num
end
```

Output:

```plain
1
3
5
7
9
```

__NOTE:__ `to:` and `by:` are optional here.
We can write as `1.step(10, 2) do ... end`

Check [`Numeric#step`](https://ruby-doc.org/3.2.2/Numeric.html#method-i-step){:target="_blank"} for more detail.

## each_line Iterator

The `each_line` iterator is used to iterate over a new line in a string.

```ruby
lines = "First line\nSecond line\nThird line"
lines.each_line do |line|
  puts line
end
```

Output:

```plain
First line
Second line
Third line
```
