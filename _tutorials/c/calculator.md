---
layout: tutorial
tutorial: true
title: Simple Calculator in C language
date: 14th Oct, 2020 02:00:00
tags:
 - c
 - beginner
description: Simple Calculator in C language
permalink: /tutorials/calculator-c/
thumbnail: https://asciinema.org/a/365339.svg
external: true
comments: true
---

In this tutorial, we are going to see how to build a simple calculator in C language.

We will create a menu driven program where we ask user an option out of available options to perform
specific operations.

## Demo

{% include asciinema.html id="365339" %}

## Prerequisites

- Enthusiasm and passion to Learn
- Basic knowledge of Ruby language
  - Datatype and Variables
  - Loop
  - Conditional Operators
  - Getting input from User

## Solution Steps

{% include util/note.html
    note="The solution I described here is one of the simple solution. There are only few calculator operations
          are implemented. Recommend you to extend at your own level for more practice." type="recommend"
%}

Follow the steps below to build the simple calculator in C language.

### Setup

Let's first create the file where we want to write our program. Following is the step for Linux or macOS.
You should be able to follow this in Windows easily.

```shell
$ mkdir c_programs  # Create a common folder for all C programs
$ cd c_programs     # Enter into the folder
$ code .            # Open the current directory in VS Code
```

__NOTE:__ In Windows OS, you can open command prompt or powershell and perform commands to achieve similar operations.

Now, under `EXPLORER` and `c_programs` menu, click on file icon to create a file and name as `calculator.c`.

### Pseudocode

Pseudocode is a plain language description of the steps for the implementation of any program. It often uses structural conventions of a normal programming language, but is intended for human reading rather than machine reading.

Following is the Pseudocode for our Calculator program:

```text
- print the menu
  - accept the choice from user
    - execute the operation function as per choice
    - exit the program if user enter exit choice
  - print invalid if choice doesn't match any operation
- repeat the menu
```

### Program skeleton

Let's write the skeleton of our program. Copy following code into `calculator.c`:

```c
// Calculator in C
#include <stdio.h>

int main() {
  // variable to take choice from user
  int choice;

  // infinite while loop to print the menu till exit is selected
  while(1) {
    // print menu

    // accept choice from user
    scanf("%d", &choice);

    switch(choice) {
      case 1: // operation 1
      case 2: // operation 2
      case 3: // operation 3
      default:
        printf("Invalid Choice Selected!");
    }
  }

  return 0;
}
```

### Print menu in screen

After defining the skeleton, we can now print the menu by writing following code below the `print menu` line:

```c
printf("\n --- CALCULATOR ---\n");
printf("\n1)Addition");
printf("\n2)Subtraction");
printf("\n3)Multiplication");
printf("\n4)Division");
printf("\n5)Power");
printf("\n6)Exit");

printf("\nEnter Your Choice: ");
```

__NOTE:__ We can write above in one line as well like following but above is more readable and help fellow programmer to understand your code. So, I would encourage you to write as above.

```c
printf("\n--- CALCULATOR ---\n\n1) Addition\n2) Subtraction\n3) Multiplication\n4) Division\n5) Power\n6) Exit\nEnter Your Choice: ");
```

### Define the exit choice

Since, the exit choice is quite simple, let's define it first.

We will need to use `exit()` from the standard library `stdlib.h` to implement the exit operation.

Update the `while` statement with exit choice as below:

```c
while(1) {
  // print menu
  printf("\n --- CALCULATOR ---\n");
  printf("\n1)Addition");
  printf("\n2)Subtraction");
  printf("\n3)Multiplication");
  printf("\n4)Division");
  printf("\n5)Power");
  printf("\n6)Exit");

  printf("\n Enter Your Choice: ");
  // accept choice from user
  scanf("%d", &choice);

  switch(choice) {
    case 1: // operation 1
    case 2: // operation 2
    case 3: // operation 3
    case 6:
      printf("\nBye!\n");
      exit(0);
    default:
      printf("Invalid Choice Selected!");
  }
}
```

