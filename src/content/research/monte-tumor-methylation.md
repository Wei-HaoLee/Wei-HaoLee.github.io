---
title: "Recovering tumor-intrinsic DNA methylation signals from bulk cancer epigenomes"
summary: "MONTE estimates tumor purity and corrects DNA methylation at single-CpG resolution, recovering tumor-intrinsic regulatory signals from bulk cancer samples."
status: "Preprint"
year: 2026
updated: 2026-01-22
tags: ["Cancer epigenomics", "DNA methylation", "Tumor purity"]
links:
  - label: "Preprint"
    href: "https://doi.org/10.64898/2026.01.22.701164"
  - label: "Code"
    href: "https://github.com/ylaboratory/MONTE"
  - label: "Package"
    href: "/packages/#monte"
overview:
  src: "/images/research/monte_overview.png"
  alt: "MONTE workflow showing pan-cancer model training, Bayesian transfer learning, tumor-purity estimation, methylation correction, and downstream applications"
  caption: "MONTE learns pan-cancer relationships between DNA methylation and tumor purity, adapts them to new datasets through Bayesian transfer learning, and produces purity-adjusted methylation profiles for downstream analysis."
featured: true
accent: "violet"
---

> **Research question:** How can we separate tumor-intrinsic methylation patterns from the non-tumor signal mixed into bulk cancer samples?

## The biological problem

DNA methylation profiling is a cornerstone of cancer epigenomics, but a bulk tumor measurement combines signals from tumor and non-tumor cells. That mixture can obscure the regulatory patterns that belong to the tumor itself and can confound downstream biological or clinical analyses.

## The MONTE framework

[MONTE](https://github.com/ylaboratory/MONTE) is a cancer-agnostic framework that estimates tumor purity and corrects DNA methylation signals directly from bulk data. It works at single-CpG resolution by learning probe-wise relationships between observed methylation and tumor purity.

The method does not require matched normal samples, predefined probe sets, or cancer-specific reference models. This makes the same framework applicable across cancer types while keeping the correction interpretable at the level of individual methylation probes.

## Why it matters

By recovering tumor-intrinsic epigenomic profiles, MONTE provides cleaner inputs for studying cancer regulation and for downstream analyses that would otherwise inherit tumor-purity bias.

The [preprint](https://doi.org/10.64898/2026.01.22.701164) describes the model, validation, and cross-cancer evaluation. The implementation is also listed on the [research software page](/packages/).

## Related work: ARUNA

[ARUNA](https://www.biorxiv.org/content/10.64898/2026.01.29.702677v1), developed in collaboration with Janmajay and the [Yao laboratory](https://ylab.rice.edu/), addresses a complementary methylation problem. It imputes missing or undetected methylation profiles from a subset of probes and can upscale lower-resolution RRBS measurements toward higher-resolution WGBS profiles.
