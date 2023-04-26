---
layout: syllabus_page
course: ruby
title: Module in Ruby language
date: 29th Aug, 2020 22:00:00
parent: /ruby/section-two/
tags:
 - module
description: Module in Ruby language
permalink: /ruby/section-three/module/
prev_link: /ruby/section-three/class/
next_link: /ruby/section-three/file-handling/
comments: true
---

# Module in Ruby language

In Ruby, modules are similar to classes. They may hold a collection of constants, class variables, and methods.

Important points to remember:

- A Module can not be instantiated, i.e., it is not possible to create objects from a module.
- We cannot inherit modules nor can we create a subclass of module.
- Modules can be used as namespaces and as mixins.
- A module name must start with capital letter.
- Modules can be included into classes, which makes its methods available to the instances of those classes.

{% include util/note.html
    note="Module is also used to make code modular where common methods are kept in module and then these methods can be used by any class who require those methods. 
    It enables Ruby to take advantage of the <strong>DRY (Don't Repeat Yourself)</strong> principle."
%}

## Syntax

```ruby
module ModuleName
  #  constants
  CONSTANT1 = 'value1'
  CONSTANT2 = 'value2'
  # methods (will act as instance method when included by class)
  def method_1
    # ...
  end
  def method_2
    # ...
  end
  # module methods
  def self.method_1
    # ...
  end
  def self.method_2
    # ...
  end
end
```

## Example

```ruby
module Shape
  PI = 3.14

  def self.circle_area(radius)
    PI * radius**2
  end

  def self.square_area(side)
    side * side
  end
end

Shape.circle_area(5)  # output: 78.5
Shape.square_area(5)  # output: 25
```

## Including Module in Class

The common usage of module is to include it inside a class allowing to share common functionalities between classes.
This concept is also known as __mixin__.
It eliminates the need for multiple inheritance which we will see in later.

```ruby
module HelperMethods
  def display
    puts "Showing display of #{self.class}"
  end
end

class MyClass1
  include HelperMethods
end

class MyClass2
  include HelperMethods
end

puts "MyClass1 display: "
object1 = MyClass1.new
object1.display

puts "MyClass2 display: "
object2 = MyClass2.new
object2.display

# output
Showing display of MyClass1
Showing display of MyClass2
```

{% include util/note.html
    note="If the module is defined in another file, then it is required to include that file before embedding it in class using the `require` method."
%}

## Module as Namespace

A _namespace_ in programming is a way of grouping logically related entities together.
In Ruby, using a module is a convenient way to achieve it.
It allows us to avoid colliding with existing classes and modules, and other constants, that exist together.

Example:

```ruby
module Fruit
  class Array
    def show
      puts "Fruit's Array"
    end
  end
end

module Shape
  class Array
    def show
      puts "Shape's Array"
    end
  end
end

Fruit::Array.new.show
Shape::Array.new.show
```

Output:

```
Fruit's Array
Shape's Array
```