{% include util/note.html
    note="Check the numeric for exit is 6 in the menu. Hence, the case will have to be 6."
%}

### Run the program

Now, after above step, you can able to run the program and see how it is going.

Run the following command to compile the C program in Linux or macOS:

```shell
$ gcc calculator.c -o calculator

or

$ clang calculator.c -o calculator
```

After, above step, the compiler will compile the program and create an executable file `calculator`(defined by `-o`).

Now, run the executable as:

```shell
$ ./calculator
--- CALCULATOR ---

1) Addition
2) Subtraction
3) Multiplication
4) Division
5) Power
6) Exit
Enter Your Choice: 6

Bye!
```

At present, we have completed one path of our
`pseudocode` i.e

```
-> print the menu
-> accept the choice from user
-> exit the program if user enter exit choice
```

## Adding switch cases

Now, the main part of program is adding operation function corresponding to each case.

Let's first update the case with the function names to corresponding operation.

```c
switch(choice) {
  case 1:
    addition();
    break;
  case 2:
    subtraction();
    break;
  case 3:
    multiplication();
    break;
  case 4:
    division();
    break;
  case 5:
    power();
    break;
  case 6:
    printf("\nBye!\n");
    exit(0);
  default:
    printf("Invalid Choice Selected!");
}
```

## Adding operation implementation

Now, we can implement each of above operations. Put following code right below line `#include <stdlib.h>`:

```c
#include <stdlib.h>

// Calculator Functions
void addition() {
  int num1, num2;

  printf("\nEnter first number: ");
  scanf("%d", &num1);
  printf("\nEnter second number: ");
  scanf("%d", &num2);
  printf("\n[ %d + %d = %d ]\n", num1, num2, (num1 + num2));
}

void subtraction() {
  int num1, num2;

  printf("\nEnter first number: ");
  scanf("%d", &num1);
  printf("\nEnter second number: ");
  scanf("%d", &num2);
  printf("\n[ %d - %d = %d ]\n", num1, num2, (num1 - num2));
}

void multiplication() {
  int num1, num2;

  printf("\nEnter first number: ");
  scanf("%d", &num1);
  printf("\nEnter second number: ");
  scanf("%d", &num2);
  printf("\n[ %d x %d = %d ]\n", num1, num2, (num1 * num2));
}

void division() {
  float num1, num2;

  printf("\nEnter first number: ");
  scanf("%f", &num1);
  printf("\nEnter second number: ");
  scanf("%f", &num2);
  printf("\n[ %.2f / %.2f = %.2f ]\n", num1, num2, (num1 / num2));
}
```

The last operation is the `power` function. For this to implement we will use the the `pow` function
provided by standard library `math.h`.

Add the line `#include <math.h>` to include math library after `#include <stdlib.h>`. Then, copy following code
for the power function:

```c
void power() {
  float num1, num2;

  printf("\nEnter the number: ");
  scanf("%f", &num1);
  printf("\nEnter the power raised: ");
  scanf("%f", &num2);
  printf("\n[ %.1f^%.2f = %.2f ]\n", num1, num2, pow(num1, num2));
}
```

__NOTE:__ Notice that the `pow` function accept double. Hence we have declared `num1`, `num2` as floating type. Also, `.2f` is to get the floating value up to two decimal places.

## Source Code

Find the complete source code of this exercise [here](https://github.com/brgtrainings/codesnippets/blob/master/c_programs/calculator.c){:target="_blank"}.

## Important things to remember

- The use of curly braces `{ ... }` here might be different than what you are using or given in book. They may be of the form:

  ```c
  int main()
  {
    // code
  }
  ```

  Both are valid. I like to keep the opening brace at the end of statement more like the JavaScript style.

- You can always use different approaches to implement same problem.

## Possible optimizations

- You can add other mathematical operations as per your need.
- You can accept multiple operands in operations like addition.
- You can migrate the step of asking numbers from user inside `switch` statement.
