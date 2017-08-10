---
title: Home
layout: layout.html
order: 0
---
# Computer Architecture and Programming Abstractions

**Capra** is a research group at [Cornell][] in the [Computer Science][cs] and [Electrical and Computer Engineering][ece] departments.
Our research studies abstractions and efficiency through the interaction of programming languages and computer architecture.

[ece]: http://www.ece.cornell.edu
[cs]: http://www.cs.cornell.edu
[cornell]: http://www.cornell.edu

## Research

{% for page in collections.research %}
<div class="project">
  <h3><a href="{{ page.link }}">{{ page.longtitle or page.title }}</a></h3>
  {{ page.summary | markdown | safe }}
</div>
{% endfor %}

## People

* [Adrian Sampson][adrian]
* [Mark Buckler][mark]

[mark]: http://www.markbuckler.com
[adrian]: http://www.cs.cornell.edu/~asampson
