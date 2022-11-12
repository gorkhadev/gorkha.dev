---
layout: snippet
title: Embed Video in Jekyll
date: 9th Sept, 2020 02:00:00
tags:
 - jekyll
 - video
 - web
description: Embed Video in Jekyll
permalink: /snippets/embed-video-in-jekyll/
page_name: others
comments: true
---

## Demo

{% include snippets/jekyll/embed-video.html
    src="/assets/medias/flower.webm"
%}

## Code

Create a partial html file inside folder `_includes` for embedding video as:

```html
<!-- _includes/embed-video.html -->
<video controls width="100%">
  <source src="{% raw %}{{ include.src }}{% endraw %}" type="video/webm">
  Your browser does not support the video element.
</video>
```

Include the above partial from other page as:

```html
{% raw %}{% include embed-video.html src="/assets/medias/some-video-url.mp4" %}{% endraw %}

or

{% raw %}{% include embed-video.html src="https://example.com/some-video-url.mp4" %}{% endraw %}
```

__NOTE:__ The `src` attribute can be local video file stored inside `/assets/medias/` folder or some remote url.
