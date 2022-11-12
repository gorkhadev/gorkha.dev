---
layout: syllabus_page
title: Getting Started with C language
date: 1st Sept, 2020 1:00:00
course: c
parent: /c/section-one/
tags:
  - getting-start
description: Getting Started with C language
permalink: /c/section-one/getting-started/
next_link: /c/section-one/history/
prev_link: /c/section-one/
---

# Getting Started with C language

In this page, we will learn to install C in Linux, macOS and Windows.

## Install C on Linux

Most of the Linux systems comes with GCC preinstalled. However, to verify if the compiler is installed on the machine, run the following command in the terminal (following shows the gcc version in Ubuntu 18.04):

```shell
$ gcc --version

# output
gcc (Ubuntu 7.4.0-1ubuntu1~18.04) 7.4.0
Copyright (C) 2017 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

However, in any case if you don't have then you can install it through following steps.

### Steps

The default Ubuntu repositories contain a meta-package named `build-essential` that contains the GCC compiler and a lot of libraries and other utilities required for compiling software.

- Start by updating the packages list:

  ```shell
  $ sudo apt update
  ```

- Install the `build-essential` package by typing following:

  ```shell
  # installs gcc, g++, make and other essential packages
  $ sudo apt install build-essential

  # manual pages for GNU/Linux for development
  $ sudo apt-get install manpages-dev
  ```

- Validate the GCC compiler:

  ```shell
  $ gcc --version
  ```

## Install C on macOS

To setup C in macOS, follow the given steps:

- Visit the given [Apple Developer Download page](https://developer.apple.com/downloads/index.action){:target="_blank"}. You will need an Apple developer ID.

- Search for `Command Line Tools for Xcode <some version>` and pick any version and download the `.dmg` file.

- After the file is being downloaded on the machine, double click and follow the wizard and install the file. Go with the default settings as suggested by the installation wizard.

- After the installation process, open a terminal and run `gcc -v` command or `clang -v`:

  ```shell
  Apple clang version 11.0.3 (clang-1103.0.32.62)
  Target: x86_64-apple-darwin19.5.0
  Thread model: posix
  InstalledDir: /Library/Developer/CommandLineTools/usr/bin
  ```

## Install C on Windows

The easy way to install C in Window is through Integrated Development Environment(IDE).

We will be using an open-source IDE named _Code::Blocks_ which bundles a compiler (named `gcc` offered by Free Software Foundation GNU), editor and debugger in a single package.

{% include util/note.html
    note="An integrated development environment (IDE) is user-friendly software for building applications that combines common developer tools with nice graphical user interface (GUI). It typically consists of source code editor, build tools, and debugger."
%}

### Steps

- Go to [Code Blocks Download page](http://www.codeblocks.org/downloads){:target="_blank"} and click `Download the binary release` link.
- Under `Windows XP/.../10`, look for the installer with GCC Compiler, e.g. `codeblocks-20.03mingw-setup.exe` which includes MinGW's GNU GCC compiler and GNU GDB debugger and click on `Sourceforge.net` link to initiate downloading of the binary.
- Run the downloaded installer and accept the default options.
