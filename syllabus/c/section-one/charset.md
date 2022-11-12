---
layout: syllabus_page
title: Character Set in C language
date: 2nd Sept, 2020 02:00:00
course: c
parent: /c/section-one/
tags:
 - charset
description: Character Set in C language
permalink: /c/section-one/charset/
prev_link: /c/section-one/history/
next_link: /c/section-one/tokens/
---

# Character Set in C language

Every language has its own set of the characters which are used to form a sentence to write a program/code, like how English has its set of characters like Alphabets, punctuation characters etc. We can only use the valid set of the characters defined by the programming language.

A C program is a set of statements. These statements are formed using words and these words are constructed using characters from C character set.

The characters in C are grouped into the following two categories:

## Source character set

There are four types of Source Character Set in C:

| #  | Type  |  Characters |
|:- |:- | :- |
| 1 | Letters | Upper and lower Alphabets (`A-Z, a-z`) |
| 2 | Digits | All Digits (`0-9`) |
| 3 | Special Characters | All Symbols: `, . : ; ? ' " ! | \ / ~ _$ % # & ^ * - + < > ( ) {  } [ ]` |
| 4 | White Spaces | Space, Tabs, Carriage return, New line, Form feed |

## Execution character set

Certain ASCII characters are unprintable as they are not displayed on the screen. These characters perform other functions aside from displaying text. Examples: backspacing, moving to a newline, or beep sound.

They are mostly used in output statements.

Execution characters set are always represented by a backslash (`\`) followed by a character.

__NOTE:__ Each one of character constants represents one character. However, they consist of two characters. These characters combinations are called as __Escape sequence__.

Few of popular escape sequence are:

| Escape Sequence | Results |
|:- |:- |
| `\0` | Null |
| `\b` | Backspace |
| `\t`  | Moves next to horizontal tab |
| `\n` | Moves to next line |
| `\v` | Moves next to vertical tab |
| `\f` | Moves initial position of next page |
| `\r` | Moves to the beginning of line |
| `\"` | Double quotes |
| `\'` | Apostrophe |
| `\?` | Question mark |
| `\\` | Backslash |
| `\x` | Hexadecimal number |
| `\000` | Octal number |
