---
layout: syllabus_page
title: Variables and Constants in Ruby language
date: 25th April, 2020 1:00:00
course: ruby
parent: /ruby/section-two/
tags:
  - variables
description: Variables and Constants in Ruby language
permalink: /ruby/section-two/variables-constants/
prev_link: /ruby/section-two/data-types/
next_link: /ruby/section-two/operators/
comments: true
---

# Variable in Ruby language

Variable is a label to give name to the memory location, which hold any data to be used by the program.
The data can be of any data type including integer, boolean, string, array, hash or else.

Suppose, you want to use some name, then in Ruby(or in any language), you have to use variable to do that.

```ruby
name = "foo"
```

In above code, variable with name `name` is created to identify the value of some name `foo`.
During the program, variable `name` will refer to `foo` data.

```ruby
# print name of some person
puts "Name of the person is #{name}"

# output: Name of the person is foo
```

You can see in above code how `name` variable is used.

{% include util/note.html
    note="The value stored in the variable can be changed anywhere in the program."
    type="important"
%}

##### We have following categories of variable depending on their use.

## Local Variable

A local variable name starts with a lowercase letter or underscore(`_`). It is only accessible or
have its scope within the block where it is initialized. Once the code block completes, the variable
has no scope i.e after that it is not accessible.

When uninitialized local variables are called, they are interpreted as call to a method that has no arguments.

```ruby
def print_name
  name = "foo"        # name is local variable and only accessible in print_name
  puts name
end

print_name()
# puts name           # calling variable name here will give an error
```

## Instance Variable

An instance variable begins with `@` sign. It belongs to one instance of the class and can be accessed
from any methods of that instance. Uninitialized instance variables have the value `nil`.

```ruby
class RubyStudent
  def initialize(id, name, addr)
    @student_id = id
    @student_name = name
    @student_addr = addr
  end

  def display_details()
    puts "Student ID: #{@student_id}"
    puts "Student Name: #{@student_name}"
    puts "Student Address: #{@student_addr}"
  end
end

# Create Students
stud1 = RubyStudent.new(1001, "Foo", "Some Address One")
stud2 = RubyStudent.new(1002, "Bar", "Some Address Two")

stud1.display_details()
stud2.display_details()

# Output
Student ID: 1001
Student Name: Foo
Student Address: Some Address One
Student ID: 1002
Student Name: Bar
Student Address: Some Address Two
```

## Class variable

A class variable name starts with `@@` sign. _They need to be initialized before use._ A class variable belongs
to the whole class and can be accessible from anywhere inside the class. If the value will be changed at one
instance, it will be changed at every instance.

A class variable is shared by all the descendents of the class. An uninitialized class variable will result in
an error.

```ruby
class RubyStudent
  @@no_of_students = 0

  def initialize(name)
    @student_name = name
    @@no_of_students += 1
  end

  # some other codes

  def total_students()
    puts "Total number of students: #{@@no_of_students}"
  end
end

# Create Students
stud1 = RubyStudent.new("Foo")
stud2 = RubyStudent.new("Bar")
stud3 = RubyStudent.new("Baz")

stud1.total_students()
stud2.total_students()
stud3.total_students()

# Output
Total number of students: 3
Total number of students: 3
Total number of students: 3
```

## Global Variable

A global variable name starts with a `$` sign. Its scope is globally, means it can be accessed from any where
in a program. An uninitialized global variable will have a `nil` value.

{% include util/note.html
    note="It is advised not to use global variable as they make programs complex."
    type="important"
%}

```ruby
$global_guru = "Guru"

class RubyGuru
  def print_global
    puts "Global guru in RubyGuru class is #{$global_guru}"
  end
end

class RubyStudent
  def print_global
    puts "Global guru in RubyStudent class is #{$global_guru}"
  end
end

teacher = RubyGuru.new
teacher.print_global
student = RubyStudent.new
student.print_global

# Output
Global guru in RubyGuru class is Guru
Global guru in RubyStudent class is Guru
```

# Constant in Ruby

A constant has a name starting with an uppercase character. It should be assigned a value at most once.

{% include util/note.html
    note="In Ruby, reassignment of a constant generates a warning but not an error."
    type="caution"
%}

Constants may be defined within classes, but unlike instance variables, they are accessible outside the class.

```ruby
A_CONST = 10
# output 10
A_CONST = 20
# output
warning: already initialized constant A_CONST
warning: previous definition of A_CONST was here

puts A_CONST
# output 20
```

So, in above case, the value of constant `A_CONST` changes after second assignment with only warning.

## Key points

- Constants defined within a class or module may be accessed anywhere within the class or module.
- Outside the class or module, they may be accessed using the scope operator, `::` prefixed by an expression
  that returns the appropriate class or module.
- Constants defined outside any class or module may be accessed as it is or by using the scope operator with no
  prefix.
- Constants may not be defined in methods.
- Constants may be added to existing classes and modules from the outside by using the class or module name and
  the scope operator before the constant name.

Following program shows all aspect as mentioned in the __Key points__ section.

```ruby
OUTER_CONST = 99

class Const
  def get_const
    CONST
  end
  CONST = OUTER_CONST + 1
end

puts Const.new.get_const      # 100
puts Const::CONST             # 100
puts ::OUTER_CONST            # 99
puts Const::NEW_CONST = 123   # 123
```

# Ruby Pseudo Variables

These are special type of variables but behave like constants as we cannot assign any value to these variables.

Ruby has following Pseudo variables:

- `self`: The receiver object of the current method.
- `true`: Representing `true` value
- `false`: Representing `false` value
- `nil`: Representing nothing
- `__FILE__`: The name of the current Ruby program.
- `__LINE__`: The current line number in the Ruby program.
