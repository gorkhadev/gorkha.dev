---
layout: syllabus_page
title: Operators in Ruby language
date: 8th May, 2020 02:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - operators
description: Operators in Ruby language
permalink: /ruby/section-two/operators/
prev_link: /ruby/section-two/variables-constants/
next_link: /ruby/section-two/conditionals/
comments: true
---

# Operators in Ruby language

An operator is a programming entity that represents an operation to be performed with one or more operand.
Operators are the foundation of any programming language.
Operators allow us to perform different kinds of operations on operands.

{% include util/note.html
    note="Most operators are actually method calls. For example, 'a + b' is interpreted as 'a.+(b)', where the '+' method is being called by variable 'a' with 'b' as its argument."
%}

Ruby supports a rich set of built-in operators.

## Types of operators

- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Ternary operator
- Range operators
- Bitwise operators

Let's learn about each type of operators in brief.

## Arithmetic Operators

These operators take numerical values as their operands and return a single numerical value as result.

| Operator  | Description  |  Example |
|:-:|:-| :- |
| + | Adds values on either side of the operator  | `10 + 5` is 15 |
| - | Subtracts right hand operand from left hand operand | `10 - 5` is 5 |
| * | Perform multiplication between two operands | `10 * 5` is 50 |
| / | Divides left hand operand by right hand operand | `10 / 5` is 2 |
| % | Divides left hand operand by right hand operand and returns remainder | `10 % 5` is 0 |
| ** | Performs exponential (power) calculation on operands | `10 ** 5` is 100000 |

## Assignment Operators

These operators assign a value to the operands.

| Operator  | Description  |  Example |
|:-:|:-| :- |
| = | Simple assignment | `num = 10` |
| += | Add assignment | `num += 5` ( i.e `num = num + 5`) |
| -= | Subtract assignment | `num -= 5` (i.e `num = num - 5`) |
| *= | Multiply assignment | `num *= 5` (i.e `num = num * 5`) |
| /= | Division assignment | `num /= 5` (i.e `num = num / 5`) |
| %= | Modulus assignment | `num %= 5` (i.e `num = num % 5`) |
| **= | Exponential assignment | `num **= 5` (i.e `num = num ** 5`) |

### Parallel Assignment Operator

Ruby also supports the parallel assignment of variables. This enables multiple variables to be initialized with a single line of Ruby code.

```ruby
a = 10
b = 20
c = 30

# or following line results in similar behavior

a, b, c = 10, 20, 30
```

Parallel assignment is also useful for swapping the values held in two variables.

```ruby
a = 10
b = 20

a, b = b, a

puts a # 20
puts b # 10
```

## Comparison Operators

These operators perform comparison operation between two operands.

| Operator  | Description  |  Example |
|:-:|:-| :- |
| == | Checks if the value of two operands are equal or not | `(10 == 10)` is true |
| != | Checks if the value of two operands are not equal or not | `(10 != 10)` is false |
| > | Checks if the value of left operand is greater than the value of right operand | `(10 > 5)` is true |
| < | Checks if the value of left operand is less than the value of right operand | `(10 < 5)`is false |
| >= | Checks if the value of left operand is greater than or equal to the value of right operand | `(5 <= 10)` is true |
| <= | Checks if the value of left operand is less than or equal to the value of right operand | `(5 >= 10)` is false |
| <=> | Combined comparison operator. Returns 0 if first operand equals second, 1 if first operand is greater than the second and -1 if first operand is less than the second | `(5 <=> 10)` is -1 |
| === | Case equality operator. Used to test equality within a `when` clause of a case statement | `(1...10) === 5` is true |
| .eql? | Return `true` if the receiver and argument have both the same type and equal values | `1 == 1.0` returns true, but `1.eql?(1.0)` is false |
| .equal? | Return `true` if the receiver and argument have the same object id | `("xyz" == "xyz")`, `("xyz".eql? "xyz")` return false while `("xyz".equal? "xyz")` return true |

## Logical Operators

These operators are used to combine two or more conditions or to complement the evaluation of the original condition in consideration.
They first convert their operands to boolean values and then perform the respective comparison.

