---
layout: syllabus_page
title: Section Two Exercises
date: 5th Sept, 2020 03:00:00
course: c
parent: /c/section-two/
tags:
  - exercises
description: Section Two Exercises
permalink: /c/section-two/exercises/
prev_link: /c/section-two/input-and-output/
next_link: /c/section-three/
comments: true
---

# Section Two Exercises

## Writing program

1. Write a program to print your name, date of birth. and mobile number. Go to the editor

    Expected Output:

    ```c
    Name   : Foo Bar
    DOB    : 5th Sept, 2020
    Mobile : 012-9876543210
    ```

2. Write a program to print character `C` using `*` character as shown below.

    Expected Output:

    ```c
      ******
    **      **
    *
    *
    *
    *
    **      **
      ******
    ```

3. Write a program to print the quotient and remainder of a division.

    Expected Output:

    ```c
    Enter first number: 20
    Enter second number: 7

    Quotient of 20/7 = 2
    Remainder of 20/7 = 6
    ```

4. Write a program to convert specified days (Eg: `370`) into years, months, weeks and days

    Expected Output:

    ```c
    Years: 1
    Months: 12
    Weeks: 0
    Days: 5
    ```

    Solution:

    ```c
    #include <stdio.h>
    int main()
    {
      int days, years, months, weeks;

      days = 370;

      // Converts days to years, weeks and days
      years = days/365;
      months = (days / 30.4167);
      weeks = (days % 365)/7;
      days = days- ((years*365) + (weeks*7));

      printf("Years: %d\n", years);
      printf("Months: %d\n", months);
      printf("Weeks: %d\n", weeks);
      printf("Days: %d \n", days);

      return 0;
    }
    ```
