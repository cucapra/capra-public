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

Check out our ongoing research below or read [news about the group][news].
If you're a Cornell student and want to get involved, see our [instructions for undergrad research][ugrad].

[ece]: http://www.ece.cornell.edu
[cs]: http://www.cs.cornell.edu
[cornell]: http://www.cornell.edu
[cupl]: http://pl.cs.cornell.edu
[news]: /news/
[ugrad]: /ugresearch.html


<section class="projects">

## Hardware Accelerator Generation

### [Dahlia, a Language for Predictable Accelerator Design][dahlia]

High-level synthesis (HLS) offers a productive way to design specialized
hardware accelerators by compiling high-level descriptions to register
transfer level languages. Our language, [Dahlia][dahlia], uses a *substructural
type system* to model hardware resources and their constraints to statically
reject HLS designs that make unpredictable area-latency trade-offs. You
can [try Dahlia in your browser](https://capra.cs.cornell.edu/dahlia).

[dahlia]: https://capra.cs.cornell.edu/dahlia

### Infrastructure for Hardware Accelerator Compilers

TK [FuTIL](https://github.com/cucapra/futil/): An intermediary language (IL) for accelerator generators.


## Graphics Programming

### [Gator: Geometry Types][gator]

TK [Gator][gator]: Geometry types for graphics programming.

[gator]: https://github.com/cucapra/linguine/

### [Braid, a Safe Heterogeneous Language for Real-Time Graphics](https://capra.cs.cornell.edu/braid/)

[Braid](https://capra.cs.cornell.edu/braid/) is a programming language for *heterogeneous programming*, where a single source program targets different hardware units. We have applied it to real-time graphics programming on CPU--GPU systems. Braid compiles to WebGL, so you can [try it out in your browser](https://capra.cs.cornell.edu/braid/dingus/#example=phong).


## Compilers for Unconventional Hardware

TK Search-based techniques use increasingly powerful solvers to compile software to heterogenous targets, without the need to hand craft custom heuristics.

TK [Diospyros](https://github.com/cucapra/diospyros): A solver-aided compiler for vectorization on digital signal processors.


## Vision/System Co-Design

### [Customizing JPEG Compression for Computer Vision][deepjpeg]

Image compression formats like JPEG are ubiquitous in computer vision, but they were designed for human perception—not for modern vision algorithms.
We examine the potential for [customizing JPEG compression for specific vision tasks][deepjpeg], simultaneously improving compression the ratio and the accuracy.

[deepjpeg]: https://www.cs.cornell.edu/~asampson/media/papers/deepjpeg-recoml2020.pdf

### [Exploiting Temporal Redundancy for Live Computer Vision][eva2]

Vision accelerators that run on real-time video process nearly identical frames at every time step. [This project][eva2] introduces *activation motion compensation*, a technique for approximately incremental acceleration of computer vision. It works by measuring motion in the input video and translating it to motion in the intermediate results of convolutional neural networks.

[eva2]: /research/eva2

### [A Vision Mode for Efficient Image Capture][visionmode]

Most camera systems are optimized for photography, so they waste time and energy when they capture images for computer vision. This project designs a [*vision mode*][visionmode] for cameras and their associated signal processing logic that saves energy by producing lower-quality, less-processed image data.

[visionmode]: /research/visionmode

</section>


## Archived Research

* [Programming Abstractions for Natural Language &amp; Intelligent Systems][opal]  
  Despite rapid progress in machine learning capabilities, integrating ML into full applications remains complex and error prone. [Opal][] is a new set of language features that help make it easier to build correct software that relies on AI, especially on natural language understanding.

[opal]: /research/opal


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
