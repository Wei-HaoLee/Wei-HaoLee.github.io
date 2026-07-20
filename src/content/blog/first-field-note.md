---
title: "A small model can still hold a large question"
description: "A note on choosing the simplest model that preserves the mechanism you actually care about."
published: 2026-07-05
tags: ["Modeling", "Reading notes"]
readingTime: "4 min"
---

The point of a small model is not to make the world look small. It is to keep the mechanism visible long enough to reason about it.

## A tiny example

Suppose a state $x_t$ changes according to its current value and a bounded external influence:

$$
x_{t+1} = r x_t(1-x_t) + \varepsilon_t.
$$

Even this compact expression gives us several distinct questions: stability, sensitivity to $r$, and what changes when $\varepsilon_t$ is structured rather than random.

```python
def step(x, growth, disturbance=0.0):
    return growth * x * (1 - x) + disturbance

trajectory = [0.2]
for _ in range(100):
    trajectory.append(step(trajectory[-1], growth=3.2))
```

The writing system handles Markdown, highlighted code, LaTeX, linked figures, footnotes, and—when needed—custom MDX components.
