---
layout: layout.html
title: "Gator: Geometry Types"
longtitle: "Geometry Types for Graphics Programming in Gator"
---
Overview TK.

<figure>
  <img src="bunnies.png" style="width: 250px;">
  <figcaption>
    Geometry bugs can yield subtly incorrect visual output and can be hard to catch in testing.
    The right-hand output depicts a geometry bug that is only visible from some angles on the model.
  </figcaption>
</figure>

## Publications

Dietrich Geisler, Irene Yoon, Aditi Kabra, Horace He, Yinnon Sanders, and Adrian Sampson.
"Geometry Types for Graphics Programming."
In OOPSLA 2020.

<ul class="links">
  <li><a href="https://www.cs.cornell.edu/~asampson/media/papers/gator-oopsla2020-preprint.pdf" class="pdf">OOPSLA paper preprint</a></li>
</ul>

    @inproceedings{geisler-splash2020,
        author = {Dietrich Geisler and Irene Yoon and Aditi Kabra and
            Horace He and Yinnon Sanders and Adrian Sampson},
        title = {Geometry Types for Graphics Programming},
        booktitle = {OOPSLA},
        year = {2020},
    }

Aditi Kabra, Dietrch Geisler, and Adrian Sampson.
"Online Verification of Commutativity."
In TAPAS 2020.

    @inproceedings{kabra-tapas2020,
        author = {Aditi Kabra and Dietrch Geisler and Adrian Sampson},
        title = {Online Verification of Commutativity},
        booktitle = {Workshop on Tools for Automatic Program Analysis (TAPAS)},
        year = {2020},
    }

## Code

<figure>
  <img src="shadowmap.png" style="width: 250px;">
  <figcaption>
    The Gator compiler includes examples of several common rendering effects, including shadow mapping.
  </figcaption>
</figure>

Check out the [open-source OCaml implementation][gh] of the Gator compiler.
The compiler type-checks Gator programs and emits them as either GLSL or TypeScript.
It comes with a repository of [example Gator code][ex] that reflects the case studies in the OOPSLA paper.
The license is [MIT][].

[gh]: https://github.com/cucapra/gator
[ex]: https://github.com/cucapra/gator/tree/master/examples
[mit]: https://opensource.org/licenses/MIT
[gh]: https://github.com/cucapra/approx-vision

## Contact

* [Dietrich Geisler][dietrich] &lt;<dag368@cornell.edu>&gt;
* [Adrian Sampson][adrian] &lt;<asampson@cs.cornell.edu>&gt;

[dietrich]: https://www.cs.cornell.edu/~dgeisler/
[adrian]: http://www.cs.cornell.edu/~asampson/

## Acknowledgments

<img class="flair" src="/img/ada.png" style="width: 150px"
    alt="Applications Driving Architectures (ADA)">

This work was supported by [the NSF][nsf] and [the Applications Driving Architectures (ADA) center][ada].

[nsf]: https://www.nsf.gov
[ada]: https://adacenter.org
