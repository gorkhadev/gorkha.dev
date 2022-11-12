---
layout: syllabus_page
title: Data Types in C language
date: 31st Aug, 2020 02:00:00
course: c
parent: /c/section-two/
tags:
 - data-types
description: Data Types in C language
permalink: /c/section-two/data-types/
prev_link: /c/section-two/variables/
next_link: /c/section-two/operators/
comments: true
---

# Data Types in C language

{% include util/highlight.html
    text="Data types represents different types of data like text, string, numbers etc.
          It also represents a kind of value which determines what operations can be performed on that data."
%}

In C, data types represent what type of data to be stored in variables and also determines the type and size of data associated with variables. The process is type declaration.

Example:

```c
int radius;
```

Here, `radius` is a variable of `int` (integer) type. And, the size of `int` is 4 bytes.

## Basic Data Types

Below are the list of basic data types in C language along with their memory size in bytes.

| Type | Memory Size (bytes) | Format Specifiers |
| :- | :- | :- |
| int	| 2 (32 Bits), 4 (64 Bits) | `%d`, `%e` (scientific) |
| char | 1 | `%c` |
| float |	4 | `%f` |
| double | 8 | `%lf` |
| long double |	16 | `%Lf` |
| short int	| 2 | `%hi` |
| unsigned int | 2 (32 Bits), 4 (64 Bits) | `%hu` |
| long int | 4 (32 Bits), 8 (64 Bits) | `%ld` |
| long long int |	8 | `%lld` |
| unsigned long int	| 4 | `%lu` |
| unsigned long long int | 8 | `%llu` |
| signed char |	1 | `%c` |
| unsigned char |	1 | `%d` |

__NOTE:__ There is also another datatype `void` which represent nothing or no type.
