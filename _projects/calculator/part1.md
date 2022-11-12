---
layout: tutorial_series
learning_type: projects
tutorial_name: calculator
title: Calculator - build a simple one
date: 16th Oct, 2020 02:00:00
tags:
 - html
 - css
 - javascript
 - beginner
description: Calculator - build a simple one
permalink: /projects/calculator/part1/
prev_link: /projects/calculator/
next_link: /projects/calculator/part2/
thumbnail: projects/calculator/4.gif
comments: true
---

In this tutorial, we are going to see how to build a simple calculator in HTML, CSS and JavaScript from scratch.

## Demo

{% include util/codepen.html
    author="coolbrg"
    name="Cool BRG"
    id="yLJOLeP"
    title="Simple Calculator HTML/CSS/JS"
%}

__NOTE:__ Click on `c` to clear the display.

{% include util/note.html
    note="Although demo is in Codepen, the tutorial encourages you to write code in an editor and open the web page or result in browser." type="important"
%}

## Prerequisites

- Enthusiasm and passion to Learn
- Basic HTML knowledge. Following tags are used in this tutorial:
  - `h1` tag
  - `table`, `td`, `tr` tags
  - `input` tag
- Basic CSS knowledge. Following concepts are used in this tutorial:
  - class based css
  - tag based css

