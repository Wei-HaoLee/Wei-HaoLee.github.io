---
title: "Profiling the cancer-associated microbiome from small RNA sequencing data"
summary: "An analytical framework recovers microbial signals from host microRNA sequencing data to study microbiome–tumor relationships when direct microbial sampling is unavailable."
status: "Published"
year: 2020
updated: 2020-02-01
tags: ["Cancer microbiome", "Small RNA sequencing", "Colorectal cancer"]
links:
  - label: "Paper"
    href: "https://www.sciencedirect.com/science/article/abs/pii/S0006291X19322946"
  - label: "Preprint"
    href: "https://www.biorxiv.org/content/10.1101/807586v1"
overview:
  src: "/images/research/colorectal_microbiome_overview.jpg"
  alt: "Workflow for extracting microbial reads from TCGA colorectal cancer microRNA sequencing data using human-read filtering, preprocessing, alignment, annotation, and count-table analysis"
  caption: "The workflow removes reads that map to the human genome, processes and annotates the remaining sequences, and builds microbial count tables for abundance, enrichment, survival, and cancer-association analyses."
accent: "blue"
---

> **Research question:** Can existing host small-RNA datasets reveal the microbial communities associated with a tumor when direct microbiome sampling is difficult?

## Why look for microbial signal

The human microbiome can influence inflammation, immune responses, and cancer development. Studying those relationships is difficult in cancers where direct sampling of the local microbiome is unavailable or impractical.

At the same time, large cancer studies already contain host sequencing datasets collected for other purposes. Those data may retain microbial reads that can be recovered and analyzed instead of being discarded as off-target signal.

## The analytical framework

This project developed a workflow to extract and characterize microbial signals from host microRNA sequencing data. The analysis was applied to colorectal cancer samples from The Cancer Genome Atlas, allowing microbial composition to be studied using an existing cancer cohort.

## Biological findings

The analysis identified distinct microbiome-defined enterotypes and microbial genera associated with cancer stage. These patterns offer a view of tumor–microbiome relationships while demonstrating that archived small-RNA sequencing datasets can support questions beyond their original purpose.

The results are available in the [published paper](https://www.sciencedirect.com/science/article/abs/pii/S0006291X19322946) and the accompanying [bioRxiv preprint](https://www.biorxiv.org/content/10.1101/807586v1).
