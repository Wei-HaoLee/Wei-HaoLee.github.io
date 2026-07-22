---
title: "Disentangling condition-specific signals from complex sequencing data"
summary: "ALPINE separates condition-associated structure from shared and confounding variation while directly prioritizing genes linked to the condition of interest."
status: "Published"
year: 2025
updated: 2025-12-01
tags: ["Single-cell RNA-seq", "Interpretable NMF", "Batch correction"]
links:
  - label: "Paper"
    href: "https://doi.org/10.1101/gr.280566.125"
  - label: "Code"
    href: "https://github.com/ylaboratory/ALPINE"
  - label: "Package"
    href: "/packages/#alpine"
overview:
  src: "/images/research/alpine_overview.png"
  alt: "ALPINE workflow showing multi-condition and multi-batch sequencing input, matrix decomposition, label-guided decomposition, and three analysis applications"
  caption: "ALPINE combines non-negative matrix decomposition with label-guided structure to identify condition-associated genes and cell types while separating batch effects."
featured: true
accent: "cyan"
---

> **Research question:** How can sequencing studies isolate a biological condition of interest without erasing meaningful variation or hiding the result inside a black-box model?

## The analysis challenge

Modern sequencing studies often profile several phenotypic dimensions at once. Biological conditions, technical batches, and shared cellular programs become intertwined, making it difficult to identify which genes and patterns belong to the condition being studied.

Many integration and batch-correction methods can reduce unwanted variation, but that performance may come at the cost of interpretability. The corrected representation can be useful while offering limited insight into the genes that drive a condition-specific signal.

## The ALPINE framework

[ALPINE](https://github.com/ylaboratory/ALPINE) uses supervised nonnegative matrix factorization to separate condition-specific signals from shared and confounding variation. The model addresses signal separation and gene prioritization together, so its factors remain connected to the biological question.

This design supports complex experimental settings in which several sources of variation must be considered explicitly rather than collapsed into a single correction step.

## What the model makes visible

ALPINE produces an interpretable decomposition of high-dimensional sequencing data and directly highlights genes associated with the target condition. That combination helps turn a corrected dataset into a biological explanation rather than treating correction as the end of the analysis.

The full evaluation appears in the [Genome Research paper](https://doi.org/10.1101/gr.280566.125). The open-source implementation and installation details are also available on the [research software page](/packages/).
