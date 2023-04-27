---
layout: syllabus_page
course: ruby
title: Class in Ruby Language
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

A class is a blueprint from which objects are created in programming language.
It means every object is an instance of a class, and a class defines the state (variables) and behaviors (methods) of an object.

- An object is an entity with state and behavior, as defined by its class.
- Classes in Ruby are first-class objects, i.e., each is an instance of class `Class`.

We can create a class using following syntax:

```ruby
class Name

  def initialize(argument)
    # code
  end

  # code
end

# object
object = Name.new(argument)
```

When a new class is created, an object of type `Class` is initialized and assigned to a constant (`Name` in above example).

When `Name.new` is called to create a new object, the `new` method invokes the private `initialize` method passing any arguments to it.
The method `new` on that class is the constructor.
It calls `initialize`, and is used to initialize its state.
We can use it to initialize the data (state) that is needed for the instance being created.

## Variables in a Ruby Class

There are four types of variables available in the context of Class:

### Local Variables

When local variables are defined they have a "local" scope.
They are often defined inside of a method, and so, will not be accessible outside the body of that method, due to its local scope.

A local variable's name begins with a lowercase letter or `_`.

### Instance Variables

Instance variables are available across methods for all instances of its class.
Each object, having access to the same instance variables, will likely have different values assigned to them, independently of other objects.

Instance variable names begins with a single `@` sign followed by the variable name.

### Class Variables

Class variables are available across all objects of that class and all objects have access to them.
The changes to a class variable will be the same for all instances of that class.

The name of class variables begin with `@@` and are followed by the variable name.

### Global Variables

These variables are available across classes, and, unlike class variables, are accessible across all objects of all classes.

The name of global variables begin with a dollar sign (`$`).

## Example

The following examples show different kind of variables.

```ruby
$number_of_students_in_school = 100

class RubyStudent
  @@number_of_students = 0

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name

    @@number_of_students += 1
  end

  def display_full_name
    full_name = @first_name + " " + @last_name
    puts "Name: #{full_name}"
  end
end
```

In the above example, we have the following types of variables:

| Variable Name | Variable Scope |
| ---:|:---|
| `$number_of_students_in_school`| Global variable |
| `@@number_of_students`| Class variable and used to update number of total students of `RubyStudent` |
| `@first_name`| Instance variable and used for storing first name of student
| `full_name`| Local variable used for within the method to perform some operation |

## Access Control

It is a way of protecting the behaviors (or methods) defined in a class from being called by other objects not in the same class, or inherited from the same class.

To set a method's visibility/accessibility, Ruby uses following the following keywords: `public`, `protected`, `private`.

### Default behavior

By default, all the methods we define will be public unless you specify `private` or `protected`.
(The exception to this will be `initialize` which is `private` by default.)

Public methods describe the external behavior of the object and are called with the object as the explicit receiver (calling with `receiver.method` format).

See [Example](#example-1) below.

### private

Private methods are defined under the `private` keyword.
These methods are inteded to be used within the instance of the class; they are for internal usage.

The way to access a private method is to call it within a method of the same class the private method is defined on.

The private methods can not be called with an explicit receiver, unless the explicit receiver is `self`, otherwise, the receiver is always implicitly `self`.

Note: You can see the [back story](https://bugs.ruby-lang.org/issues/11297) here, with examples.

See [Example](#example-1) below.

### protected

These methods are similar to private methods but it can be called with, or without, an explicit receiver.
As expected, the implicit receiver is `self` i.e., its' defining class or an object that inherits from `self`.

See [Example](#example-1) below.

## Example

The following example should help with understanding the above concepts.

We will update the previous example with additional methods.

```ruby
$number_of_students_in_school = 1000

class Student
  @@number_of_students = 0

  def total_students()
    puts "Total number of students: #{@@number_of_students}"
  end

  protected

  def display_full_name
    full_name = "#{@first_name} #{@last_name}"
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
    @@number_of_students += 1
  end
end

# Create Students
student1 = RubyStudent.new("Foo", "Student")
# student1.display_full_name  # will throw an error 'NoMethodError'
student1.full_name
student1.total_students

student2 = RubyStudent.new("Bar", "Student")
student2.full_name
student2.total_students

student3 = RubyStudent.new("Baz", "Student")
student3.full_name
student3.total_students

puts "Total students in School: #{$number_of_students_in_school}"
```

Output:

```ruby
Name: Foo Student
Total number of students: 1
Name: Bar Student
Total number of students: 2
Name: Baz Student
Total number of students: 3
Total students in School: 1000
```
