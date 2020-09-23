---
title: Home
layout: front.html
order: 0
roles:
    faculty: Faculty
    phd: PhD & MS Students
    undergrad: Undergrad & MEng
    collaborator: Collaborators
    staff: Staff
    alum: Alumni
---
# Computer Architecture and Programming Abstractions

**Capra** is a research group at [Cornell][] in the [Computer Science][cs] and [Electrical and Computer Engineering][ece] departments.
Our research studies abstractions and efficiency through the interaction of [programming languages][cupl] and computer architecture.

Check out our ongoing research below or read [news about the group][news].
If you're a Cornell undergraduate student, consider [working with us][ugrad]!

[ece]: http://www.ece.cornell.edu
[cs]: http://www.cs.cornell.edu
[cornell]: http://www.cornell.edu
[cupl]: http://pl.cs.cornell.edu
[news]: /news/
[ugrad]: /ugresearch.html


<section class="projects">

## Hardware Accelerator Generation

### [Dahlia, a Language for Predictable Accelerator Design][dahlia]

High-level synthesis (HLS) tools can translate C-like languages to hardware accelerators, but the semantic gap between software and hardware can yield unpredictable performance and semantics.
[Dahlia][dahlia] adds a *substructural
type system* to model hardware resources and their constraints to statically
reject HLS designs that make unpredictable area-latency trade-offs. You
can [try Dahlia in your browser](https://capra.cs.cornell.edu/dahlia).

[dahlia]: https://capra.cs.cornell.edu/dahlia

### Infrastructure for Hardware Accelerator Compilers

We're designing [FuTIL](https://github.com/cucapra/futil/), an intermediate language (IL) and infrastructure for building compilers that generate hardware accelerators.
FuTIL works by representing both hardware-like *structure* and software-like *control* together.


## Graphics Programming

### [Gator: Geometry Types][gator]

We have identified a new category of *geometry bugs* that arise in graphics programming and other domains that have to deal with matrices and vectors.
They arise when programmers lose track of the coordinate systems and reference frames that underpin the computation.
[Gator][] is a language for GPU shading with a type system that can eliminate geometry bugs and rule them out by generating correct-by-construction transformation code.

[gator]: https://github.com/cucapra/linguine/

### [Braid, a Safe Heterogeneous Language for Real-Time Graphics](https://capra.cs.cornell.edu/braid/)

[Braid](https://capra.cs.cornell.edu/braid/) is a programming language for *heterogeneous programming*, where a single source program targets different hardware units. We have applied it to real-time graphics programming on CPU--GPU systems. Braid compiles to WebGL, so you can [try it out in your browser](https://capra.cs.cornell.edu/braid/dingus/#example=phong).


## Search-Based Compilation for Digital Signal Processing

Digital signal processors (DSPs) are ubiquitous and energy efficient, but making them fast requires an expert programmer. The difficulty stems from their complex vector instruction sets and simple, in-order pipelines. To get the best results, programmers must carefully pack and move data in vector registers to enable compact execution. [Diospyros][diospyros] uses equality saturation to automatically discover efficient vector packing schemes.

[diospyros]: https://github.com/cucapra/diospyros


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
