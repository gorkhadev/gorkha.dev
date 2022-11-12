---
layout: syllabus_page
title: Section Three Exercises
date: 5th Sept, 2020 03:00:00
course: c
parent: /c/section-three/
tags:
  - exercises
description: Section Three Exercises
permalink: /c/section-three/exercises/
prev_link: /c/section-three/loops/
next_link: /c/section-four/
comments: true
---

# Section Three Exercises

## Write a program

1. Write a program to calculates the volume of a sphere.

    Expected Output:

    ```shell
    Input the radius of the sphere : 5
    The volume of sphere           : 523.598816.
    ```

2. Write a program to prints the perimeter of a rectangle to take its height and width as input.

    Expected Output:

    ```shell
    Input the height of the Rectangle : 5
    Input the width of the Rectangle  : 7
    Perimeter of the Rectangle is     : 24.00
    ```

3. Write a program to converts kilometers per hour to miles per hour.

    Expected Output:

    ```shell
    Input kms per hour : 15
    Miles per hour     : 9.320568
    ```

4. _John_ bought a bicycle for Rs 350 and sold to a buyer for Rs 380.
   Did he make profit or loss by selling the bicycle?

   Write a program to calculate the profit or loss and also find the profit or loss percentage.

5. Number inspector program.

   Write a program to accept a number from keyboard, and check whether it is
   - even or odd
   - prime or non-prime
   - divisible by 3

   Expected Output:

   ```shell
   Enter the number: 15

   '15' is odd number.
   '15' is non-prime number.
   '15' is divisible by 3.
   ```

6. Write a program to accept a year as an input and determine whether it is a leap year or not.

   Use the following logic:

   Leap Year:

   - If a year is divisible by 4, 100 and 400 then it is a leap year.
   - If a year is divisible by 4 but not divisible by 100 then it is a leap year

   Not a Leap Year:

   - If a year is not divisible by 4 then it is not a leap year
   - If a year is divisible by 4 and 100 but not divisible by 400 then it is not a leap year

7. Accept the ages of _foo_, _bar_, and _baz_ from keyboard and write a program to determine the youngest
   and eldest among three.

## Find output of program

1. Behavior of `if` and Garbage value

    ```c
    #include <stdio.h>
    int main() {
      int a = 300, b, c;
      if (a >= 400)
        b = 300;
        c = 200;
        printf("\n%d%d", b, c);

      return 0;
    }
    ```

2. Behavior of `if`

    ```c
    #include <stdio.h>
    int main() {
      int a = 10, b = 20;
      if (a == b);
        printf("\n%d%d", a, b);

      return 0;
    }
    ```

    __NOTE:__ Try removing `;` in the `if` statement.

3. Behavior of `if...else`

    ```c
    #include <stdio.h>
    int main() {
      int a = 10, b = 20;
      if (a == 10)
        printf("\n%d", a);
      else;
        printf("\n%d", b);

      return 0;
    }
    ```

    __NOTE:__ Understand why `20`.
