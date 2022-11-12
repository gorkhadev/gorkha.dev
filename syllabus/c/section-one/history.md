---
layout: syllabus_page
title: History of C language
date: 31st August, 2020 02:00:00
course: c
parent: /c/section-one/
tags:
 - history
description: History of C language
permalink: /c/section-one/history/
prev_link: /c/section-one/getting-started/
next_link: /c/section-one/charset/
---

# History of C language

C programming language was developed in 1972 by Dennis Ritchie at AT & T Bell Labs in USA. It was originally developed to construct utilities running on Unix and later applied to re-implementing the kernel of the Unix operating system.

{% include util/quote-with-pic.html
    quote="The C programming language was devised in the early 1970s as a system implementation language for the nascent Unix operating system. Derived from the typeless language BCPL, it evolved a type structure; created on a tiny machine as a tool to improve a meager programming environment."
    quote_by="Dennis"
    pic="courses/c/dennis.jpg"
    pic_credit="Wikipedia"
    source="https://www.bell-labs.com/usr/dmr/www/chist.html"
%}

## Early developments

[Source](https://en.wikipedia.org/wiki/C_(programming_language)#History){:target="_blank" }

In 1972, Ritchie started to improve B language, which resulted in creating a new language C. The C compiler and some utilities made with it were included in Version 2 Unix.

At Version 4 Unix, released in November 1973, the Unix kernel was extensively re-implemented in C. By this time, the C language had acquired some powerful features such as `struct` types.

__NOTE:__ Unix was one of the first operating system kernels implemented in a language other than Assembly.

## K&R C

In 1978, Brian Kernighan and Dennis Ritchie published the first edition of book, _The C Programming Language_. This book served for many years as an informal specification of the language. The version of C that it describes is commonly referred to as __K&R C__. The second edition of the book covers the later ANSI C standard.

K&R introduced several language features:

- Standard I/O library
- `long int` data type
- `unsigned int` data type
- Compound assignment operator
- and others

## ANSI C and ISO C

During the late 1970s and 1980s, versions of C were implemented for a wide variety of mainframe computers, minicomputers, and microcomputers, including the IBM PC, as its popularity began to increase significantly.

In 1983, the American National Standards Institute (ANSI) formed a committee to establish a standard specification of C.
And, around 1989, the C standard was ratified as ANSI X3.159-1989 "Programming Language C". This version of the language is often referred to as __ANSI C__, __Standard C__, or sometimes __C89__.

In 1990, the ANSI C standard (with formatting changes) was adopted by the __International Organization for Standardization (ISO)__ as ISO/IEC 9899:1990, which is sometimes called __C90__.

## C99

The C standard was further revised in the late 1990s, leading to the publication of ISO/IEC 9899:1999 in 1999, which is commonly referred to as __C99__.

__C99__ introduced several new features, including `inline functions`, several new data types (including `long long int` and a `complex` type to represent complex numbers), `variable-length arrays` and `flexible array members`, improved support for IEEE 754 floating point, support for variadic macros and support for one-line comments beginning with `//`.

## C11

In 2007, work began on another revision of the C standard. The __C11__ standard adds numerous new features to C and the library, including type generic macros, anonymous structures, improved Unicode support, atomic operations, multi-threading, and bounds-checked functions. It also makes some portions of the existing C99 library optional, and improves compatibility with C++.

## C18

__C18__ is the current standard for the C programming language published in June 2018. It introduces no new language features, only technical corrections, and clarifications to defects in __C11__.

## C2x

__C2x__ is an informal name for the next (after C18) major C language standard revision. It is not expected to be voted on until 2021.

## Ancestors overview

| Language  | Year  |  Developed By |
|:- |:- | :- |
| Algol | 1960 | International Group |
| BCPL | 1967 | Martin Richard |
| B | 1970 | Ken Thompson |
| Traditional C | 1972 | Dennis Ritchie |
| K&R C | 1978 | Kernighan & Dennis Ritchie |
| ANSI C | 1989 | ANSI Committee |
| ANSI/ISO C | 1990 | ISO Committee |
| C99 | 1999 | Standardization Committee |
| C11 | 2011 | Standardization Committee |
| C18 | 2018 | Standardization Committee |
