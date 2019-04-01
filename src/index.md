---
title: Home
layout: front.html
order: 0
roles:
    faculty: Faculty
    phd: PhD Students
    undergrad: Undergrad & MEng
    collaborator: Collaborators
    staff: Staff
    alum: Alumni
---
# Computer Architecture and Programming Abstractions

**Capra** is a research group at [Cornell][] in the [Computer Science][cs] and [Electrical and Computer Engineering][ece] departments.
Our research studies abstractions and efficiency through the interaction of programming languages and computer architecture.

If you are a Cornell Undegraduate student interested in doing research with us, please fill out [this github issue][ugresearch]. Due to the high volume of emails, we will ignore or redirect all queries about research to this form.

[ece]: http://www.ece.cornell.edu
[cs]: http://www.cs.cornell.edu
[cornell]: http://www.cornell.edu
[ugresearch]: https://github.com/cucapra/undergrad-research/issues/new?assignees=&labels=&template=undergrad-research.md&title=%5BFull+name%5D

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
        {% if person.note -%}
        <span class="note">{{ person.note }}</span>
        {%- endif %}
      </li>
      {%- endif -%}
      {% endfor -%}
    </ul>
  </div>
  {% endfor %}
</div>
