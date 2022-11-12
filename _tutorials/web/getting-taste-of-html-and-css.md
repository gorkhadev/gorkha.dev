---
layout: tutorial
tutorial: true
title: Getting tastes of HTML and CSS
date: 13th August, 2020 02:00:00
tags:
 - html
 - css
 - staticwebsite
 - webdevelopment
 - beginner
description: 'Get the taste of HTML and CSS: structure and style your web pages'
permalink: /tutorials/html-css/
thumbnail: tutorials/getting-html-css-taste.jpg
include_header_image: true
thumbnail_credit: ice cream cup by Nicole Yip from the Noun Project
comments: true
---

## Welcome!

Thanks for giving me the opportunity to help you with getting the taste of HTML and CSS.

{% include util/highlight.html
    text="<strong>Getting Taste</strong> is a learning format to give a quick experience of the language, framework, or specific topic and help to generate interests and give pointers for the next steps." class="h5"
%}

## HTML Introduction

__HTML__ stands for _HyperText Markup Language_ and also known as the language for Web. It is responsible for the structuring of web page in the web browsers.

## CSS Introduction

__CSS__ stands for _Cascading Style Sheets_. It describes how HTML elements should be displayed and responsible for styling of our web pages.

## Who is this tutorial for

This tutorial is for anyone who wants to know what HTML and CSS does and have an interest in building Website or Web application.

## Prerequisites

