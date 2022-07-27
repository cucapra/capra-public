---
title: "Summer Talk Series"
layout: layout.html.njk
notitle: true
---
# CIS Summer Research Talk Series

The CS department is running a series of enrichment talks for undergraduate researchers who are doing research in Bowers CIS this summer.
(Non-undergrads are invited too!)
It happens on **Thursdays 3–4pm** in **Gates 310** (except for a couple of weeks in an alternate location, indicated below).
You can also join via Zoom—look in your email or ask [Adrian](mailto:asampson@cs.cornell.edu) for a link.

<table>
    <thead>
        <tr>
            <th>Date</th>
            <th style="width: 7em;">Speaker</th>
            <th>Topic</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="date">June 16</td>
            <td><a href="https://www.cs.cornell.edu/ken/">Ken Birman</a></td>
            <td>
                The Evolution of Distributed Computing<br>
                <strong>in Gates 114</strong>
            </td>
        </tr>
        <tr>
            <td class="date">June 23</td>
            <td><a href="https://gargnikhil.com">Nikhil Garg</a></td>
            <td>Computing to Answer Societal Questions</td>
        </tr>
        <tr>
            <td class="date">June 30</td>
            <td><a href="http://home.bharathh.info">Bharath Hariharan</a></td>
            <td>
                Navigating Research in Computer Vision &amp; Machine Learning<br>
                <strong>in Gates 114</strong>
            </td>
        </tr>
        <tr>
            <td class="date">July 7</td>
            <td><a href="https://wensun.github.io">Wen Sun</a></td>
            <td>Interactive Machine Learning</td>
        </tr>
        <tr>
            <td class="date">July 14</td>
            <td><a href="http://www.abedavis.com">Abe Davis</a></td>
            <td>Creativity & Communication in Research (with other scattered stories and advice)</td>
        </tr>
        <tr>
            <td class="date">July 21</td>
            <td>
                <a href="https://emilyryu.github.io">Emily Ryu</a><br>
                <a href="https://justinh.su">Justin Hsu</a><br>
                Lisa Li<br>
                <a href="https://about.yunhe-liu.com">Yunhe Liua</a>
            </td>
            <td>Applying to Grad School</td>
        </tr>
        <tr>
            <td class="date">July 28</td>
            <td>(see below!)</td>
            <td>Summer Research Symposium</td>
        </tr>
        <tr>
            <td class="date">August 4</td>
            <td><a href="https://sdean.website">Sarah Dean</a></td>
            <td>TK</td>
        </tr>
    </tbody>
</table>

---

### Summer Research Symposium

On Thursday, July 28 at 3pm, we'll have a symposium for all the research that has been going on this summer!
The symposium is an opportunity for summer researchers to share their experiences and progress with each other and with the rest of the department.

#### Program

1. 3:02pm:
   <b>Yijia Dai</b>
   <details>
   <summary><i>Competitive Pricing with Reinforcement Learning</i></summary>
   A reinforcement learning competitive pricing strategy that seeks the Nash Equilibrium policies among multiple agents. I set up the environment using RLlib and run experiment for tuning the models.
   </details>
2. 3:08pm:
   <b>Liam Daniels</b>
   <details>
   <summary><i>The Caiman Frontend</i></summary>
   I will explain the objective of Caiman in general, the original merged IR-corresponding language I made, and then where I am currently with the Value Language.
3. 3:14pm:
   <b>Ruyu Yan</b>
   <details>
   <summary><i>Color Contrastive Tone Mapping</i></summary>
   Color contrast is extensively applied in painting, film lighting, and different kinds of visual content creation, while manipulating color contrast in RGB space is difficult. In this project, we explored the space of parameterizing color contrast along a custom gradient and implemented interactive tools for image/video styling and tone mapping.
   </details>
