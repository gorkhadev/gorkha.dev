---
layout: devtool
title: Git
date: 2020-05-13
page_name: devtools
permalink: /devtools/git/
---

Git is an __open source distributed version control system__ created in 2005 by Linus Torvalds and others from the Linux
development community. Git can work with many types of projects, but it’s most commonly used for software source code.

This page will help you to get start with Git and guide you on how to use in your project.

{% include util/note.html
    note="The content in this page is very basic. It only give you an idea of what Git is and how one can use it in project."
%}

### Version Control

Version control is a system that keeps track of changes to a file or group of files over time. When you have a history
of these changes, it lets you find specific versions later, compare changes between versions, recover files you may have
deleted, or revert files to previous versions.

It helps developer to find out:

- Which changes were made?
- Who made the changes?
- When were the changes made?
- Why were changes needed?

### Distributed Version Control

A distributed system means that different users maintain their own repositories of a project, instead of working
from one central repository. Users automatically have full file tracking abilities and the project’s complete
version history without needing access to a central server or network.

__NOTE:__ There is another variety of version control system, _Centralized Version Control_.
[Check this blog](https://medium.com/faun/centralized-vs-distributed-version-control-systems-a135091299f0){:target="_blank"} to read the basic difference between both.

## Install Git

Every operating system has its own way of installing softwares. The recommended way is to install via system's package
manager.

### Install Git on Linux

Following is the way to install Git on Ubuntu 18:

```shell
sudo apt-get install git
```

Check the instructions to install Git on other Linux version [here](https://git-scm.com/download/linux){:target="_blank"}.

### Install Git on Windows

The easiest way to install Git on Windows is through its official download page. Click [here](https://git-scm.com/download/win){:target="_blank"} to start downloading Git installer binary. Post download, run the binary to install it.

### Installing on macOS

The recommended way to install Git on macOS is through its popular package manager `homebrew`:

```shell
$ brew install git
```

## Git Version

After installing the Git, check the version in your terminal to verify successful installation:

```shell
$ git --version
git version 2.23.0 # your version may vary
```

## Git Configure

These are few basic settings one must do after installing Git.

- Add Your Name and Email

  Git includes the user name and email as part of the information in a commit.
  Store these information at your user-level configuration file with these commands:

  ```shell
  git config --global user.name "Your Name"
  git config --global user.email "youremail@example.com"
  ```

- Change Text Editor

  Git automatically uses your default text editor, but it is recommended to change to your
  favorite editor. Following command will set `vim` as the text editor.

  ```shell
  git config --global core.editor "vim"
  ```

## Git Workflow

Git is mostly used in combination of some popular web based project hosting services like
_GitHub_, _Bitbucket_ etc.

In this section, you will experience how to use Git locally for any project.

The following scenario describes how to use Git with newly created project.

__NOTE:__ Following demo is created in `macOS` and should work with other Operating Systems as well.

{% include util/note.html
    note="Following demo is the most basic working scenario in Git."
    type="important"
%}

### Git Initialize

```shell
$ mkdir project   # create project directory

$ cd project      # go inside project directory

$ git init        # initialize git
Initialized empty Git repository in ~/project/.git/

$ ls -la          # show files including hidden ones
total 0
drwxr-xr-x  3 coolbrg  staff   96 May  8 15:14 .
drwxr-xr-x  5 coolbrg  staff  160 May  8 15:14 ..
drwxr-xr-x  9 coolbrg  staff  288 May  8 15:14 .git  # git directory

$ git status    # check the current status
On branch master
No commits yet
nothing to commit (create/copy files and use "git add" to track)
```

### Add a file

- Create a file name `intro.txt`. You can create that file in any editor.
  I have used simple `cat` command to create it quickly.

  ```shell
  $ cat > intro.txt   # creating intro.txt with some content
  My name is BRG.
  My age is 20.
  I study in Computer Science.
  ```

- Now check the status

  ```shell
  $ git status
  On branch master
  No commits yet
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
    intro.txt

  nothing added to commit but untracked files present (use "git add" to track)
  ```

  You can clearly see that `intro.txt` is shown as __Untracked files__. It means that
  this file has been newly created and Git doesn't know about it. Now, we need to tell Git to
  start tracking it. For that, we need to add it into Git's index.

- Add the file to Git Index

  ```shell
  $ git add intro.txt   # intro.txt is added into index

  $ git status    # check status
  On branch master
  No commits yet

  Changes to be committed:        <------- message says different than earlier
    (use "git rm --cached <file>..." to unstage)
	  new file:   intro.txt
  ```

  At this point, the file has been added and now we need to do __commit__ to mark that whatever changes we had done
  so far is the final one for now.

- Commit to mark all changes done

  We need to commit the changes with some meaningful name so that in future we can able to
  properly see what changes we had done at this point.

  ```shell
  $ git commit -m "Added first file with introduction"
  [master (root-commit) 5ddd2fe] Added first file with introduction
  1 file changed, 3 insertions(+)       <-------- important detail
  create mode 100644 intro.txt

  $ git status
  On branch master
  nothing to commit, working tree clean
  ```

### Edit a file

Now, suppose after few days, we come to know that the introduction in the
file miss something very important like _address_ and also need to add _which year in Computer Science_.

I updated the file with necessary details like address and the year I study. Now, my intro looks different
and git status shows that file has been modified:

```shell
$ cat intro.txt
My name is BRG.
My age is 20.
I study in First Year Computer Science.
My address is Kathmandu, Nepal.

$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   intro.txt         <-------- see here

no changes added to commit (use "git add" and/or "git commit -a")
```

### Check modified content

This is the powerful feature of Git which allows us to see which lines has been
modified and what new lines have been added.

```shell
$ git diff intro.txt

diff --git a/intro.txt b/intro.txt
index b2a08a7..d320e70 100644
--- a/intro.txt
+++ b/intro.txt
@@ -1,3 +1,4 @@
 My name is BRG.
 My age is 20.
-I study in Computer Science.
+I study in First Year Computer Science.
+My address is Kathmandu, Nepal.
```

On clearly noticing above, you can see one line with minus sign(`-`) and two lines
with plus sign(`+`).

The minus sign indicates that you have deleted the line while the plus sign indicates that you have added new lines.

### Git add file again

Now, since the file has been modified, we need to tell Git again to start tracking modified
file. Perform following to start tracking modified file:

```shell
$ git add intro.txt
```

### Gif commit with new message

Now, we need to commit the changes with meaningful name so that in near future we can come
to know about this change by searching with commit message

```shell
$ git commit -m "Updated introduction with address and year"
[master e650f47] Updated introduction with address and year
 1 file changed, 2 insertions(+), 1 deletion(-)
```

__NOTE:__ 2 insertions that is we added two lines and 1 deletion means we deleted one old line.

## Git log

Git log shows the list of all the commit messages.

```shell
$ git log
commit e650f475d113168b026d7c3301aaec923ea1431f (HEAD -> master)
Author: Cool BRG <budhram.gurung01@gmail.com>
Date:   Fri May 8 16:02:45 2020 +0530

    Updated introduction with address and year

commit 3d6efcca92b7194695889813e5f0cec14167a396
Author: Cool BRG <budhram.gurung01@gmail.com>
Date:   Fri May 8 15:39:03 2020 +0530

    Added first file with introduction
```

You can see that it shows both of our commit messages with details like
author's name and email, date at which particular changes were done and one commit
ID i.e `3d6efcca92b7194695889813e5f0cec14167a396`.

## See particular commit changes

Now, if I want to see what changes I had done for the message `Added first file with introduction` then
I just need to copy it's commit ID i.e `3d6efcca92b7194695889813e5f0cec14167a396` and perform
following command:

```shell
$ git show 3d6efcca92b7194695889813e5f0cec14167a396

commit 3d6efcca92b7194695889813e5f0cec14167a396
Author: Cool BRG <budhram.gurung01@gmail.com>
Date:   Fri May 8 15:39:03 2020 +0530

    Added first file with introduction

diff --git a/intro.txt b/intro.txt
new file mode 100644
index 0000000..b2a08a7
--- /dev/null
+++ b/intro.txt
@@ -0,0 +1,3 @@
+My name is BRG.
+My age is 20.
+I study in Computer Science.
```

You can see details like author and date as well as the file content I have added
i.e lines beginning with plus signs(`+`).


## Congratulations! You completed the basic local workflow in Git.

We will see more advanced use-cases like working in Open Source project in another section.

### Useful Reference Links

- [Git Tutorial by freecodecamp.org](https://www.freecodecamp.org/news/best-git-tutorial/){:target="_blank"}
- [Git Handbook by GitHub Guides](https://guides.github.com/introduction/git-handbook/){:target="_blank"}