- Enthusiasm to learn HTML/CSS
- Interest in Web Development
- Working Computer or Laptop
- Nice Code Editor ([VS Code](https://code.visualstudio.com/){:target="_blank"} recommended)
- Academic level HTML/CSS knowledge (_Bonus_)

## What we are going to build

We will build a simple _Student Portfolio_ website in this tutorial.
A student portfolio website acts as a way to introduce a student to anyone in the internet and help showcase his or her skills.

We will cover following things in our website:

- A nice introduction
- Personal and Academic information
- Blogs

{% include util/lazy-img.html src="tutorials/getting-taste-html-css-preview.gif" %}

{% include util/note.html
    note="You can consider it as a <em>Developer Portfolio</em> website if you working as an engineer."
%}

Click here {% include util/open-link.html url="https://brgtrainings.github.io/student-portfolio" type="preview" %} to preview the website.

{% include util/note.html
    note="The website might look ugly in mobile as it is beyond the scope of this tutorial."
    type="caution"
%}

This tutorial has been designed to be fully hands-on.

{% include util/note.html
    note="You can find all the resources related to this tutorial including source code under <strong>Resources</strong> section.
    However, I recommend you to follow the tutorial step by step to get <strong>maximum benefit.</strong>"
    type="recommend"
%}

## Tutorial Workflow

The tutorial has been designed to be followed first and understand later format unlike traditional ones where we mostly
learn about theory part first and then later practical.

Workflow of tutorial is quite simple as:

- Whole tutorial is divided into different steps with a goal in each step.
- There is a starter step which briefly explain how to setup starter code.
- Each step has instructions along with code snippets to be followed to achieve the goal.
- The important concept will be briefly explained during each step.

{% include util/note.html
    note="If you find difficulty in understanding any concepts, please comment or provide feedback at the bottom of the tutorial. I will try to update accordingly."
%}

## Step 0 : Starter

### Code setup

#### Using Git and GitHub (Recommended)

- Make a project structure: `mkdir projects && cd projects` __[Optional]__
- `git clone https://github.com/brgtrainings/student-portfolio`
- `cd student-portfolio`
- Go to `starter` branch: `git checkout starter`
- Open `student-portfolio` folder in your favorite editor.
- Open `index.html` file in the browser.

#### Using Zip

- Click {% include util/download-link.html url="https://github.com/brgtrainings/student-portfolio/archive/starter.zip" %} to download the _Starter Zip_.
- Unzip `student-portfolio-starter.zip`.
- Open `student-portfolio-starter` folder in your favorite editor.
- Open `index.html` file in the browser.

### Preview

You should be able to see the following:

{% include util/lazy-img.html src="tutorials/student-portfolio-starter.jpg" %}

### Code overview

When you open the `index.html` file in editor, you will find following:

- `<!DOCTYPE html>`: A HTML 5 declaration which gives an information to the browser about what document type to expect.

  __NOTE:__ HTML 4 had older format `<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">`.

- `<link rel="stylesheet" href="css/style.css" />`: Link the CSS file in the document.
- `<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />`: Link the favicon image to be displayed next to the URL of your site in a browser's address bar.
- `<meta charset="UTF-8">`: Specify the character encoding for the HTML document.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Instructs the browser to sets the width of the page to follow the screen-width of the device.

## Step 1 : Navigation Bar

In this step we will build the navigation bar of our website.

### Navbar code snippet

Update the `nav` tag as follows:

```html
<nav id="navbar">
  <div class="container">
    <h1 class="logo"><a href="#home">Student Foo</a></h1>
    <ul>
      <li><a href="#home" class="active">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#blogs">Blogs</a></li>
    </ul>
  </div>
</nav>
```

__NOTE:__ Remove the `<h1>Student Portfolio Skeleton</h1>` and `<h2>Navbar Section</h2>` lines.

Add following in the `css/style.css`.

```css
/* Resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Util Classes */
.container {
  margin: auto;
  max-width: 1100px;
  padding: 0 20px;
}

/* Main CSS */
html, body {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.7rem;
}

a {
  text-decoration: none;
  color: #444;
}

h1, h2, h3 {
  padding-bottom: 20px;
}

p {
  margin: 10px 0;
}

/* Navbar */
nav {
  background: #444;
  color: #fff;
  overflow: auto;
}
nav a {
  color: #fff;
}
nav h1 {
  float: left;
  padding-top: 20px;
}
nav ul {
  float: right;
  list-style: none;
}
nav ul li {
  float: left;
}
nav ul li a {
  display: block;
  padding: 20px;
  text-align: center;
}

nav ul li a:hover, nav ul li a.active {
  background: #555;
  color: orange;
}
```

I hope that the above code is simple enough to understand. If you are finding difficulty to understand any of HTML element or CSS please check the [Resources](#resources) section for HTML and CSS references.

__NOTE:__ Check the above [step's commit](https://github.com/brgtrainings/student-portfolio/commit/3feeb48626733ba3e64fd64fd2652d4945aa8f7d){:target="_blank"} in GitHub.

### Navbar Preview

{% include util/lazy-img.html src="tutorials/student-portfolio-navbar.jpg" %}

__NOTE:__ In the above step, HTML elements like `nav`, `h1`, `h2`, `a` are instructing browser to show different web page elements like heading, links etc. Also, `navbar` and `home` menu items color are different and achieved through CSS.

## Step 2: Introduction Section

In this step, we will add a basic introduction of student like name and it's basic role.

### Intro code snippet

Replace the `<h2>Introduction Section</h2>` with following:

```html
<div id="intro" class="section-padding">
  <div class="container">
    <div class="profile">
      <img src="img/profile.png" alt="Profile Image">
    </div>
    <div class="intro-body">
      <h1>Hi, I am Foo.</h1>
      <p>
        Web Developer & Open Source Contributor
      </p>
    </div>
  </div>
</div>
```

__IMAGE:__ Download the `profile.png` image from here {% include util/download-image.html url="/assets/img/tutorials/profile.png" %}.

And, update `css/style.css` with following CSS for introduction.

```css
/* Introduction */
#intro .profile, #intro .intro-body {
  text-align: center;
}
#intro .profile img {
  height: 150px;
  width: auto;
}
#intro .intro-body h1 {
  padding-bottom: 5px;
}

/* paste under Util classes */
.section-padding {
  padding: 60px 0;
}
```

### Intro Preview

{% include util/lazy-img.html src="tutorials/student-portfolio-intro.jpg" %}

__NOTE:__ Check the above [step's commit](https://github.com/brgtrainings/student-portfolio/commit/aea8ec0e61ad30845d83031b0dab33f30e0d7b5c){:target="_blank"} in GitHub.

## Step 3: Adding Icon library [Bonus]

Icons are small image that represents a concept or specific entity with meaning to the user.
We will be including a popular icon library known as [Font Awesome](https://fontawesome.com/){:target="_blank"} in this step.

Add following `link` tag in the `head` section.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
```

{% include util/note.html
    note="One can get CSS or JS files of many popular libraries or framework from <a href='https://cdnjs.com/'>https://cdnjs.com/</a>."
%}

After adding above library, you can have icon in your web page with simple `i` tag like

```html
<i class="fas fa-home"></i>

<!-- 2x Size -->
<i class="fas fa-home fa-2x"></i>
```
will give icon as <i class="fas fa-home"></i> and <i class="fas fa-home fa-2x"></i> respectively.

You can get list of all icons [here](https://fontawesome.com/icons/){:target="_blank"}.

__NOTE:__ You can resize the icon using simple classes like `fa-sm`, `fa-lg`, `fa-2x` etc. See the [sizing options](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons){:target="_blank"}.

## Step 4: About Section

In this step, we will be adding about section which will display student academic details and skills.

### About layout

It will be a two column layout where in the left column we will show some intro and skills and on the right column we will show educational details.

The about section code layout will be:

```html
<section id="about" class="section-padding">
  <div class="container">
    <header>
      <h1 class="text-center">About Me</h1>
    </header>
    <div class="about-content">
      <div class="column1">
        <div class="intro-text">
          <!-- code -->
        </div>
        <div class="skills">
          <!-- skill code -->
        </div>
      </div>
      <div class="column2">
        <!-- column two code -->
      </div>
    </div>
  </div>
</section>
```

And CSS is:

```css
#about {
  background-color: #eee;
  overflow: auto;
}
#about header h1 {
  font-size: 2rem;
}
#about .about-content > div {
  width: 50%;
  overflow: auto;
  padding: 0 2rem;
}
```

### About left column

Let's add introduction and skills in the left column. Update `div` with `column1` class as:

```html
<div class="column1">
  <div class="intro-text">
    <p>
      Hi, my name is Foo. I am a 4th Year Computer Science student and have dream of helping world by
      making better softwares.
    </p>
    <p>
      Web Development excites me a lot and like to play with its related technologies whenever I get time.
    </p>
  </div>
  <div class="skills">
    <h3>Skills <i class="fas fa-cogs fa-lg"></i></i></h3>
    <div class="skills-grid">
      <div class="skill-item width_80">HTML (80%)</div>
      <div class="skill-item width_70">CSS (70%)</div>
      <div class="skill-item width_60">JavaScript (60%)</div>
    </div>
  </div>
</div>
```

And CSS as:

```css
/* About left column */
#about .about-content .column1 {
  float: left;
}
#about .about-content p {
  margin-top: 0;
}
#about .about-content .skills {
  margin-top: 20px;
}
#about .about-content .skills .skill-item {
  background-color: orange;
  height: 25px;
  margin-bottom: 5px;
  padding-left: 10px;
  font-size: 13px;
}

