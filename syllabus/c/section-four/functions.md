---
layout: syllabus_page
title: Functions in C language
date: 10th Sept, 2020 03:00:00
course: c
parent: /c/section-four/
tags:
  - functions
description: Functions in C language
permalink: /c/section-four/functions/
prev_link: /c/section-four/
next_link: /c/section-five/
comments: true
thumbnail: courses/c/function-behavior.gif
---

# Functions in C language

A function is an independent entity in programming which contains a set of statements enclosed by braces `{ ... }` and intended to perform a specific task.

- Sometimes, while developing programs it is needed to run the same set of statements repeatedly. In such cases, we can extract those statement into separate block and then invoke the function as necessary.
- Functions are meant to be invoked from other part of the program.
- Functions are also used to increase modularity of the program. It helps to divide the large program which made it easy to manage it.
- Every C program has at least one function, i.e `main()`.

There are three aspects related to function:

## Declaration of function

  A function declaration tells the compiler about a function name, parameters and return type. The actual body of the function can be defined separately.

  Syntax:

  ```c
  return_type function_name( type-1, type-2, ..., type-N );
  ```

## Function definition

  A function definition consists of a function header and function body which contains the actual statements which are to be executed. It contains _return type_, _function name_, _parameters_ and _function body_.

  Syntax:

  ```c
  return_type function_name( type-1 arg-1, type-2 arg-2, ..., type-N arg-N )
  {
    // body
    // C statements
  }
  ```

## Function call

  Function can be called from anywhere in the program. The list of parameters must be same during the function calling and function declaration. We must pass the same number of arguments while calling function as it is declared in the function declaration.

  Syntax:

  ```c
  function_name ( arg-1, arg-2, ..., arg-N );
  ```

## Example

Following example shows how to declare, define and call a function.

```c
#include <stdio.h>

// function to find area of circle
float square_circle(int);  // <-- Declaration

int main()
{
  int radius = 5;
  float area;

  area = square_circle(radius);   // <-- Function call
  printf("Area of circle with radius %d is %.2f.\n", radius, area);

  return 0;
}

float square_circle(int radius) // <-- Definition
{
  return 3.14 * radius * radius;
}

# output
Area of circle with radius 5 is 78.50.
```

## Function Execution

Following animated image should help you give a gist of how function works.

{% include image.html img="courses/c/function-behavior.gif" %}

## Types of Functions

There are mainly two types of function in C language.

### Standard library functions

The standard library functions are built-in functions in C programming. These functions are declared and defined in header files. And, we need to add these header file in our program in order to use these functions.

For example, the `printf()` is a standard library function to send formatted output to the screen and it is defined in the `stdio.h` file. The `sqrt()` function calculates the square root of a number and it is defined in `math.h`.

Following are some of the popular header files:

| Header file | Description |
| `<math.h>` | Mathematics functions |
| `<stdio.h>` | Standard Input/Output functions |
| `<stdlib.h>` | Standard utility functions |
| `<string.h>` | String handling functions |
| `<time.h>` | Date time functions |
| `<signal.h>` | Signal handling functions |

Example:

```c
#include <stdio.h>
#include <math.h>


int main() {
  int num = 50;
  float result;

  printf("Square root of %d is %.2f.\n", num, sqrt(num));

  return 0;
}

# output
Square root of 50 is 7.07.
```

### User-defined functions

These functions are created by user as their need. It helps to reduce the complexity of large program and optimizes the code. Hence, these functions are known as user-defined functions.

The `square_circle()` function which we defined at the [Example](#example) is actually a user defined function which we used in the later part of the program.

## Function Arguments

While calling a function, there are two ways in which arguments can be passed to a function.

### Call by value

This method copies the actual value of an arguments passed to function into their respective parameters as declared in the function. And, whatever changes made to the parameters inside the function have no effect on the arguments passed while calling to it.

All the example in this page uses _Call by value_ approach of function arguments.

### Call by reference

This method copies the address of an arguments passed to function into their respective formal parameters. And, we can access the actual argument using this address which means that changes made to these parameters affect the arguments.

We will see the example of _Call by reference_ later in the pointer section.

## Recursive Function

A function that calls itself during its execution is known as a recursive function.
The recursion continues until some condition is met to prevent it from further recursion which is usually done through
`if...else` statement (or similar approach) where we need to make one branch to call for recursion and other to return value.

{% include image.html img="courses/c/recursive.png" %}

### Example

Following is an example of recursive function to print numbers from 1 to `N`.

```c
#include <stdio.h>

void printNumbers(int lowerLimit, int upperLimit)
{
  if(lowerLimit > upperLimit)
    return;

  printf("%d ", lowerLimit);

  printNumbers(lowerLimit + 1, upperLimit);
}

int main(void) {
  int n;

  printf("Enter the value of n: ");
  scanf("%d", &n);
  printNumbers(1, n);

  return 0;
}
```

## Exercises

- Write a function to perform addition and subtraction of two numbers and use it in the program.

  ```c
  #include <stdio.h>

  float add(float num1, float num2)
  {
    return num1 + num2;
  }
  float subtract(float num1, float num2)
  {
    return num1 - num2;
  }

  int main()
  {
    float num1, num2;

    printf("Enter value of num1 and num2: ");
    scanf("%f%f", &num1, &num2);
    printf("[%.2f + %.2f = %.2f].\n", num1, num2, add(num1, num2));
    printf("[%.2f - %.2f = %.2f].\n", num1, num2, subtract(num1, num2));

    return 0;
  }

  // output
  Enter value of num1 and num2: 40 10
  [40.00 + 10.00 = 50.00].
  [40.00 - 10.00 = 30.00].
  ```

- Write a program to check whether a number is even or odd.

  ```c
  #include <stdio.h>

  int checkOddEven(int num) {
    if (num % 2 == 0) {
      return 1;
    }
    return 0;
  }

  int main() {
    int num;

    printf("Enter any number : ");
    scanf("%d", &num);

    if(checkOddEven(num)) {
        printf("The entered number is even.\n\n");
    }
    else {
        printf("The entered number is odd.\n\n");
    }

    return 0;
  }

  // output
  Enter any number: 6
  The entered number is even.
  ```

- Write a program using recursive function to find the sum of numbers from 1 to `N`.

  ```c
  #include<stdio.h>

  int sumOfNumbers(int num)
  {
    int res;
    if (num == 1) {
      return (1);
    } else {
        res = num + sumOfNumbers(num - 1);
    }
    return (res);
  }

  int main()
  {
    int n;
    int sum;

    printf("Enter the value of N : ");
    scanf("%d", &n);

    sum = sumOfNumbers(n);
    printf("The sum of numbers from 1 to %d : %d\n\n", n, sum);

    return (0);
  }

  // output
  Enter the value of N : 10
  The sum of numbers from 1 to 10 : 55
  ```
