---
layout: syllabus_page
title: Strings in C language
date: 11th Sept, 2020 03:00:00
course: c
parent: /c/section-five/
tags:
  - strings
description: Strings in C language
permalink: /c/section-five/strings/
prev_link: /c/section-five/arrays/
next_link:
comments: true
---

# Strings in C language

In C language, a string is actually a sequence of characters terminated with a null character `\0`. It is stored as one-dimensional array of character with its last element as a null character `\0`.

__Example:__

```c
char lang[] = "learning";

// or it can be also defined as

char lang[] = {'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', '\0'};
```

Then, its memory representation is similar to one dimensional array as show below:

| l | e| a | r | n | i | n | g | \0 |

## Declaring String

A string can be declare using following syntax:

```c
char string_name[ number_of_characters ];
```

__Example:__

```c
char str[5]; // means declare a string of 5 characters
```

## Declaration with initialization

We can declare and initialize a string in different ways:

```c
char str[] = "learning";  // good practice

char str[10] = "learning"; // bad practice

char str[] = {'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', '\0'};  // good practice

char str[10] = {'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', '\0'};  // bad practice
```

## Example

```c
#include<stdio.h>

int main()
{
  // declare and initialize string
  char str[] = "learning";

  // print string
  printf("%s", str);

  return 0;
}

// output
learning
```

## Assigning value to String

We cannot directly assign value to string like we do for other data types.

```c
char str[15] = "old string";

// now you want to update to new value
str = "language";  // Error! array type is not assignable.
```

For this, C standard library `string.h` has provided us useful methods to work with strings. One of them is `strcpy()` which we can use to copy one string to another.

```c
#include <stdio.h>
#include <string.h>

int main() {
  char str[15] = "old string";
  char new_str[15] = "language";

  printf("str = %s\n", str);
  strcpy(str, new_str);
  printf("After 'strcpy'\n");

  printf("str = %s\n", str);

  return 0;
}

// output
str = old string
After 'strcpy'
str = language
```

## Updating particular character in String

Since a string is an array of characters we can update particular character in string by accessing that character using braces `[]`.

__Example:__

```c
#include <stdio.h>

int main()
{
  char str[] = "C language";

  str[0] = 'D';   // just update first character

  printf("Updated name : %s\n", str);

  return 0;
}

// output
Updated name : D language
```


## Read String as input from user

Asking any information from user is a common operation. The information can be in the form of string too.

We can use `scanf()` function to read string as well.
The `scanf()` reads the series of characters from user(or keyboard) until it encounters
whitespace character ( i.e space, newline, tab, etc).

__Syntax:__

```c
scanf("%s", variable_name);
```

__NOTE:__ We are not using `&` operator here as we had used in case of `int`, `float` or other data type.

__Example:__

```c
#include <stdio.h>

int main() {
  char name[20];
  printf("Enter name: ");
  scanf("%s", name);
  printf("Your name is %s.", name);
  return 0;
}

// output
Enter name: c language
Your name is c.
```

__NOTE:__ Since, there is a space before `language`, hence in the above program, only "C" was stored in the `name` string.

## Read a line of string

`stdio.h` library provided other useful input and output functions like `fgets()` and `puts()`.
The `fgets()` function is used to read a line of string. And, function `puts()` is used to display the line string.

```c
#include <stdio.h>

int main() {
  char name[20];
  printf("Enter name: ");

  fgets(name, sizeof(name), stdin);
  // stdin represents standard input device i.e keyboard

  printf("Your name is ");
  puts(name);

  return 0;
}

// output
Enter name: c language
Your name is c language

```

__NOTE:__ `puts()` function also print the new line character (`\n`) to the screen. There is also a `gets()` function but it has been removed from `C11` version onwards.

## string.h header file

The `string.h` header file defines many useful string related functions which you can use in your programs.
Following are one of the few commonly used functions:

- `strlen()`: Find the length of string
- `strcat()`: Concatenate two strings together
- `strcmp()`: Compare two strings
- `strcpy()`: Copy one string into another

```c
#include <stdio.h>
#include <string.h>

int main()
{
  char str1[] = "language", str2[] = "language", str3[] = "Language", str4[] = "Lang";

  char new_str[10];

  int result;

  printf("Length of str1 : %lu\n", strlen(str1));
  printf("Length of str2 : %lu\n", strlen(str2));
  printf("Length of str3 : %lu\n", strlen(str3));
  printf("Length of str4 : %lu\n", strlen(str4));

  // comparing strings str1 and str2
  if(strcmp(str1, str2) == 0) {
    printf("str1 and str2 are equal.\n");
  };

  if(strcmp(str1, str3) != 0) {
    printf("str1 and str2 are not equal.\n");
  };


  printf("--- Combining str1 and str3\n");
  printf("str1 + str4: %s\n", strcat(str1, str3));

  printf("--- Copying string str1 to new_str\n");
  strcpy(new_str, str1);
  printf("Value of new_str: %s\n", new_str);

  return 0;
}

// output
Length of str1 : 8
Length of str2 : 8
Length of str3 : 8
Length of str4 : 4
str1 and str2 are equal.
str1 and str2 are not equal.
--- Combining str1 and str3
str1 + str4: languageLanguage
--- Copying string str1 to new_str
Value of new_str: languageLanguage
```
