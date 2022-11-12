---
layout: syllabus_page
title: Loop statements in C language
date: 31st Aug, 2020 02:00:00
course: c
parent: /c/section-three/
tags:
 - loops
description: Loop statements in C language
permalink: /c/section-three/loops/
prev_link: /c/section-three/conditions/
next_link: /c/section-three/exercises/
comments: true
---

# Loop statements in C language

During writing programs, sometimes it is necessary to execute the statement(s) several times. And, execute those statement a specified number of times until a condition is met.

## Behavior of loop

{% include image.html img="courses/c/loop.png" %}

C language has many different variants of loop statements.

- `while`
- `do...while`
- `for`

## while loop

The `while` loop executed the block of statement(s) till the condition is `true`.

Syntax:

```c
while (condition)
{
    // statements
}
```

Example:

```c
#include <stdio.h>
int main()
{
  int age = 15;

  while (age < 18)
  {
      printf("You still have %d years to reach voting age.\n", (18 - age));
      ++age;
  }

  printf("Congratulations! You are able to vote now.\n");
  return 0;
}

// output
You still have 3 years to reach voting age.
You still have 2 years to reach voting age.
You still have 1 years to reach voting age.
Congratulations! You are able to vote now.
```

{% include util/note.html
      note="In the following examples, just replace the content of 'main' body with the given one."
      type="caution"
%}

## do...while loop

It is similar to `while` loop with one important difference. The body of `do...while` loop is executed first and condition is checked later.

{% include util/note.html
    note="Body of 'do...while' loop get executed at least once even though the condition is false." %}

Syntax:

```c
do
{
   // statements
}
while (condition);
```

Example:

```c
int age = 18;

do
{
  printf("You still have %d years to reach voting age.\n", (18 - age));
  ++age;
} while (age < 18);

printf("Congratulations! You are able to vote now.\n");
return 0;

// output
You still have 0 years to reach voting age.
Congratulations! You are able to vote now.
```

__NOTE:__ Check the difference by updating the value of `age` to `18` in `while` loop. So, in above case the output is not expected and hence, we need to use `while` loop to implement that logic.

## for loop

A `for` loop helps to efficiently write a loop that will execute block of statement(s) a specific number of times.

Syntax:

```c
for (initialization; conditional; increment)
{
    // statements inside the body of loop
}
```

Where

- The `initialization` statement is executed only once which is generally used to initialize the loop counter.
- The `condition` is evaluated. If the `condition` is evaluated to `true`, the statements inside the body is executed. If the `condition` is evaluated to `false`, then the loop terminates.
- Then, `increment` statement is executed to update the loop counter which will be used in `condition`.

Example:

```c
int age;

for (age = 15; age < 18; age++)
{
  printf("You still have %d years to reach voting age.\n", (18 - age));
}

printf("Congratulations! You are able to vote now.\n");
return 0;

// output
You still have 3 years to reach voting age.
You still have 2 years to reach voting age.
You still have 1 years to reach voting age.
Congratulations! You are able to vote now.
```

## break statement

`break` statement is used to end the loop immediately when it is encountered.

It is almost always used with `if...else` statement inside the loop.

Example:

```c
// Program to calculate the sum of 5 numbers
#include <stdio.h>

int main() {
  int i;
  float num, sum = 0.0;

  printf("--- Enter 5 numbers\n");
  for (i = 1; i <= 5; ++i) {
    printf("Enter number #%d: ", i);
    scanf("%f", &num);

    // break the loop if user enter negative number
    if (num < 0.0) {
      printf("You entered negative number. Exiting ...\n");
      break;
    }

    sum += num;
  }

  printf("Sum = %.2lf", sum);

  return 0;
}

// output
--- Enter 5 numbers
Enter number #1: 10
Enter number #2: 01
Enter number #3: -1
You entered negative number. Exiting ...
Sum = 11.00
```

## continue statement

The `continue` statement is used to skip the current iteration of the loop and continues with the next iteration.

It is almost always used with `if...else` statement inside the loop.

Example:

```c
// Program to calculate the sum of 5 numbers
#include <stdio.h>

int main() {
  int i;
  float num, sum = 0.0;

  printf("--- Enter 10 numbers\n");
  for (i = 1; i <= 10; ++i) {
    printf("Enter number #%d: ", i);
    scanf("%f", &num);

    // break the loop if user enter negative number
    if (num < 0.0) {
      printf("You entered negative number. Skipping adding this number \n");
      continue;
    }

    sum += num;
  }

  printf("Sum = %.2lf", sum);

  return 0;
}

// output
--- Enter 5 numbers
Enter number #1: 10
Enter number #2: 20
Enter number #3: -5
You entered negative number. Skipping adding this number
Enter number #4: 30
Enter number #5: 40
Sum = 100.00
```

## Examples

- Print the value of number from 1 to 15.

  ```c
  #include <stdio.h>
  int main()
  {
    int count;

    for(count = 1; count <= 15; count++)
    {
      printf("%d ", count);
    }

    return 0;
  }

  // output
  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
  ```

- Calculate the sum of first 15 natural numbers

  ```c
  #include <stdio.h>
  int main()
  {
    int n, sum = 0;

    for(n = 1; n <= 15; n++)
    {
      sum += n;
    }

    printf("Sum of first %d numbers = %d\n", n, sum);

    return 0;
  }

  // output
  Sum of first 16 numbers = 120
  ```

