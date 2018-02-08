---
title: Home
layout: front.html
order: 0
roles:
    faculty: Faculty
    phd: PhD Students
---
# Computer Architecture and Programming Abstractions

**Capra** is a research group at [Cornell][] in the [Computer Science][cs] and [Electrical and Computer Engineering][ece] departments.
Our research studies abstractions and efficiency through the interaction of programming languages and computer architecture.

[ece]: http://www.ece.cornell.edu
[cs]: http://www.cs.cornell.edu
[cornell]: http://www.cornell.edu

## Research

<div class="projects">
  {% for proj in projects -%}
  {%- if not proj.draft -%}
  <div class="project">
    <h3><a href="{{ proj.link }}">{{ proj.longtitle or proj.title }}</a></h3>
    {{ proj.summary | markdown | safe | trim }}
  </div>
  {% endif -%}
  {% endfor -%}
</div>

## People

<div class="people">
  {% for role, rolename in roles %}
  <div class="category">
    <h3>{{ rolename }}</h3>
    <ul>
      {%- for name, person in people | dictsort %}
      {%- if person.role == role -%}
      <li>
        {% if person.link %}<a href="{{ person.link }}">{% endif -%}
        {{ name }}
        {%- if person.link %}</a>{% endif %}
      </li>
      {%- endif -%}
      {% endfor -%}
    </ul>
  </div>
  {% endfor %}
</div>
