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
Our research studies abstractions and efficiency through the interaction of [programming languages][cupl] and computer architecture.

[ece]: http://www.ece.cornell.edu
[cs]: http://www.cs.cornell.edu
[cornell]: http://www.cornell.edu
[cupl]: http://pl.cs.cornell.edu

## Hardware Accelerator Generation

Tools and languages to building hardware accelerators.

- [Dahlia](https://capra.cs.cornell.edu/dahlia): Type system to reject unpredictable accelerator designs at compile time.
- [FuTIL](https://github.com/cucapra/futil/): An intermediary language (IL) for accelerator generators.

## Graphics Programming

Abstractions for productive graphics programming.

- [Gator](https://github.com/cucapra/linguine/): Geometry types for graphics programming.
- [Braid](https://capra.cs.cornell.edu/braid/): A staged programing language for graphics programming.

## Compilers for Unconventional Hardware

Search-based techniques use increasingly powerful solvers to compile software to heterogenous targets, without the need to hand craft custom heuristics.

- [Diospyros](https://github.com/cucapra/diospyros): A solver-aided compiler for vectorization on digital signal processors.

## Vision/System Co-Design

- [EVA2](/research/eva2)
- [VisionMode](/research/visionmode)

## Programming Abstractions for Natural Language &amp; Intelligent Systems

Despite rapid progress in machine learning capabilities, integrating ML into full applications remains complex and error prone. [Opal](/research/opal) is a new set of language features that help make it easier to build correct software that relies on AI, especially on natural language understanding.

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
