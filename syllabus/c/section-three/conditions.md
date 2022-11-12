---
layout: syllabus_page
title: Conditional statements in C language
date: 1st Sept, 2020 03:00:00
course: c
parent: /c/section-three/
tags:
  - conditions
description: Conditional statements in C language
permalink: /c/section-three/conditions/
prev_link: /c/section-three/
next_link: /c/section-three/loops/
comments: true
---

# Conditional statements in C language

Conditional statements helps to achieve decision making behavior in programming. While working on software development,
it is a common phenomenon that we do specific tasks based on some conditions.

In a real world scenario, like if your age is above 18 then you can vote else you can't.

In C language, any _non-zero_ are considered as `true`, and if it is either `zero` or `null`, then it is assumed as `false` value.

C language has following different conditional statements:

- `if`
- `if...else`
- `if...else if...else` (or `if-else` ladder)
- `? :` (Conditional operator)
- `switch`

## if statement

Syntax:

```c
if (condition) {
  // statements got executed when condition is true
}
```

Example:

```c
int age = 15;

if (age < 18) {
  printf("You are yet to meet voting age.")
}
```

## if...else statement

Syntax:

```c
if (condition) {
  // statements got executed when condition is true
} else {
  // statements got executed when condition is false
}
```

Example:

```c
int age = 20;

if (age > 18) {
  printf("Congratulations! You are ready to vote now.")
else {
  printf("You are yet to meet voting age.")
}
```

## if-else ladder

Sometimes, we need to decided more than two then in such case `if-else` ladder is used.

Syntax:

```c
if (condition1) {
   // statements got executed when condition1 is true
}
else if(condition2) {
   // statements got executed when condition2 is true
}
else if (condition3) {
   // statements got executed when condition2 is true
}
.
.
else {
   // statements got executed when all above if conditions are false
}
```

Example:

```c
int age = 20;

if (age < 10) {
  printf("You are still child.")
else if (age >= 10 && age < 18) {
  printf("You are yet to meet voting age.")
else if (age > 18) {
  printf("Congratulations! You are ready to vote now.")
else {
  printf("Invalid age")
}
```

## Conditional or Ternary Operator

The `? :` operator is also known as _Conditional_ operator. It is the only one operator which takes three operands and hence also known as _Ternary_ operator. We can use this operator to replace simple `if..else` statement.

Syntax:

```c
expression 1 ? expression 2 : expression 3
```

If `expression 1` is true then compiler executes `expression 2` else `expression 3` is executed.

Example:

```c
int age = 10;
age > 18 ? printf("Congratulations! You are ready to vote now.") : printf("You are yet to meet voting age.");
```

## Switch statement

`switch` statement allows us to choose only one among many given choices. The expression in `switch` is evaluated to some integral value which is then compared with different cases. Later, the block which the matching case is executed.

Syntax:

```c
switch(expression)
{
  case constant-1:
    block one;
    break;

  case constant-2:
    block two;
    break;

  case constant-3:
    block three;
    break;

  ...

  case constant-N:
    block N;
    break;

  default:
    default-block;
}
```

Example:

```c
char operator = '+';

switch(operator) {
  case '+':
    printf("Addition operation.\n");
    break;

  case '-':
    printf("Subtraction operation.\n");
    break;

  default:
    printf("Invalid operation.\n");
}

// output
Addition operation.
```
