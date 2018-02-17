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

## Typed Natural Language Understanding

A new category of cloud services for NLU have emerged, including [Wit.ai][], [LUIS][], [Dialogflow][], and [Lex][].
These tools make it easy to get *started* developing conversational user interfaces, but they introduce their own sources of engineering challenges.

The core problem is that these services require *out-of-band* configuration in a web GUI.
Developers need to specify a language model by configuring *intents* and *entities* to extract from user utterances.
Then, developers have to duplicate this same structure in client code: they must write nested conditions to handle different combination of entities found in each utterance.
Worse, the GUI configuration and the client code can easily get out of sync, leading to subtle correctness bugs or production failures.

We observe that *algebraic types* can capture the natural structure of NLU language models.
Instead of asking programmers to develop configurations and code separately, we propose a domain-specific type language that puts the code in charge of the end-to-end language system.
A program in our type DSL looks like this:

    free-text Person;
    free-text Time;
    keywords Day = "Sunday" | "Monday" | ... | "Saturday";
    alias Date = { day: Day, time?: Time };
    trait Intent =
      | <Schedule> { who: Person, when: Date }
      | <Move> { from: Date, to: Date }
      | <List> {};

Each declaration in our DSL simultaneously declares a data type for client code and an element in the NLU service configuration.
Together, the composite system guarantees type safety: that handler code agrees with the structure of NLU responses for the application's language model.

Our prototype implementation configures [Wit.ai][] models and generates [TypeScript][] interface declarations.

[TypeScript]: https://www.typescriptlang.org
[Lex]: https://aws.amazon.com/lex/
[Dialogflow]: https://dialogflow.com
[LUIS]: https://www.luis.ai
[Wit.ai]: https://wit.ai

<ul class="links">
  <li>
    <a href="https://github.com/hgoldstein95/opal-nlu-hs-tool" class="github">opal-nlu-hs-tool</a>:
    A type DSL for configuring a language model in <a href="https://wit.ai">Wit.ai</a>.
  </li>
  <li>
    <a href="opal-nlu-types.pdf" class="pdf"><i>Typed Interactions for NLU in Opal:</i></a> A report describing the type DSL's semantics and implementation.
  </li>
</ul>

## Hypothetical Worlds

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
    <a href="https://github.com/cucapra/opal-semantics" class="github">opal-semantics</a>:
    A technical report describing a model of the Opal semantics, along with an implementation in Coq.
  </li>
</ul>

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
