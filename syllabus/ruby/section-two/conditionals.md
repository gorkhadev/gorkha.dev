---
layout: syllabus_page
title: Conditional statements in Ruby language
date: 8th May, 2020 03:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - conditionals
description: Conditional statements in Ruby language
permalink: /ruby/section-two/conditionals/
prev_link: /ruby/section-two/operators/
next_link: /ruby/section-two/loops/
comments: true
---

# Flow Control statements in Ruby

Flow control uses a conditional statement to perform decision making operations based on that conditional statement.
Decision making process in programming is similar to decision making in real life.
For example, a certain block of code needs to be executed when some condition is fulfilled.

A programming language uses conditional statements to control the flow of execution of the program based on certain conditions.

There are various types of flow control statements in Ruby.

- `if, elsif, else` Statement
- `?:` ternary operator
- `unless` statement
- `case` statement
- `and` and `or`

## Ruby if, elsif, else statement

This is the basic type of conditional statement.
It executes a code block if condition is true.
If condition is false, code block of `else` clause is executed.

### Syntax

```ruby
if condition [then]
   code...
elsif condition [then]
   code...
else
   code...
end
```

The `elsif`, `then`, and `else` part are optionals and required on usage basis.

{% include util/note.html
    note="Ruby uses 'elsif' instead of 'else if'. No space and character 'e'."
%}

### Example

```ruby
number = 10

answer = if number.even?
           "Number is even"
         elsif number.odd?
           "Number is odd"
         else
           "Invalid number"
         end

puts answer
```

### if modifier

Executes code if the condition evaluates as true.
This can be used when the `else` part is unnecessary.
This is also called a "guard clause", or an "if statement as a guard clause".

```ruby
number = 10
puts "Number is even" if number.even?
```

## Ruby Ternary Operator ( `?:` )

The ternary operator results to only one branch being evaluated based on a conditional statements evaluation.
It is used in place of the `if-else` statement.

### Syntax

```ruby
# Pseudo-code
condition ? evaluate this statement if condition is true : evaluate this statement if condition false
```

### Example

```ruby
5 < 10 ? puts("5 is less than 10") : puts("5 is equal to or greater than 10")
```

The output would be:

```
5 is less than 10
```

## unless statement

It is similar to `if-else` statement however it executes the code block when the condition evaluates as false.
If the condition evaluates as true, the code block in the `else` clause is executed.

### Syntax

```ruby
unless condition [then]
  code
else
  code
end
```

The `else` part is optional and required on usage basis.

The `else` is discouraged.
If there is an else statement with `unless`, then we might consider that the if statement is "upside down".

### Example

```ruby
state = "hungry"

unless state == 'hungry'
  puts "I can wait to eat."
else
  puts "I need to eat."
end
```

The output would be:

```
I need to eat.
```

### unless modifier

Executes code if condition is false.
This can be used when `else` part is unnecessary.

```ruby
stop = false
puts "Continue coding ..." unless stop
```

## Ruby case statement

Ruby `case` statement is similar to `switch` statement in other languages.

### Syntax

```ruby
case expression
when expression [, expression ...] [then]
  code
else
  code
end
```

It compares the expression specified by `case` with the condition of `when` clause(s) and execute the code block of matching `when` clause.

If there is no `when` clauses match, `case` executes the code of the `else` clause.

### Example

```ruby
number = 5
case
when number < 5 then
  puts "Number is less than 5"
when number == 5 then
  puts "Number equals to 5"
when number > 5 then
  puts "Number is greater than 5"
else
  puts "Invalid number"
end

# output
Number equals to 5
```

Ruby `case` is basically similar to `if-elsif-else` statement.

The above example can be translated as:

```ruby
number = 5
if number < 5
  puts "Number is less than 5"
elsif number == 5
  puts "Number equals to 5"
elsif number > 5
  puts "Number is greater than 5"
else
  puts "Invalid number"
end
```
