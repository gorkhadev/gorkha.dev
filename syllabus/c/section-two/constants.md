---
layout: syllabus_page
title: Constants in C language
date: 1st Sept, 2020 03:00:00
course: c
parent: /c/section-two/
tags:
  - constants
description: Constants in C language
permalink: /c/section-two/constants/
prev_link: /c/section-two/
next_link: /c/section-two/variables/
comments: true
---

# Constants in C language

Constants are such entity in program whose value remain same during the entire execution of the program after being set.
They  are also called __Literals__.

- Constants can be any of the data types like integer constant, floating constant, char or string constant.
- Programmer use upper case naming convention to define constants as a best practice.

## Syntax

```c
const type constant_name = value;
```

`const` keyword is used to define constant in C.

## Example

```c
#include<stdio.h>

int main()
{
  const float PI = 3.14;
  const int RADIUS = 5;
  float area;
  area = PI * RADIUS * RADIUS;

  printf("The area of the circle with radius: %d is: %f sq. units.\n", RADIUS, area);

  return 0;
}

# output
The area of the circle with radius: 5 is: 78.500000 sq. units.
```

We have two constants in above program:

-  `RADIUS`: An integer constant
- `PI`: A float constant

## Constant Types in C

| Constant Type | Example |
| :- | :- |
| Integer Constant | `5, 20, 100` etc |
| Real or Float Constant | `3.14, 10.5 0.555` etc |
| Character Constant | `'a', 'b', 'c', 'z'` etc |
| String Constant | `"a", "a bc", "some word", "multi word word"` etc |
| Octal Constant | `011, 0234` etc |
| Hexadecimal Constant | `0x1b, 0x55` etc |

## Using #define

We can also define constant using preprocessor.

The syntax is:

```c
#define constant_name value;
```

Example: `#define PI 3.14`