4. 3:20pm:
   <b>Amelia Kovacs</b>
   <details>
   <summary><i>Evaluating Recommendation Systems and Modeling Human
   Behavior</i></summary>
   This summer my research has focused on different ways to simulate user interaction with recommendation systems. Such simulations must model human behavior, so I have been studying and implementing boredom, and (more recently) biased assimilation and social networks/peer influence.
   </details>
5. 3:26pm:
   <b>Pai Li</b>
   <details>
   <summary><i>Synchronization primitive for HDL</i></summary>
   We are building a synchronization barrier for the Calyx language, a HDL deviced at Cornell to provide a simple interface for people coming from software background to design hardware accelerators. The purpose of this structure is to give users the tool to ensure data is shared properly among multiple threads running in parallel.
   </details>
6. 3:32pm:
   <b>Caleb Kim</b>
   <details>
   <summary><i>Resource Sharing in Calyx</i></summary>
   We can examine the explicit control flow of Calyx programs in order to determine whether hardware, such as adders or registers, can be shared. I worked on improving the sharing pass, including expanding the pass to share user-defined hardware (not just Calyx primitives) and speeding the pass up.
   </details>
8. 3:38:
   <b>Melanie Gao</b>
   <details>
   <summary><i>Optimal voting and paradoxes</i></summary>
   A general introduction to computational social choice and the role of computing in answering societal questions, then share my research on optimal voting and paradoxes.
   </details>
9. 3:44pm:
   <b>Felix Rojas</b>
   <details>
   <summary><i>Edge IoT and Machine Learning Pipelining with Dash</i></summary>
   The Dash prototype extends a low-code development platform (LCDP) called Siemens Mendix. Dash allows developers to generate ML for Edge IoT using a drag-and-drop methodology similar to creating a slide deck. Cascade is considered for use as a key-value store with a highly optimized fast path specifically designed to support real-time AI and ML computation. The user interface is developed using the JavaScript React framework.
   </details>
10. 3:50pm:
   <b>Vivian Ding</b>
   <details>
   <summary><i>A Circuit Representation for Viaduct</i></summary>
   The Viaduct compiler uses information flow labels to synthesize distributed programs that use cryptography while defending source-level security policies specified by the developer. We developed a new, circuit-based intermediate representation for the language to support more efficient vector computations.
   </details>

#### Lightning Talk Guidelines

Presenters will each give a 4-minute lightning talk, followed by 1 minute for questions.
We recommend this format:

* 1 minute: Motivation and background. Introduce the general area and tell the audience why they should care. If you work on algorithms for fast genome sequence alignment, for example, tell us about biologists who are bored of waiting for their alignment jobs to complete. Get creative here---this is your chance to get your audience to care!
* 1 minute: Project introduction. Tell us about the project you contributed to. This might be broader than just what you contributed to. For example, if your work was on extending a programming language that other people in the lab had previously designed, tell us about the language and its goals.
* 2 minutes: What you did. What was your focus for the summer, and what did you concretely do all day? If you have results or outcomes, tell us about those. If your work was more diffuse than that, just tell us more narratively what kept you busy all summer.
* 1 minute: Reflection. While the rest of the talk is about the research, this last section is about *you* and your reactions to it. What did you enjoy about the research? What was challenging? Was this your first time---and if not, how did it differ from previous research experiences you've had? Did you learn anything? What advice would you give to someone considering summer CS research in the future? This section is totally open-ended; tell us anything you like about your experience this summer.

Here are some guidelines to keep in mind:

* Please practice your talk a few times before the symposium. We'll be strict with the timing, so make sure you can get the whole thing done in 5 minutes flat.
* Your work is probably collaborative with your mentors and other researchers. That's OK---you can summarize what the entire team has been up to. But somewhere in the talk, try to emphasize which pieces, if any, you think you can claim as your own.
* Your audience will have varied CS backgrounds, so they won't be an expert on the particular sub-area of your research. Try to explain enough so that someone who has only taken "standard" undergraduate CS classes, not specialized upper-division ones, can understand.

---

You can [edit this page on GitHub](https://github.com/cucapra/capra-public/edit/master/src/summer2022.md).
