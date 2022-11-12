---
layout: syllabus_page
title: Hello World program in C language
date: 31st Aug, 2020 02:00:00
course: c
parent: /c/section-one/
tags:
 - hello world
description: Hello World program in C language
permalink: /c/section-one/hello-world/
prev_link: /c/section-one/tokens/
next_link: /c/section-two/
---

# Hello World program in C language

Let's begin writing with our first program i.e `Hello World`.

Type the following code in your editor or IDE:

```c
// hello.c
#include <stdio.h>
int main() {
   printf("Hello, World!\n");
   return 0;
}
```

And, now if you are in IDE you can click `Run` button (in Windows) else run the `hello.c` C program(in macOS or Linux) as

```shell
$ gcc hello.c -o hello  # compile the C program

# run the compiled program as
$ ./hello
Hello, World!
```

## Understanding Code

- `#include` is a preprocessor command that tells the compiler to include the contents of `stdio.h` file which provide standard input and output operations.
- The `stdio.h` file contains functions such as `scanf()` and `printf()` to take input and display output respectively.
- `main()` function is the starting point of execution.
- `printf()` is a library function to print formatted output to the screen.
- The `return 0;` statement is the "Exit status" of the program which represents successful execution. `return 1;` represent failure in execution.
