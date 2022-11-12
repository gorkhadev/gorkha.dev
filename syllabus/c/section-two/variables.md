---
layout: syllabus_page
title: Variables in C language
date: 1st Sept, 2020 03:00:00
course: c
parent: /c/section-two/
tags:
  - variables
description: Variables in C language
permalink: /c/section-two/variables/
prev_link: /c/section-two/constants/
next_link: /c/section-two/data-types/
comments: true
---

# Variables in C language

Variable in programming is an entity which indicates the memory location. The value of the variable may change during the program.

Example:

```c
int radius = 5;
```

Here, `radius` is a variable of type `int` and actually denotes a memory location where value `5` is stored.

## Variable declaration

Here, we just declare the type of the variable without setting any value. In such cases, default value get stored to the variable. Like default value of integer is `0`.

Syntax:

```c
type variable_name;

or

// for multiple variable declaration of same type
type variable_name1, variable_name2, ...;
```

## Variable Assignment

A variable assignment is a process of assigning some value to a variable.

```c
int radius; // declaration

radius = 5; // assignment
```

## Variable declaration and assignment

However, instead of separately declaring variable and assigning value to it, we can achieve both in one statement.

```c
int radius = 5;
```

## Rules for naming a variable

- Variable name must start from a letter or underscore.
- Variable name can consist of alphabets, digits and special symbols like underscore _.
- Blank or spaces are not allowed in variable name.
- Keywords are not allowed as variable name.
- Variable names are case-sensitive.