The W3school introductory tutorial on [HTML](https://www.w3schools.com/html/default.asp){:target="_blank"} and
[CSS](https://www.w3schools.com/css/default.asp){:target="_blank"} should help you with getting the basic knowledge of them.

## Solution Steps

{% include util/note.html
    note="The UI design and implementation here is one of the simplest approach. One can design of any type like colorful calculator, more operations etc which I leave up to you."
%}

Follow the steps below to build the simple calculator.

### Setup

Let's first create the necessary files for this tutorial.

```shell
$ mkdir html_css_js       # Create a common folder for all HTML, CSS, JS programs
$ cd html_css_js          # Enter into the folder
$ mkdir simple_calculator # Folder to store our calculator files
$ cd simple_calculator    # Enter into the folder
$ code .                  # Open the current directory in VS Code
```

__NOTE:__ In Windows OS, you can open command prompt or powershell and perform commands to achieve similar operations.

Now, under `EXPLORER` and `simple_calculator` menu, click on file icon to create following files:

- Create `index.html` file with following content:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Calculator</title>
      <!-- CSS -->
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <!-- Title -->
      <h1>Simple Calculator</h1>

      <!-- Calculator -->
      <table>
      </table>

      <!-- JavaScript -->
      <script src="javascript.js"></script>
    </body>
  </html>
  ```

  This will define the structure of our calculator app.

- Create `style.css` file to store CSS code with empty content.
- Create `javascript.js` file to store JavaScript code with empty content.

### Add calculator UI

We will now build the UI of calculator and `table` tag is best for building it as shown in below.

| row | box 1 | box 2 | box 3 | operator |
| :-: | :-: | :-: | :-: |
| row 1 | space | space | space | `C` |
| row 2 | `1` | `2` | `3` | `/` |
| row 3 | `4` | `5` | `6` | `-` |
| row 4 | `7` | `8` | `9` | `+` |
| row 5 | `.` | `0` | `=` | `*` |

### First row

Now, since we got the basic idea of UI for building calculator let's build our first row.
Add the following code for `table` tag:

```html
<table>
  <!-- first row to have result display and clear result  -->
  <tr>
    <td colspan="3"><input type="text" id="result" /></td>
    <!-- clearResult() function will clear result textbox -->
    <td><input type="button" value="c" onclick="clearResult()" /></td>
  </tr>

  <!-- 2nd, 3rd and 4th rows -->
</table>
```

In the above code:

- `colspan=3` is spanning the table column upto three column and hence we will get nice input textbox to collect input.
- The input text box is given `id` as `result` so that we can manipulate it later through javascript.
- `<input type="button" value="c" onclick="clearResult()" />` call the function `clearResult()` which we will define
  in `javascript.js` file later.

Now, if you open the `index.html` file in browser, you should see the first row of calculator as below:

{% include util/lazy-img.html src="projects/calculator/1.jpg" %}

### 2nd, 3rd and 4th rows: Numeric buttons

The cell value in 2nd, 3rd and 4th rows are almost identical with just one change. The format for button is:

```html
<input type="button" value="value-to-be-displayed" onclick="displayValue('value-to-be-displayed')" />
```

__NOTE:__ The `displayValue()` function is called when the button with specified value is clicked.

The code for 2nd row is given below and 3rd and 4th row I would leave for you to do it. Copy following code
below the comment `<!-- 2nd, 3rd and 4th rows -->` from the code we left above.

```html
<tr>
  <td><input type="button" value="1" onclick="displayValue('1')" /> </td>
  <td><input type="button" value="2" onclick="displayValue('2')" /> </td>
  <td><input type="button" value="3" onclick="displayValue('3')" /> </td>
  <td><input type="button" value="/" onclick="displayValue('/')" /> </td>
</tr>
```

The 3rd and 4th row is identical as above with just change in `value` and `displayValue()` content.

### Last row

The last row consist of special button which is equal to operator (`=`).

When user click on this button, we need to take the value of the text box and evaluate the content and display its result back to the text box.

Let's add the code for the last row:

```html
<tr>
  <td><input type="button" value="." onclick="displayValue('.')" /> </td>
  <td><input type="button" value="0" onclick="displayValue('0')" /> </td>

  <!-- solve() will evaluate value and display to result -->
  <td><input type="button" value="=" onclick="solve()" /> </td>

  <td><input type="button" value="*" onclick="displayValue('*')" /> </td>
</tr>
```

__NOTE:__ Check the button with value as `=` and `solve()` as `onclick` value. We will define the `solve()` in the later step.

### Full calculator UI

Till this time, we are ready with full calculator UI.

```html
<h1>Simple Calculator</h1>

<!-- Table to show calculator -->
<table class="center">
  <!-- first row to have result display and clear result  -->
  <tr>
    <td colspan="3"><input type="text" id="result" /></td>
    <!-- clearResult() function will clear result textbox -->
    <td><input type="button" value="c" onclick="clearResult()" /></td>
  </tr>

  <!-- 2nd, 3rd and 4th rows -->
  <tr>
    <!-- displayValue("1") will be called -->
    <td><input type="button" value="1" onclick="displayValue('1')" /> </td>
    <td><input type="button" value="2" onclick="displayValue('2')" /> </td>
    <td><input type="button" value="3" onclick="displayValue('3')" /> </td>
    <td><input type="button" value="/" onclick="displayValue('/')" /> </td>
  </tr>
  <tr>
    <td><input type="button" value="4" onclick="displayValue('4')" /> </td>
    <td><input type="button" value="5" onclick="displayValue('5')" /> </td>
    <td><input type="button" value="6" onclick="displayValue('6')" /> </td>
    <td><input type="button" value="-" onclick="displayValue('-')" /> </td>
  </tr>
  <tr>
    <td><input type="button" value="7" onclick="displayValue('7')" /> </td>
    <td><input type="button" value="8" onclick="displayValue('8')" /> </td>
    <td><input type="button" value="9" onclick="displayValue('9')" /> </td>
    <td><input type="button" value="+" onclick="displayValue('+')" /> </td>
  </tr>

  <!-- last row  -->
  <tr>
    <td><input type="button" value="." onclick="displayValue('.')" /> </td>
    <td><input type="button" value="0" onclick="displayValue('0')" /> </td>

    <!-- solve() will evaluate value and display to result -->
    <td><input type="button" value="=" onclick="solve()" /> </td>

    <td><input type="button" value="*" onclick="displayValue('*')" /> </td>
  </tr>
</table>
```

Now, if you refresh the `index.html` file in browser, you should see the rough UI of calculator:

{% include util/lazy-img.html src="projects/calculator/2.jpg" %}

## Styling our calculator

If you see the UI, it looks bit ugly and buttons, text box and other elements are not consistent too.

CSS helps us to style our web page.

Add following CSS to `style.css` file:

```css
h1 { text-align: center;}
table {
  border-collapse: collapse;
  border-radius: 5px;
}
table.center {
  margin-left: auto;
  margin-right: auto;
}
td, th {
  border: 1px solid #eee;
  text-align: left;
  /* Uncomment below and see */
  /* background-color: #eee; */
  padding: 8px;
}
input[type="button"] {
  background-color: #eee;
  color: #111;
  width: 100%;
  border-radius: 5px;
}

input[type="text"] {
  background-color: white;
  width: 95%;
  border-radius: 5px;
}
```

The CSS I have used quite simple and easy to understand.

Now, if you refresh the `index.html` page in browser, you will see calculator UI as below:

{% include util/lazy-img.html src="projects/calculator/3.jpg" %}

## Adding functionality

At the moment, if you interact with calculator by trying to click on any number or operator then it will not display in the text box as we want. For this to happen, we need to implement the following three functions:

- `displayValue()`: To display the value in the text box
- `solve()`: To get the text from text box and evaluate it and display the result
- `clearResult()`: Clear the content of the text box

Copy following JavaScript code into the file `javascript.js` to add functionality to our calculator:

```javascript
// display value
function displayValue(val) {
  document.getElementById("result").value += val;
}

// evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

// clear the result
function clearResult() {
  document.getElementById("result").value = "";
}
```

In the above code:

- `document.getElementById()` returns an element object representing the element whose `id` property matches the specified string.  [Read more](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById){:target="_blank"}.
- `eval()` function evaluates JavaScript code represented as String. [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval){:target="_blank"}.

The sample operation of calculator look like below:

{% include util/lazy-img.html src="projects/calculator/4.gif" %}

## Possible optimizations

- You can add other mathematical operations as per your need.
- You can improve the UI. Check the line `/* Uncomment below and see */` in `style.css` to try. Play more.

## Source Code

- [BRG Codesnippets for Simple Calculator in HTML, CSS and JavaScript in GitHub](https://github.com/brgtrainings/codesnippets/tree/master/html_css_js/simple_calculator).

## Related tutorials

- [Simple calculator in Ruby language](/tutorials/calculator-ruby/)
- [Simple calculator in C language](/tutorials/calculator-c/)