| Operator  | Description  |  Example |
|:-:|:-| :- |
| && | AND operator. If both the operands are non zero, then the condition becomes true. `and` is its alternative operator. | `(false && true)` is false |
| &#124;&#124; | OR operator. If any of the two operands are non zero, then the condition becomes true. `or` is its alternative operator. | `(false or true)` is true |
| ! | NOT operator. Use to reverses the logical state of its operand. `not` is its alternative operator. | `!(false && true)` is true |

These are also called Boolean operators which work on Boolean datatype. See __Boolean Dataype__.

### Best Practice

Use `&&/||` for boolean expressions, `and/or` for control flow. [(source)](https://github.com/rubocop-hq/ruby-style-guide#andor){:target="_blank"}.

```ruby
# boolean expression
if codition1 && condition2
  do_something
end

# control flow
document.saved? or document.save!
```

## Ternary Operator

Ruby has only one ternary operator as similar to most of other high level languages.

| Operator  | Description  | Example |
|:-:|:-| :- |
| ?: | Conditional Expression | `5 < 10 ? puts("5 is less than 10") : puts("5 is greater than 10")` |

__BEST PRACTICE:__ Use ternary operator for following type of `if/else` scenario.

```ruby
if 5 < 10
  puts("5 is less than 10")
else
  puts("5 is greater than 10")
end
```

## Range Operators

Range operators create a range of successive values consisting of a start, end and range of values in between.

| Operator  | Description  | Example |
|:-:|:-| :- |
| .. | Values includes the last term | `(1..5).to_a` results [1, 2, 3, 4, 5] |
| ... | Values excludes the last term | `(1...5).to_a` results [1, 2, 3, 4] |

## Bitwise Operators

Bitwise operator works on bits and performs bit by bit operation.

| Operator  | Description  | Example |
|:-:|:-| :- |
| & | Bitwise AND Operator copies a bit to the result if it exists in both operands | `0b1010 & 0b0111` is `0b0010` |
| &#124; | Bitwise OR Operator copies a bit if it exists in either operand | `0b1010 | 0b0111` is `0b1111` |
| ^ | Bitwise XOR Operator copies the bit which is absent in both | `0b1010 | 0b0111` is `0b1101` |
| ~ | Bitwise Inverse/Complement Operator and it flip the bits. Make `0` to `1` or vice-versa | `~0b1010` is `0b0101` |
| &lt;&lt; | Bitwise Left Shift Operator moves the input bits left by a specified number of places. | `0b1010 << 4` is `0b10100000` |
| &gt;&gt; | Bitwise Right Shift Operator moves input bits right by a certain number of places | `0b1010 >> 4` is `0b0000` |

## Double Colon (::) Operator

The `::` operator is used to access the constants, instance methods and class methods defined within a class or module from anywhere outside the class or module.

{% include util/note.html
    note="In Ruby, classes and methods may be considered constants too."
    type="important"
%}

```ruby
NAME = "foo"        # constant defined on main Object class
module Foo
   NAME = "bar"
   ::NAME = "zoo"    # set global name to zoo
   NAME = "baz"      # set local name to baz
end

puts NAME         # output: zoo (this is the global constant)
puts Foo::NAME    # output: baz (this is the local "Foo" constant)
```

# Operators Precedence

The following table shows the precedence level from highest to lowest. It also shows that which operator are method as well.

| Operator  | Description  |
|:-:|:-|
| `::` | Constant resolution operator |
| `[][]=` | Element reference, element set |
| `**` | Exponentiation |
| `!, ~, +, -` | Boolean NOT, bitwise complement, unary plus and minus |
| `*, /, %` | Multiplication, division, modulo |
| `+, -` | Addition, Subtraction |
| `>>, <<` | Bitwise shift operators |
| `&` | Bitwise AND |
| `^, |` | Bitwise XOR and OR |
| `<=, <, >, >=` | Comparison operators |
| `<=>, ==, ===, !=, =~, !~` | Equality, pattern matching and comparison |
| `&&` | Logical AND |
| `||` | Logical OR |
| `.., ...` | Range operators |
| `?:` | Ternary if-then-else |
| `=, %=, */, /=, -=, +=, |=, &=, >>=, <<=, *=, &&=, ||=, **=` | Assignment operators |
| `defined?` | Test variable definition and type |
| `not` | Boolean NOT |
| `or, and` | Boolean OR, Boolean AND |
| `begin/end` | Blocks |
