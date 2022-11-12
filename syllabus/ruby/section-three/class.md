---
layout: syllabus_page
course: ruby
title: Class in Ruby language
date: 29th Aug, 2020 22:00:00
parent: /ruby/section-two/
tags:
 - class
description: Class in Ruby language
permalink: /ruby/section-three/class/
prev_link: /ruby/section-three/hash/
next_link: /ruby/section-three/module/
comments: true
---

# Class in Ruby language

A class is a blueprint from which objects are created in programming language. It means every object is an instance of a class, and a class defines the state(variables) and behaviors(methods) of an object.

- An object is an entity with state and behavior, as defined by its class.
- Classes in Ruby are first-class objects i.e each is an instance of class `Class`.

We can create the class using following syntax:

```ruby
class Name

  def initialize(args)
    # code
  end

  # code
end

# object
obj = Name.new(args)
```

When a new class is created, an object of type `Class` is initialized and assigned to a
global constant (`Name` in above example).

When `Name.new` is called to create a new object, then internally Ruby invokes `initialize` method passing the
arguments (`args` here) to it. `initialize` behaves like a constructor in Ruby and is commonly used
to initialize the instance variables and other instance level instantiation.

## Variables in a Ruby Class

There are four types of variables available in Class context:

### Local Variables

These variables are defined within a method and are not available outside the method.

The name begin with a lowercase letter or `_`.

### Instance Variables

These variables are available across methods for any particular instance or object. Each object has their own set of local variables and change from object to object.

The name begins with `@` sign followed by the variable name.

### Class Variables

These variables are available across all objects of that class and all object has access to it.
The changes made by one object will be visible by another object.

The name of these variables begin with sign `@@` and are followed by the variable name.

### Global Variables

These variables are available across classes unlike class variable which is accessible across all objects of that particular class.

The name of global variables begin by the dollar sign (`$`).

## Example

The following examples show different kind of variables.

```ruby
$no_of_students_in_school = 100

class RubyStudent
  @@no_of_students = 0

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name

    @@no_of_students += 1
  end

  def display_full_name
    full_name = @first_name + " " + @last_name
    puts "Name: #{full_name}"
  end
end
```

In the above example, we have following different type of variables:

- `$no_of_students_in_school`: Global variable
- `@@no_of_students`: Class variable and used to update number of total students of `RubyStudent`
- `@first_name`: Instance variable and used for storing first name of student
- `full_name`: Local variable used for within the method to perform some operation

## Access Control

It is a way of protecting the behaviors(or methods) defined in a class from being called by other objects not in the same class, or inherited from the same class.

To limit a method's accessibility, Ruby uses following keywords

### Default behavior

By default, all the methods we define will be public unless you specify any keyword.

These methods describes the external behavior of the object and called with the object as the explicit receiver
(calling with `receiver.method` format).

See [Example](#example-1) below.

### private

These methods are defined under the `private` keyword. These methods can only be used within the class definition; they’re for internal usage.

The only way to have external access to a private method is to call it within a public method.

The private methods can not be called with an explicit receiver, the receiver is always implicitly `self`.

See [Example](#example-1) below.

### protected

These methods are similar to private methods but it can be called with, or without, an explicit receiver.
Also, the receiver is always self i.e it's defining class or an object that inherits from self.

See [Example](#example-1) below.

## Example

The following example should help you understand all the above concepts.

We will update the previous example with additional methods.

```ruby
$no_of_students_in_school = 1000

class Student
  @@no_of_students = 0

  def total_students()
    puts "Total number of students: #{@@no_of_students}"
  end

  protected

  def display_full_name
    full_name = @first_name + " " + @last_name
    puts "Name: #{full_name}"
  end

end

class RubyStudent < Student # Inherit from another class
  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name

    update_ruby_students
  end

  def full_name
    display_full_name
  end

  private

  def update_ruby_students
    @@no_of_students += 1
  end
end

# Create Students
stud1 = RubyStudent.new("Foo", "Student")
# stud1.display_full_name  # will throw an error 'NoMethodError'
stud1.full_name
stud1.total_students()

stud2 = RubyStudent.new("Bar", "Student")
stud2.full_name
stud2.total_students()

stud3 = RubyStudent.new("Baz", "Student")
stud3.full_name
stud3.total_students()

puts "Total students in School: #{$no_of_students_in_school}"

# output
Name: Foo Student
Total number of students: 1
Name: Bar Student
Total number of students: 2
Name: Baz Student
Total number of students: 3
Total students in School: 1000
```
