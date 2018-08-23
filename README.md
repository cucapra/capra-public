Capra Group Site
================

This is the public website for the [Capra research group][capra] at Cornell.
It's made with [Metalsmith][].


## Building

To build the site, do something like this:

    $ yarn
    $ yarn run build

Or to preview it locally, use:

    $ yarn run serve

And follow the directions to open it in your browser.

Pushing to this repository will update the public site via [Hooknook][].


## Editing

All the content lives under `src/`.
The list of people is in a YAML file at `src/data/people.yaml` (add yourself there!).
You can add research projects by adding subdirectories under `src/research/`.

News items live under `src/news/`.
Please post early and often!
There are two kinds of posts: short updates and links to blog posts.
Both use a naming convention like `YYYY-MM-DD-title.md`.
Short updates can just contain plain [Markdown][]; this should probably be no more than a sentence or two.
Blog links use YAML front matter and look like this:

    ---
    link: http://example.com/blog/post.html
    title: This Is a Nanosecond
    author: Grace
    kind: post
    ---

Use your first name for `author`, and be sure to set `kind` to `post`.


[capra]: https://capra.cs.cornell.edu/
[metalsmith]: http://www.metalsmith.io
[markdown]: https://daringfireball.net/projects/markdown/
[hooknook]: https://github.com/sampsyo/hooknook
