---
layout: syllabus_page
title: Tokens in C language
date: 2nd Sept, 2020 02:00:00
course: c
parent: /c/section-one/
tags:
 - tokens
description: Tokens in C language
permalink: /c/section-one/tokens/
prev_link: /c/section-one/charset/
next_link: /c/section-one/hello-world/
---

# Tokens in C language

A token is the smallest element of a program that is meaningful to the compiler. The compiler breaks a program into the smallest possible units (tokens) and proceeds to the various stages of the compilation.

Tokens in C are divided into six different types.

- Keywords
- Identifiers
- Constants
- Strings
- Special Characters
- Operators

<img src="/assets/img/courses/c/tokens.png" class="img-fluid" />

## Keywords

_Keywords_ are pre-defined or reserved words in a programming language and has a special meaning to compiler to perform a specific function in a program. These can’t be used as variable names as it means we are assigning a new meaning to the keyword which is not allowed.

C language supports 32 keywords which are given below:

| auto | double | int | struct |
| break | else | long | switch |
| case | enum | register | typedef |
| char | extern | return | union |
| const | float | short | unsigned |
| continue | for | signed | void |
| default | goto | sizeof | volatile |
| do | if | static | while |

## Identifiers

An identifier represent the name in the C program and used for naming variables, functions, structures, unions, labels,
etc. An identifier can be composed of letters such as uppercase, lowercase letters, underscore, digits, but the starting
letter should be either an alphabet or an underscore.

Rules for constructing identifier:

- They must begin with a letter or underscore(`_`).
- They must consist of only letters, digits, or underscore. No other special character is allowed.
- It should not be a keyword.
- It must not contain white space.
- It should be up to 31 characters long as only first 31 characters are significant.
- Identifiers should be written in such a way that it is meaningful, short, and easy to read.

Example: `total`, `sum`, `name`, `_define` etc

{% include util/highlight.html
    text="We will see other tokens in later sections." class="h5" %}
