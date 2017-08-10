---
title: "Research: Vision Mode"
layout: layout.html
---
# Reconfiguring the Imaging Pipeline for Computer Vision

<figure>
  <img src="bars_error_norm-special.svg">
  <figcaption>
    Vision quality impact for our proposed camera pipeline in vision mode.
    The second group shows a pipeline with only demosaicing and gamma compression enabled, and the third also enables denoising.
  </figcaption>
</figure>

Advancements in deep learning have ignited an explosion of research on efficient hardware for embedded computer vision. Hardware vision acceleration, however, does not address the cost of capturing and processing the image data that feeds these algorithms. We examine the role of the image signal processing (ISP) pipeline in computer vision to identify opportunities to reduce computation and save energy. The key insight is that imaging pipelines should be be configurable: to switch between a traditional photography mode and a low-power vision mode that produces lower-quality image data suitable only for computer vision. We use eight computer vision algorithms and a reversible pipeline simulation tool to study the imaging system’s impact on vision performance. For both CNN-based and classical vision algorithms, we observe that only two ISP stages, demosaicing and gamma compression, are critical for task performance. We propose a new image sensor design that can compensate for these stages. The sensor design features an adjustable resolution and tunable analog-to-digital converters (ADCs). Our proposed imaging system’s vision mode disables the ISP entirely and configures the sensor to produce subsampled, lower-precision image data. This vision mode can save ~75% of the average energy of a baseline photography mode with only a small impact on vision task accuracy.

TODO: Figures; main findings.

## Publication

Mark Buckler, Suren Jayasuriya, and Adrian Sampson.
Reconfiguring the Imaging Pipeline for Computer Vision.
In the IEEE International Conference on Computer Vision (ICCV), 2017.

[preprint PDF][paper], [supplementary material PDF][supp]

    @inproceedings{buckler-iccv2017,
        author = {Mark Buckler and Suren Jayasuriya and Adrian Sampson},
        title = {Reconfiguring the Imaging Pipeline for Computer Vision},
        booktitle = {The IEEE International Conference on Computer Vision (ICCV)},
        year = {2017},
    }

[paper]: /pubs/visionmode-iccv2017.pdf
[supp]: /pubs/visionmode-iccv2017-supplemental.pdf

## Code

We have released a set of [open-source tools][gh] for modeling approximate camera pipelines.
The main component is the tool called "CRIP" in the [paper][], which can simulate a camera sensor and ISP chip forward and "backward." 
The backward mode can convert from a standard image (i.e., a JPEG) into an approximation of its original RAW format.
Then, you can run the pipeline *forward* again to convert the image to what it would have looked like had it been captured with a hypothetical pipeline configuration.
We use this tool to convert standard vision datasets like [ImageNet][], [CIFAR][], and [COCO][] to degraded versions so we can train and test computer vision algorithms.

[imagenet]: http://www.image-net.org
[cifar]: https://www.cs.toronto.edu/~kriz/cifar.html
[coco]: http://mscoco.org

Check out the source from the [repository on GitHub][gh].
The conversion tool is mainly written in [Halide][] with some auxiliary support scripts.
The camera model is based on [this paper by Kim et al.][kim] (for details, see this [CVPR 2016 tutorial by Michael S. Brown][brown]).
The license is [MIT][].

[mit]: https://opensource.org/licenses/MIT
[gh]: https://github.com/cucapra/approx-vision
[halide]: http://halide-lang.org
[kim]: http://ieeexplore.ieee.org/document/6158647/
[brown]: http://www.eecs.yorku.ca/~mbrown/CVPR2016_Brown.html

## Results and Visualizations

We collected a lot of vision task accuracy data to study the potential for a vision mode.
The raw data and plotting infrastructure for all these results is [on GitHub][plot-gh].
You can use this repository to reproduce all the charts in the paper.

Because we had trouble deciding which kinds of plots to include in the paper, we have many many other visualizations for the same data.
Thanks to the magic of [Vega-Lite][], you can see in-browser, interactive plots with fancy tooltips.
View a [main set of plots](https://capra.cs.cornell.edu/vision-plots/), a grid of [single-benchmark plots](https://capra.cs.cornell.edu/vision-plots/singles.html), or our [quantization and resolution sweeps](https://capra.cs.cornell.edu/vision-plots/sweeps.html).

[plot-gh]: https://github.com/cucapra/vision-plots
[vega-lite]: https://vega.github.io/vega-lite/

## Contact

* [Mark Buckler][mark] &lt;<mab598@cornell.edu>&gt;
* [Suren Jayasuriya][suren] &lt;<sjayasur@andrew.cmu.edu>&gt;
* [Adrian Sampson][adrian] &lt;<asampson@cs.cornell.edu>&gt;

[mark]: http://www.markbuckler.com
[suren]: http://www.andrew.cmu.edu/user/sjayasur/website.html
[adrian]: http://www.cs.cornell.edu/~asampson/
