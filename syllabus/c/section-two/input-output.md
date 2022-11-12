---
layout: syllabus_page
title: Input and output in C language
date: 3rd Sept, 2020 02:00:00
course: c
parent: /c/section-two/
tags:
 - getting-input
description: Input and output in C language
permalink: /c/section-two/input-and-output/
prev_link: /c/section-two/operators/
next_link: /c/section-two/exercises/
comments: true
---

# Input or Ouput (I/O) in C language

Input and output is key operations in the software development. It helps to interact with user.

While dealing with input-output operations, two important streams comes into picture. These are:

- Standard Input (`stdin`): It is used for taking input from devices such as the keyboard as a data stream.
- Standard Output (`stdout`): It is used for giving output to a device such as a monitor.

There are many built-in functions available in C to perform input-output operations.

## Reading Character

`getchar()` function can be used to read a single character from standard input (i.e keyboard).

It's syntax is: `variable_name = getchar();`

## Writing Character

`putchar()` function is used to write characters, but one at a time to the standard output (i.e monitor).

It's syntax is: `putchar(variable_name);`

```c
#include<stdio.h>

int main()
{
  char alphabet;

  alphabet = getchar();
  putchar(alphabet);
}

// output
A // type A
A // printed by program
```

## Formatted Input

`scanf()` reads the formatted input from the standard input (i.e keyboard) as per the format specified and store into the variable.

Its syntax is: `scanf("format", arg1, arg2, ..., argN);`

## Formatted Output

`printf()` is one of the output function which sends formatted output to the screen (or monitor).

```c
int radius;

printf("Enter value of radius: ");
scanf("%d", &radius);
printf("Radius = %d\n", radius);

// output
Enter value of radius: 5
Radius = 5
```

## Format Specifiers for I/O

| Data Type	| Format Specifier |
| `int` | `%d` |
| `char` | `%c` |
| `float` | `%f` |
| `double` | `%lf` |
| `short int` | `%hd` |
| `unsigned int` | `%u` |
| `long int` | `%li` |
| `long long int` | `%lli` |
| `unsigned long int` | `%lu` |
| `unsigned long long int` | `%llu` |
| `signed char` | `%c` |
| `unsigned char` | `%c` |
| `long double` | `%Lf` |

## Example

```c
#include<stdio.h>

int main()
{
  int num1;
  float num2, sum;

  printf("Enter value of num1 and num2(float): ");
  scanf("%d%f", &num1, &num2); // Taking multiple inputs
  printf("You entered %d and %f\n", num1, num2);

  sum = num1 + num2;
  printf("The sum of %d and %f = %f\n", num1, num2, sum);

  return 0;
}

// output
Enter value of num1 and num2(float): 10 15.5
You entered 10 and 15.500000
The sum of 10 and 15.500000 = 25.500000
```

But, you might want to have only two decimal places right?

Use `%.2f` instead of `%f` while printing (i.e in `printf`).

```c
int num1;
float num2, sum;

printf("Enter value of num1 and num2(float): ");
scanf("%d%f", &num1, &num2); // Taking multiple inputs
printf("You entered %d and %.2f\n", num1, num2);

sum = num1 + num2;
printf("The sum of %d and %.2f = %.2f\n", num1, num2, sum);

// output
Enter value of num1 and num2(float): 10 15.5
You entered 10 and 15.50
The sum of 10 and 15.50 = 25.50
```
