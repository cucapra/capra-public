---
layout: layout.html
title: "Abstractions for Intelligent Systems"
longtitle: "Abstractions for Natural Language & Intelligent Systems"
order: 3
summary: |
    Despite rapid progress in machine learning capabilities, integrating ML into full applications remains complex and error prone. Opal is a new set of language features that help make it easier to build correct software that relies on AI, especially on natural language understanding.
---
# Programming Abstractions for Natural Language &amp; Intelligent Systems

Rapid progress in machine learning has sparked a stampede toward new kinds of user interfaces based on natural interaction.
Excitement over AI-based user interfaces, however, has run ahead of the engineering tools that we need to implement them.
Engineers [complain][highinterest] of a new category of pitfalls that arise from building systems around machine learning.

[highinterest]: https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43146.pdf

We are building programming language abstractions to help manage the complexity of integrating AI with real-world applications.
Our interlocking set of abstractions, collectively called Opal, adds new features to mainstream programming languages.

## Papers

<a href="http://www.sysml.cc/doc/56.pdf" class="pdf">a short paper</a> on support for natural language understanding in [SysML 2018][sysml]

    @inproceedings{opal-sysml,
        author = {Alex Renda and Harrison Goldstein and Sarah Bird and
                  Chris Quirk and Adrian Sampson},
        title = {Programming Language Support for Natural Language Interaction},
        booktitle = {SysML},
        year = {2018},
    }

<a href="https://arxiv.org/abs/1709.04991" class="pdf">arXiv draft</a> of a longer paper on these and other features

[sysml]: http://www.sysml.cc/#posters

## Code

Some in-progress implementation components are available as open source on GitHub.

<ul class="links">
  <li>
    <a href="https://github.com/cucapra/opal" class="github">opal</a>:
    Experimental runtime and language constructs embedded in <a href="https://www.typescriptlang.org">TypeScript</a>.
  </li>
  <li>
    <a href="https://github.com/cucapra/opal-bot" class="github">opal-bot</a>:
    A chatbot for scheduling meetings.
  </li>
  <li>
    <a href="https://github.com/hgoldstein95/opal-nlu-hs-tool" class="github">opal-nlu-hs-tool</a>:
    A type DSL for configuring a language model in <a href="https://wit.ai">Wit.ai</a>.
  </li>
  <li>
    <a href="https://github.com/cucapra/opal-semantics" class="github">opal-semantics</a>:
    A technical report describing a model of the Opal semantics, along with an implementation in Coq.
  </li>
</ul>

## The Opal Language

Opal is an in-progress programming language that unifies a suite of new language features. The core constructs are hypothetical worlds, feature types, and distributed disclosure.

### Hypothetical Worlds

Unlike GUIs or command-line interactions, AI-based user interfaces are intrinsically ambiguous. Natural language can have multiple interpretations even when NLU is perfect, and predictive applications need to take action without any explicit guidance from the user. In all cases, the right interpretation depends on the hypothetical outcome of taking a given action.

Opal's *hypothetical world* construct expresses nondeterministic choice. Programs use it to search a space of possible interpretations for ambiguity.
Inside an Opal `hyp` block, code looks natural---as if it were interacting with the real world---but effects are isolated until the program `commit`s the resulting changes.

For example, a calendar application might support an ambiguous command to schedule a meeting without a specific day. It can use hypothetical worlds to propose schedule modifications:

    for (day in weekdays) {
      world = hyp {
        calendar.add(event, day);
        if (!constraints_violated(calendar)) {
          break;
        };
      };
    }
    world.commit();

This example only commits an event addition when adding it would satisfy the user's constraints on the final schedule.

### Abstractions for ML Toolkits

Feature engineering is an often-overlooked but critical ingredient for real-world applications of machine learning, and *ad hoc* interfaces to ML algorithms can complicate this work. Opal's type system for features rules out common pitfalls when managing the translations between internal, domain-specific data structures and features for learning.

The core type is a *feature vector*, which represents a flexible container for feature values. Each feature is either *numeric*, *bounded* (drawn from a fixed dictionary), or *unbounded*. Type-safe tagging for specific features eliminates the need for careful management of strings.

### Distributed Composition

Intelligent user interfaces often involve collaboration between multiple users. Opal offers a set of abstractions for managing the interactions between distributed users while preserving privacy. The two main language features are a *placement* construct, `at`, and an *access* construct, `with`. Programmers use `at` to delegate execution to another machine and `with` to request permission for private data.

Together, the abstractions enable both centralized and decentralized communication between users. In this example, Alice uses a central server node to schedule a meeting using private data from both Alice and Bob:

    world = hyp {
      at DataCenter {
        with Bob {
          time = find_available_time(Alice.calendar, Bob.calendar);
          Alice.calendar.add(event, time);
          Bob.calendar.add(event, time);
          fitness = Alice.fitness() + Bob.fitness();
        }
      }
    };
    if (world.fitness > threshold) {
      world.commit();
    }

When the resulting data flows out of the `with` block, it is *disclosed*. Opal offers hooks to let applications control how to ask the user for permission to disclose data.

## Contact

* [Alex Renda][alex], Cornell
* [Harrison Goldstein][harry], Cornell
* [Sarah Bird][sarah], Facebook
* [Chris Quirk][chris], Microsoft
* [Adrian Sampson][adrian], Cornell

[adrian]: http://www.cs.cornell.edu/~asampson/
[sarah]: https://research.fb.com/people/bird-sarah/
[chris]: https://www.microsoft.com/en-us/research/people/chrisq/
[harry]: http://harrisongoldste.in
[alex]: https://alexrenda.com
