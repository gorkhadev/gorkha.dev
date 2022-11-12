---
layout: syllabus_page
title: Operators in C language
date: 3rd Sept, 2020 02:00:00
course: c
parent: /c/section-two/
tags:
 - operators
description: Operators in C language
permalink: /c/section-two/operators/
prev_link: /c/section-two/data-types/
next_link: /c/section-two/input-and-output/
comments: true
---

# Operators in C language

An operator is an entity in programming which represents some operation. For example: `+` is an operation which represents addition operation.

There are many different categories of operators in C language.

- Arithmetic Operators
- Increment and Decrement Operators
- Assignment Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Miscellaneous Operators

## Arithmetic Operators

These operators perform mathematical operations.

| Operator | Operation | Example |
| :- | :- |:- |
| `+`	| Addition | `10 + 5 = 15` |
| `−`	| Subtraction | `10 - 5 = 5` |
| `*`	| Multiplication | `10 * 5 = 50` |
| `/`	| Division | `10 / 5 = 2` |
| `%`	| Modulus Operation | `10 % 5 = 0` |

## Increment and Decrement Operators

These operators changes the value of operand by 1 (either increase or decrease).

| Operator | Operation | Example |
| :- | :- |:- |
| `++` | Increment | `If a is 10, then ++a gives 11` |
| `--` | Decrement | `If a is 10, then --a gives 9` |

It has further two variants:

### Prefix Increment or Decrement

The prefix increment or decrement operator increases or decreases the value of the variable immediately before being used in the expression.

```c
int radius = 10, updated_radius;

printf("Current radius: %d\n", radius);

updated_radius = ++radius;
printf("Updated radius: %d\n", updated_radius);

printf("Old radius: %d\n", radius);

# output
Current radius: 10
Updated radius: 11
Old radius: 11
```

Here, the value of `radius` is updated first and then assigned to `updated_radius`.

### Postfx Increment or Decrement

The postfix increment or decrement operator changes the value of the variable after it is being used in the expression.

```c
int radius = 10, updated_radius;

printf("Current radius: %d\n", radius);

updated_radius = radius++;
printf("Updated radius: %d\n", updated_radius);

printf("Old radius: %d\n", radius);

# output
Current radius: 10
Updated radius: 10
Old radius: 11
```

It also works with other data types. Try to playaround with them.

## Assignment Operators

An assignment operator is used for assigning a value to a variable. It has many variants as listed below:

| Operator | Example |
| :- | :- |
| `=` | `a = 10` |
| `+=` | `a += 10` (same as `a = a + 10`) |
| `-=` | `a -= 10` (same as `a = a - 10`) |
| `*=` | `a *= 10` (same as `a = a * 10`) |
| `/=` | `a /= 10` (same as `a = a / 10`) |
| `%=` | `a %= 10` (same as `a = a % 10`) |

## Relational Operators

A relational operator checks the relationship between two operands. The `true` means integer value `1` and `false` means integer value `0`.

| Operator  | Description  |  Example |
|:-:|:-| :- |
| == | Checks if the value of two operands are equal or not | `(10 == 10)` is true |
| != | Checks if the value of two operands are not equal or not | `(10 != 10)` is false |
| > | Checks if the value of left operand is greater than the value of right operand | `(10 > 5)` is true |
| < | Checks if the value of left operand is less than the value of right operand | `(10 < 5)`is false |
| >= | Checks if the value of left operand is greater than or equal to the value of right operand | `(5 <= 10)` is true |
| <= | Checks if the value of left operand is less than or equal to the value of right operand | `(5 >= 10)` is false |

```c
int a = 10, b = 10, c = 20;

printf("%d == %d is %d \n", a, b, a == b);
printf("%d == %d is %d \n", a, c, a == c);
printf("%d > %d is %d \n", a, b, a > b);
printf("%d > %d is %d \n", a, c, a > c);
printf("%d < %d is %d \n", a, b, a < b);
printf("%d < %d is %d \n", a, c, a < c);
printf("%d != %d is %d \n", a, b, a != b);
printf("%d != %d is %d \n", a, c, a != c);
printf("%d >= %d is %d \n", a, b, a >= b);
printf("%d >= %d is %d \n", a, c, a >= c);
printf("%d <= %d is %d \n", a, b, a <= b);
printf("%d <= %d is %d \n", a, c, a <= c);

// output
// NOTE: 1 means true and 0 means false above
10 == 10 is 1
10 == 20 is 0
10 > 10 is 0
10 > 20 is 0
10 < 10 is 0
10 < 20 is 1
10 != 10 is 0
10 != 20 is 1
10 >= 10 is 1
10 >= 20 is 0
10 <= 10 is 1
10 <= 20 is 1
```

## Logical Operators

These operators are used to combine two or more conditions or to complement the evaluation of the original condition in consideration.

| Operator  | Description  |  Example |
|:-:|:-| :- |
| && | AND operator. If both the operands are non zero, then the condition becomes true. | `(false && true)` is false |
| &#124;&#124; | OR operator. If any of the two operands are non zero, then the condition becomes true. | `(false or true)` is true |
| ! | NOT operator. Use to reverses the logical state of its operand.| `!(false && true)` is true |

```c
int a = 10, b = 10, c = 20;

printf("(a == b) && (c > b) is %d \n", (a == b) && (c > b));
printf("(a == b) && (c < b) is %d \n", (a == b) && (c < b));
printf("(a == b) || (c < b) is %d \n", (a == b) || (c < b));
printf("(a != b) || (c < b) is %d \n", (a != b) || (c < b));
printf("!(a == b) is %d \n", !(a != b));
printf("!(a == b) is %d \n", !(a == b));

// output
// NOTE: 1 means true and 0 means false above
(a == b) && (c > b) is 1
(a == b) && (c < b) is 0
(a == b) || (c < b) is 1
(a != b) || (c < b) is 0
!(a == b) is 1
!(a == b) is 0
```

## Bitwise Operators

The Bitwise operators is used to perform bit-level operations on the operands. The operators are first converted to bit-level and then the calculation is performed on the operands.

The operations such as addition, subtraction, multiplication etc. can be performed at bit-level for faster processing.

| Operator  | Description  |
|:-:|:-| :- |
| & | Bitwise AND Operator copies a bit to the result if it exists in both operands |
| &#124; | Bitwise OR Operator copies a bit if it exists in either operand |
| ^ | Bitwise XOR Operator copies the bit which is absent in both |
| ~ | Bitwise Inverse/Complement Operator and it flip the bits. Make `0` to `1` or vice-versa |
| &lt;&lt; | Bitwise Left Shift Operator moves the input bits left by a specified number of places. |
| &gt;&gt; | Bitwise Right Shift Operator moves input bits right by a certain number of places |

```c
int a = 7, b = 10;
printf("Result = %d", a & b);

// output
2
```

The above can be understood at bit level as:

```
 7 = 00000111 (In Binary)
10 = 00001010 (In Binary)

Bit Operation of 7 and 10
  00000111
& 00001010
  ________
  00000010  = 2 (In decimal)
```

## Miscellaneous Operators

There are other few miscellaneous operators in C.

| Operator | Meaning | Example |
| `sizeof()` | Returns the size of a variable |	`sizeof(a)`, give `4` if `a` is integer |
| `&`	| Returns the address of a variable |	`&a;` gives the memory address of the variable |
| `*`	| Pointer to a variable |	`*a;` represents that `a` is a pointer variable |
| `? :`	| Conditional or Ternary Operator | ` 5 < 2 ? "true" : "false" ` will give "false" |
| `,`	| Comma Operator, used to link related expressions | `int num1, num2, num3;` |
