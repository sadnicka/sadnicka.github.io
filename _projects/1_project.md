---
layout: page
title: computing phenotype in hyperkinetic movement disorders
description: 
img: assets/img/1_compute.jpg
importance: 1
category: phenomenology
related_publications: false
---

 We group patients with movement disorders into core categories called **phenotypes** depending the nature of dysfunctional movement. Many hundreds of different neural insults or diseases collapse down onto these limited number of phenotypes and we understand poorly why the sensorimotor system appears to fail in this limited number of ways. Human pose estimation leverages deep learning methods to track human pose from video.  Such methods allow us to fully capture human movement tracking movement disorders to millimetre precision over time.  This data invites us to move towards a quantitative framework for human movement disorders, progressing beyond ambiguous semantic definitions that can have low reliability.  Quantification will reveal invariant features of each phenotype but also characterise  variability.   


<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/funnel.jpg" title="degeneracy" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mapping.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     On the left, a cartoon of the many-to-one mapping between disease and phenotype is shown, Right, each level of organisation in the nervous system has unique units and each needs independent understanding.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

In a major five year project funded by the Wellcome Trust we will study patients with hyperkinetic movement disroders such as chorea, dystonia, myoclonus, tics and tremor.  We will capture their movement while they perform a range of tasks.  Key goals are to: 1) Define the feature space and boundaries of each phenotype 2) Model the behavioural signatures for each phenotype 3) Evaluate which behavioural tasks have the most 'signal' for each phenotype 4) Reveal how a data-led clustering of hyperkinetic movement compares to current clinical classification. 

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}




 
In a major five year project funded by the Wellcome Trust we will study patients with hyperkinetic movement disroders such as chorea, dystonia, myoclonus, tics and tremor.  We will capture their movement while they perform a range of tasks.  Key goals are to: 1) Define the feature space and boundaries of each phenotype 2) Model the behavioural signatures for each phenotype 3) Evaluate which behavioural tasks have the most 'signal' for each phenotype 4) Reveal how a data-led clustering of hyperkinetic movement compares to current clinical classification. 