/* Paste under Utility classes */
.text-center {
  text-align: center;
}
.width_80 {
  width: 80%;
}
.width_70 {
  width: 70%;
}
.width_60 {
  width: 60%;
}
```

You should be able to see following:

{% include util/lazy-img.html src="tutorials/student-portfolio-about-left.jpg" %}

### About right column

Now, let's update the right column with educational details. Update `div` with class `column2` as:

```html
<div class="column2">
  <h3>Education <i class="fas fa-graduation-cap fa-lg"></i></h3>
  <div class="education-grid">
    <div class="education-item">
      <p class="year">2016 - Present</p>
      <h3>BSc(Computer Science)</h3>
      <h4>Bar University</h4>
      <p>Baz, XYZ</p>
    </div>
    <div class="education-item">
      <p class="year">2014 - 2016</p>
      <h3>Higher Secondary</h3>
      <h4>ABC School</h4>
      <p>Baz, XYZ</p>
    </div>
  </div>
</div>
```

And CSS as:

```css
/* About right column */
#about .about-content .column2 {
  float: right;
}
#about .about-content .column2 h3 {
  padding-bottom: 10px;
}
#about .about-content .education-grid .education-item {
  margin-bottom: 30px;
}
#about .about-content .education-grid .education-item .year {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0;
}
#about .about-content .education-grid .education-item h3 {
  padding: 0;
  margin-bottom: 5px;
  line-height: 1;
  font-weight: 700;
}
#about .about-content .education-grid .education-item h4 {
  font-size: 15px;
  font-weight: 500;
}
```

Now, about section should be updated as following:

{% include util/lazy-img.html src="tutorials/student-portfolio-about.jpg" %}

__NOTE:__ Check the above [step's commit](https://github.com/brgtrainings/student-portfolio/commit/a17b1cba9f4734ffb45050764920d4b8ece04322){:target="_blank"} in GitHub.

## Step 5: Blogs Section

In this step, we will add blogs to the page.

We will use very simple layout for listing our blogs. It will be a three column layout with one blog item per column.

### Blog layout

The skeleton of three column layout for listing blogs is:

```html
<section id="blogs" class="section-padding">
  <div class="container">
    <header>
      <h1 class="text-center">Blogs</h1>
    </header>
    <div class="blogs-content">
      <div class="column">
        <!-- 1st Blog content -->
      </div>
      <div class="column">
        <!-- 2nd Blog content -->
      </div>
      <div class="column">
        <!-- 3rd Blog content -->
      </div>
    </div>
</section>
```

And CSS for above layout is:

```css
#blogs header h1 {
  font-size: 2rem;
}
#blogs .column {
  float: left;
  width: 33.3%;
  padding: 0 10px;
}
#blogs .blogs-content:after {
  content: "";
  display: table;
  clear: both;
}
```

### Blog item layout

In this part, we will add the first blog item and it's required CSS. We will repeat the same for other two blog items.

Add the following content in the first `div` with `column` class having comment `1st Blog content`.

```html
<div class="card">
  <img src="img/website.jpg" alt="Web Development">
  <div class="blog-body">
    <h3 class="blog-title">Getting start with Web Development</h3>
    <div class="meta">
      <span><i class="fas fa-calendar-alt"></i>1st Aug, 2020</span>
      <span><i class="fas fa-clock"></i> ~3 mins</span>
    </div>
    <p class="blog-text">
      Web development has been one of the top field chosen by students for their career.
      But it is really important to get it right.
      <a href="#">Read More</a>
    </p>
  </div>
