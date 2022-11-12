---
layout: snippet
title: Embed Audio in Jekyll
date: 9th Sept, 2020 02:00:00
tags:
 - jekyll
 - audio
 - web
description: Embed Audio in Jekyll
permalink: /snippets/embed-audio-in-jekyll/
page_name: others
comments: true
---

## Demo

{% include snippets/jekyll/embed-audio.html
    src="/assets/medias/guitar.mp3"
    autoplay=true
    credit="freesound.org"
    credit_url="https://freesound.org/people/Sub-d/sounds/49658/"
%}

## Code

Create a partial html file inside folder `_includes` for embedding audio as:

```html
<!-- _includes/embed-audio.html -->
<audio controls>
  <source src="{% raw %}{{ include.src }}{% endraw %}" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

Include the above partial from other page as:

```html
{% raw %}{% include embed-audio.html src="/assets/audio/some-audio-url.mp3" %}{% endraw %}

or

{% raw %}{% include embed-audio.html src="https://example.com/some-audio-url.mp3" %}{% endraw %}
```

__NOTE:__ The `src` attribute can be local audio file stored inside `/assets/audio/` folder or some remote url.
