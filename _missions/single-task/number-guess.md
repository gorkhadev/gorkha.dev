---
layout: single-task-mission
mission: true
mission_type: single-task
title: Number Guessing game in Ruby
date: 20th Sept, 2020 02:00:00
duration: 2 Hrs
author: Dhanu
tags:
 - ruby
 - beginner
description: Number Guessing game in Ruby
permalink: /missions/number-guess-ruby/
thumbnail: missions/single-task/number-guess-ruby-thumb.jpg
external: true
comments: true
---

In this tutorial, we are building a simple number guessing game where computer will choose any random number between 1 to 100.

Then, we need to ask user to guess the correct number.
Maximum allowed guessing is 10.

If the user failed to enter the correct number then display the hints as following:

- _"Your guess was low, enter a higher number."_ when guessed number is less than correct number.
- _"Your guess was high, enter a lower number."_ when guessed number is greater than correct number.

## Demo

{% include asciinema.html id="361520" %}

## Prerequisites

- Enthusiasm and passion to Learn
- Basic knowledge of Ruby language
  - Variables
  - Loop
  - Conditional Operators
  - Getting input from User

## Solution Steps

{% include util/note.html
    note="The solution I described here is one of the simplest solutions.
          I recommend to first try to write a program which is functional and then think of optimization or style improvement later."
%}

Follow the steps below to build the **Number Guessing** game in Ruby.

- Before even asking user, let's generate a random number `random_number`.

  ```ruby
  random_number = rand(100)
  ```

- Let's create a variable to track number of guess a user can make.

  ```ruby
  number_of_guesses = 0
  ```

- Let's ask user his or her name.

  ```ruby
  print("Hey, may I know your first name? ")
  # puts will add new line so print should be used
  name = gets.chomp          # remove the extra new line character
  name = name.capitalize()   # make the first letter capital
  ```

- Until the number of guess is less than maximum allowed guess i.e `10`, repeat guessing number,
  compare it with actual number and print the hint accordingly. If you found guess number is equal
  to actual number then break out of loop.

  ```ruby
  while number_of_guesses < 10
    print("\nGuess a number from 1 to 100: ")
    guess_number = gets.to_i
    # gets return as string, hence we need to convert to integer

    number_of_guesses = number_of_guesses + 1
    # you can write above as number_of_guesses += 1
    guesses_left = (10 - number_of_guesses)

    if guess_number < random_number
      puts("#{name}, your guess was low, enter a higher number. You have #{guesses_left} guesses left.")
    elsif guess_number > random_number
      puts("#{name}, your guess was high, enter a lower number. You have #{guesses_left} guesses left.")
    end

    break if guess_number == random_number
  end
  ```

- Now, print the final message and number of guess taken.

  ```ruby
  if guess_number == random_number
    puts("Good job, #{name}! You guessed the number in #{number_of_guesses} tries.")
  else
    puts("#{name}, you failed to guess correctly. Actual number is #{random_number}.")
  end
  ```

## Solution

```ruby
# number_guess.rb
random_number = rand(100)  # generate a random number
number_of_guesses = 0  # store number of guesses

print("Hey, may I know your first name? ")
name = gets.chomp          # remove the extra new line character
name = name.capitalize()   # make the first letter capital

while number_of_guesses < 10
  print("\nGuess a number from 1 to 100: ")
  guess_number = gets.to_i
  # gets return as string datatype, hence we need to convert to integer

  number_of_guesses = number_of_guesses + 1
  # you can write above as number_of_guesses += 1
  guesses_left = (10 - number_of_guesses)

  if guess_number < random_number
    puts("#{name}, your guess was low, enter a higher number. You have #{guesses_left} guesses left.")
  elsif guess_number > random_number
    puts("#{name}, your guess was high, enter a lower number. You have #{guesses_left} guesses left.")
  end

  break if guess_number == random_number
end

if guess_number == random_number
  puts("Good job, #{name}! You guessed the number in #{number_of_guesses} tries.")
else
  puts("#{name}, you failed to guess correctly. Actual number is #{random_number}.")
end
```

## Possible optimizations

Following are the possible optimization which you can do by yourself:

- You can create a class `NumberGuess` and then write a `play` method to make the solution _Object Oriented_.
- There are repeated text in messages like "your guess was high" or "your guess was high", etc. …