</div>
```

And, add its CSS as:

```css
#blogs .blogs-content .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #f3f3f3;
  border-radius: 5px;
}
#blogs .blogs-content .card img {
  width: 100%;
  border-radius: 5px 5px 0 0;
}
#blogs .blogs-content .card .blog-body {
  padding: 10px 20px;
}
#blogs .blogs-content .card .blog-body .blog-title {
  padding-bottom: 5px;
}
#blogs .blogs-content .card .blog-body .meta {
  font-size: 13px;
  color: #666;
}
#blogs .blogs-content .card .blog-body .blog-text {
  font-size: 14px;
  color: #444;
  line-height: 20px;
}
#blogs .blogs-content .card .blog-body .blog-text a {
  color: darkorange;
}
```

You should be able to see the first blog item as:

{% include util/lazy-img.html src="tutorials/student-portfolio-blog-item.jpg" %}

### Other blog items

Now, repeat the HTML content with different blog content for other two blogs. CSS need not to be changed.

The final blogs section should look like as below:

{% include util/lazy-img.html src="tutorials/student-portfolio-blogs.jpg" %}

{% include util/note.html
    note="All the images for this tutorial have been taken from from <a href='https://unsplash.com/'>https://unsplash.com/</a>."
%}

## Step 6: Footer

One last thing remaining is `footer` which is the bottom most part of website and usually contains links to other pages, contact links, copyright and other credits.

We will add a simple copyright content in our footer.

Add the following HTML code:

```html
<footer>
  <div class="text-center">&copy; Student Foo 2020</div>
</footer>
```

And CSS as:

```css
footer {
  background: #ccc;
  padding: 20px;
}
```

The footer will look like:

{% include util/lazy-img.html src="tutorials/student-portfolio-footer.jpg" %}

{% include util/note.html
    note="The website we have created will not be responsive i.e it might look ugly in mobile or other devices. You can achieve that through the help of 'media queries'."
    type="warning"
%}

## Step 7: Adding Social contacts [Bonus]

In this step, we will add a list of social contacts of student. The best place is at the introduction section below the role.

Add the following social links inside the div with `intro-body` class whose parent div id is `intro`.

```html
<div class="social-links text-center">
  <a href="#" alt="Twitter">
    <i class="fab fa-twitter"></i>
  </a>
  <a href="#" alt="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <a href="#" alt="Facebook">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="#" alt="LinkdIn">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="#" alt="Instagram">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="#" alt="Email">
    <i class="fas fa-envelope"></i>
  </a>
</div>
```

And, its CSS will be:

```css
#intro .social-links a {
  margin-right: 0.5rem;
}
```

__NOTE:__ I will leave up to you to add the different color for the different social icons.

The introduction section should be updated as following:

{% include util/lazy-img.html src="tutorials/student-portfolio-social.jpg" %}

{% include util/highlight.html
    text="Obviously, this is not the final version of the website. There are lot of improvements that can be done. I hope you will enhance at your own level."
    class="h5"
%}

## Resources

- Preview of the Website: {% include util/open-link.html url="https://brgtrainings.github.io/student-portfolio" type="preview" %}
- Source code: {% include util/open-link.html url="https://github.com/brgtrainings/student-portfolio" type="project" %}
- Link of all step by step archives: {% include util/open-link.html url="https://github.com/brgtrainings/student-portfolio/releases" type="archives" %}

## Where to go from here

You can go through following useful links to continue your journey with HTML and CSS learning.

- [w3schools HTML Tutorial](https://www.w3schools.com/html/default.asp){:target="_blank"} - Reference tutorial
- [Mozilla HTML Tutorial](https://developer.mozilla.org/en-US/docs/Web/HTML){:target="_blank"} - Reference tutorial
- [w3schools CSS Tutorial](https://www.w3schools.com/css/default.asp){:target="_blank"} - Reference tutorial
- [Mozilla CSS Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS){:target="_blank"} - Reference tutorial
- [htmlreferences.io](https://htmlreference.io/) - Nice guide on HTML elements and its attributes
- [cssreference.io](https://cssreference.io/) - A visual guide to CSS

{% include util/highlight.html
    text="I hope you had wonderful tasting experience of HTML and CSS through this tutorial. <br>Wishing you good luck for the learning journey ahead.<br> Thank You!"
%}
