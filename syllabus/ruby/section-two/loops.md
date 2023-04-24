---
layout: syllabus_page
title: Loops in Ruby language
date: 8th May, 2020 03:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - control-flow
  - loops
description: Loops in Ruby language
permalink: /ruby/section-two/loops/
prev_link: /ruby/section-two/conditionals/
next_link: /ruby/section-two/iterators/
comments: true
---

# Loops in Ruby language

Loops are a way to execute sequence of statements many times in Ruby when some of the condition evaluates to true or false.

Ruby supports varieties of looping statements.

- `loop` method
- `while` Statement
- `do-while` Statement
- `until` Statement
- `for` Statement
- `redo` Statement
- `retry` Statement

## loop method

By using [`Kernel#loop`](https://ruby-doc.org/core-2.7.1/Kernel.html#method-i-loop){:target="_blank"}, we can create the looping over Ruby statements.

```ruby
loop do
  puts "Hello Loop (Ctrl + c to stop me)"
end
```

### Conditional loop

In the above example, you can see we have created an infinite loop and we need to press `Ctrl + C` to stop it.

However, we can use the `break` keyword to exit the loop.
But, if we add a conditional statement than it becomes a _Conditional Loop_.

```ruby
# Print Hello only 5 fines
count = 1
loop do
  puts "#{count} Hello"
  if count == 5
    break
  end

  count += 1
end

puts "Printing Hello ends"
```

Output:

```
1 Hello
2 Hello
3 Hello
4 Hello
5 Hello
Printing Hello ends
```

__NOTE__: We can use the `next` keyword to skip the rest of the statement and start execution from the next iteration.

## while Statement

A `while` statement executes the code block while the condition is true.

### Syntax

```ruby
while conditional do # the do is optional
   code
end
```

### Example

```ruby
count = 1
while count <= 5 do
  puts "#{count} Hello"

  count += 1
end
```

Output:

```
1 Hello
2 Hello
3 Hello
4 Hello
5 Hello
```

## do-while Statement

In this loop, the code block execute first and then the condition is checked.
The loop continues till the condition is true.

### Syntax

```ruby
code while condition

or

begin
  code
end while condition
```

### Example

```ruby
count = 1
begin
  puts "#{count} Hello"
  if count == 5
    break
  end

  count += 1
end while count >= 5   # making condition false in first attempt

# output
1 Hello
```

{% include util/note.html
    note="In 'do-while' loop, the code block executes at least once even if the first condition is false."
%}

{% include util/note.html
    note="'do-while' loop is not a recommended looping statement by Matz, creator of Ruby." type="caution"
%}
## until Statement

The `until` statement executes the code block _until_ the condition is true.

### Syntax

```ruby
until conditional do # the do is optional
   code
end
```

### Example

```ruby
count = 1
until count > 5 do  # only difference with 'while' loop statement
  puts "#{count} Hello"

  count += 1
end
```

Output:

```
1 Hello
2 Hello
3 Hello
4 Hello
5 Hello
```

__NOTE__: Similar to `do-while` statement, we can have the code block executed first and condition checked after.

## for Statement

The `for` loop executes a code block once for each element in the expression.
It is used to loop over a collection of elements.

{% include util/note.html
    note="'for' loop has definite end as the number of elements is finite whereas other looping statement like 'loop', 'while', 'until' can cause infinite loop if condition is not carefully written."
%}

### Syntax

```ruby
for element in collection do # The `do` is optional here
  code
end
```

### Example

```ruby
for element in [1, 2, 3, 4, 5]
  puts "#{element} Hello"
end
```

Output:

```
1 Hello
2 Hello
3 Hello
4 Hello
5 Hello
```

## redo Statement

The `redo` keyword restarts the iteration of the most internal loop, without checking loop condition.

```ruby
for i in (0..5)
   if i < 3
      puts "#{i} Hello"
      i += 1
      redo
      puts "This will not evaluate"
   end
end
```

Output

```
0 Hello
1 Hello
2 Hello
1 Hello
2 Hello
2 Hello
```

## retry Statement

The `retry` keyword restarts the execution of code block.
It can also be used in `begin-rescue` statements.

{% include util/note.html
    note="'begin-rescue' statements are used as a way of exception handling."
%}

```ruby
count = 1
for i in (1..5)
  puts "Execution begin now"
  begin
    puts "#{i} Hello. Count #{count}"
    raise if i > 2 && count < 3
  rescue
   count += 1
   retry
  end
end
```

Output:

```
# output
Execution begin now
1 Hello. Count 1
Execution begin now
2 Hello. Count 1
Execution begin now
3 Hello. Count 1
3 Hello. Count 2
3 Hello. Count 3
Execution begin now
4 Hello. Count 3
Execution begin now
5 Hello. Count 3
```
