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

In Ruby, modules are similar to classes however, they hold collection of methods, constants and class variables.

Important points to remember:

- Module can not be instantiated. i.e, it is not possible to create objects from a module.
- We cannot inherit modules or we can't create subclass of module.
- Modules are also used as namespaces and as mixins.
- Name of module must start with capital letter.
- Modules can be included into classes, and make its methods available on the class.

{% include util/note.html
    note="Module is also used to make code modular where common methods are kept in module and then these methods can be used by any class who require those methods. It encourages Ruby's <strong>DRY (Don't Repeat Yourself)</strong> principle."
%}

## Syntax

```ruby
module ModuleName
  #  constants
  CONST1 = value1
  CONST2 = value2
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
    PI * radius * radius
  end

  def self.square_area(side)
    side * side
  end
end

Shape.circle_area(5)  # output: 78.5
Shape.square_area(5)  # output: 25
```

## Including Module in Class

The another common usage of module is to include it inside class allowing to share common functionalities between classes.
This concept is also known as __Mixin__. It eliminates the need for multiple inheritance which we will see in later.

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
obj1 = MyClass1.new
obj1.display

puts "MyClass2 display: "
obj2 = MyClass2.new
obj2.display

# output
Showing display of MyClass1
Showing display of MyClass2
```

{% include util/note.html
    note="If module is defined in another file, then it is required to include that file before embedding it in class using 'module' keyword."
%}

## Module as Namespace

Namespace in programming is a way of grouping logically related entities together. In Ruby, module is the convenient way to achieve it. It also allows us to avoid with _conflicting names of classes or modules_ to exists together.

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

# output
Fruit's Array
Shape's Array
```
