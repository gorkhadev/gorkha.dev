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

# Variables in Ruby

A variable is a label that gives a name to a memory location, which holds any data to be used by the program.
The data can be of any data type. Examples include integer, true, false, string, array, hash, and others.

Suppose, you want to use some name, then in Ruby (as in many languages), you would use a variable to do that.

```ruby
name = "foo"
```

In the above code, a variable with name `name` is created to reference the value of the string `foo`.
During the program, the variable `name` will refer to `"foo"` string.

```ruby
# print name of some person
puts "Name of the person is #{name}"

# output: Name of the person is foo
```

You can see in the above code how the `name` variable is used.

{% include util/note.html
    note="The value stored in the variable can be changed anywhere in the program."
    type="important"
%}

##### We have following categories of variable depending on their use.

## Local Variable

A local variable name starts with a lowercase letter or underscore(`_`).
It is only accessible, or has its scope, within the block where it is assigned.
Once the code block completes, the variable has no scope, i.e., after that it is not accessible.

When using a bareword (such as a variable name) that does not exist as a variable, then, a method is looked up, and, if it exists, is called.

```ruby
def print_name
  name = "foo"        # name is local variable and only accessible in print_name
  puts name
end

print_name()
puts name             # calling variable name here will give an error
```

## Instance Variable

An instance variable begins with an `@` sign.
It belongs to one instance of the class and can be accessed from any method of that instance.
An unassigned instance variables references the value `nil`.

```ruby
class RubyStudent
  def initialize(id, name, addr)
    @student_id = id
    @student_name = name
    @student_addr = addr
  end

  def display_details
    puts "Student ID: #{@student_id}"
    puts "Student Name: #{@student_name}"
    puts "Student Address: #{@student_addr}"
  end
end

# Create Students
student1 = RubyStudent.new(1001, "Foo", "Some Address One")
student2 = RubyStudent.new(1002, "Bar", "Some Address Two")

student1.display_details
student2.display_details
```

The output from this program should look like:

```plain
Student ID: 1001
Student Name: Foo
Student Address: Some Address One
Student ID: 1002
Student Name: Bar
Student Address: Some Address Two
```

## Class variable

A class variable name starts with `@@` sign.
_They need to be assigned before use._
A class variable belongs to the class and can be accessible from anywhere inside the class.
If the value will be changed at one instance, it will be changed at every instance.

A class variable is shared by all the descendents of the class.
An uninitialized class variable will result in an error.

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
student1 = RubyStudent.new("Foo")
student2 = RubyStudent.new("Bar")
student3 = RubyStudent.new("Baz")

student1.total_students()
student2.total_students()
student3.total_students()

# Output
Total number of students: 3
Total number of students: 3
Total number of students: 3
```

## Global Variable

A global variable name starts with a `$` sign.
Its scope is global, which means it can be accessed from any where in a program.
An unassigned global variable will have a `nil` value.

{% include util/note.html
    note="It is advised not to use global variable as they make programs complex."
    type="important"
%}

```ruby
$global_guru = "Guru"

class RubyGuru
  def print_global
    puts "Global guru in the RubyGuru class is #{$global_guru}"
  end
end

class RubyStudent
  def print_global
    puts "Global guru in the RubyStudent class is #{$global_guru}"
  end
end

teacher = RubyGuru.new
teacher.print_global
student = RubyStudent.new
student.print_global
```

If we run the above program, it should look like this:

```plain
Global guru in the RubyGuru class is Guru
Global guru in the RubyStudent class is Guru
```

# Constants in Ruby

A constant has a name starting with an uppercase character.
It should be assigned a value at most once.

{% include util/note.html
    note="In Ruby, reassignment of a constant generates a warning but not an error."
    type="caution"
%}

Constants may be defined within classes, but unlike instance variables (and of course local variables), they are accessible outside the class.

```ruby
A_CONSTANT = 10
# output 10
A_CONSTANT = 20
# output
warning: already initialized constant A_CONSTANT
warning: previous definition of A_CONSTANT was here

puts A_CONSTANT
# output 20
```

So, in the above case, the value of constant `A_CONST` changes after second assignment with only warning.

## Key points

- Constants defined within a class or module may be accessed anywhere within the class or module.
- Outside the class or module, they may be accessed using the scope operator, `::` prefixed by an expression that returns the appropriate class or module.
- Constants defined outside any class or module may be accessed as it is or by using the scope operator with no prefix.
- Constants may not be defined in methods.
- Constants may be added to existing classes and modules from the outside by using the class or module name and the scope operator before the constant name.
- Constants may be public or private

The following program shows all aspect as mentioned in the __Key points__ section.

```ruby
OUTER_CONSTANT = 99

class Constant

  PRIVATE_CONSTANT = "I am a private constant"
  private_constant :PRIVATE_CONSTANT

  def get_constant
    CONSTANT
  end
  CONSTANT = OUTER_CONSTANT + 1

end

puts Constant.new.get_constant      # 100
puts Constant::CONSTANT             # 100
puts ::OUTER_CONSTANT               # 99
puts Constant::NEW_CONSTANT = 123   # 123
puts Constant::PRIVATE_CONSTANT     # Raises NameError exception
```

# Ruby Pseudo Variables

These are special types of variables but behave like _read only_ constants as we cannot assign any value to these variables.

Ruby has following Pseudo variables:

- `self`: The receiver object of the current method.
- `true`: Representing `true` value
- `false`: Representing `false` value
- `nil`: Representing nothing
- `__FILE__`: The name of the current Ruby program.
- `__LINE__`: The current line number in the Ruby program.
