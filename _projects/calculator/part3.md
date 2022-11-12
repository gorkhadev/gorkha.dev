---
layout: tutorial_series
learning_type: projects
tutorial_name: calculator
title: Calculator - Dark mode of Calculator
date: 26th Oct, 2020 02:00:00
tags:
 - html
 - css
 - javascript
 - beginner
description: Calculator - Dark mode of Calculator
permalink: /projects/calculator/part3/
prev_link: /projects/calculator/part2/
thumbnail: projects/calculator/part2_5.png
comments: true
---

In this tutorial, we are going add the __Dark UI Mode__ to our calculator web app.

## Demo

{% include util/codepen.html
    author="coolbrg"
    name="Cool BRG"
    id="XWKMewv"
    title="Calculator in HTML/CSS/JS Part 3"
    height=600
%}

## What is Dark Mode

Dark mode is the UI interface level change which uses dark color like black or gray as primary
color to give user the darker UI experience.

Initially, developers preferred using dark mode in their code editor for their development productivity as it gives less strain to their eyes, but now it’s being used all over the place i.e from mobile, desktops, and web. Supporting Dark Mode feature has now become must-have feature.

Following advantages has been noticed while using _Dark Mode_ by users:

- Reduces eye strain
- Saves battery life

## Add the Dark Mode

There are many ways one can add dark mode to web page. Following are few of the popular ones.

### prefer-color-scheme CSS media feature

`prefers-color-scheme` media feature can be used to detect user’s system color scheme preferences (user might have set the mobile or computer's color scheme) and then based on system's preference the UI mode can be activated. It can have three possible values: no preference, light and dark. This feature is supported by major browsers.

Add the following code to `style.css`:

```css
@media (prefers-color-scheme: light) {
  body {
    background-color: white;
    color: black;
  }
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```

- When the system is in light mode

  {% include util/lazy-img.html src="projects/calculator/part3_1.jpg" %}

- When the system is in dark mode

  {% include util/lazy-img.html src="projects/calculator/part3_2.jpg" %}

### Toggling theme

The preferred way to enable or disable dark mode is through toggling theme.
This can be done through mainly two ways:

- Using `body` class
- Using separate stylesheets

For this tutorial I will be using `body` class approach.

The idea here is to toggle between two CSS classes on click of button.

Add a button to the web page `index.html` to enable or disable dark mode.

```html
<h1>Simple Calculator</h1>
<div class="text-center mb-4">
  <button class="toggle-mode">Dark Mode</button>
</div>
```

Update the `style.css` file with following CSS:

```css
table tr:first-child {
  ...
}
.text-center {
  text-align: center;
}
.mb-4 {
  margin-bottom: 1.5rem;
}
body.dark-theme {
  color: #fff;
  background: black;
}
body.dark-theme input[type="button"] {
  box-shadow: 0 5px rgba(255,255,255,0.8);
}
```

The calculator now should looks like below:

{% include util/lazy-img.html src="projects/calculator/part3_3.jpg" %}

Now, we need to add the JavaScript functionality for the __Dark Mode__ button.

Add following code into the `javascript.js` file:

```javascript
// Toggle Mode ---------------
// Select the button
const toggleBtn = document.querySelector('.toggle-mode');

// Listen for a click on the button
toggleBtn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
  if (this.innerHTML == "Dark Mode") {
    this.innerHTML = "Light Mode";
  } else {
    this.innerHTML = "Dark Mode";
  }
})
```

Now, if you click on the `Dark Mode` button then you should be getting the dark mode with black as background
and white as its text color.

{% include util/lazy-img.html src="projects/calculator/part3_4.gif" %}

## Source Code

Find the source code of the tutorial [here](https://github.com/brgtrainings/codesnippets/tree/master/html_css_js/simple_calculator_part3){:target="_blank"}.

## Useful links

- [Complete guide to dark mode by CSS-Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/){:target="_blank"}
