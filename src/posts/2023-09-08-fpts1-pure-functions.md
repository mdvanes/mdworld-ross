---
title: 'FP & TS part 1: Functional Programming for TypeScript developers'
cover: ''
date: '08-09-2023'
category: 'webdevelopment'
tags:
  - webdevelopment
  - FP & TS
---

If you have made the concious decision to prefer TypeScript over JavaScript, you probably were convinced by its promise to reduce runtime errors. Without knowing anything about Functional Programming (FP from now on), it fulfills the same role. That's why FP and TS go hand in hand, in my opinion.

This should become a series of articles, where each article dives deeper into FP paradigmes. But we start with 2 core concepts, pure functions & immutability. These concepts, even on themselves, will promote cleaner coding and can be applied in any TypeScript project without libraries. More advanced concepts of FP are build on these principles, and that makes them a great place to start.

## Pure functions

A pure function is a function that:

- is deterministic
- has no side effects

Determinism means that for the same arguments, the function always returns the same output. It is predictable and stable.

With side effects, we mean that nothing outside the scope of the function is modified. UI code relies heavily on side effects, since rendering anything is outside the scope of a function. Manipulating the DOM, but also logging to the console, or mutating global variables are all examples of side effects.

Pure functions help prevent runtime errors because they are transparent and therefore easy to comprehend. When pure functions are written with conciseness and high cohesion in mind, they can improve readability. They are also easy to write tests for, because there is no environment to set up, you just have to supply the correct arguments.

Some examples:

not pure (non deterministic)

```typescript
const addRandom = (x: number): number => x + Math.random();
```

The function `addRandom` is not pure, because it is non-deterministic. Because of the random function, it possibly returns a different output for the same value of the argument `x`.

not pure (deterministic, but side effect)

```typescript
const add = (x, y) => {
  const sum = x + y;
  window.z = sum;
  return sum;
};
```

pure

```typescript
const add = (x, y) => x + y;
```

Compare math:

$$ f(x) = 2x ^2 + 3 $$

```
f(x) = 2 * x ^2 + 3

const f = (x) => 2 * Math.pow(x, 2) + 3;
```

```ts
const f = (x) => 2 * Math.pow(x, 2) + 3;
```

FP lends a lot of its power from mathematics. Pure functions can be proven mathematically. If a lot of your code is mathematically provable, you have less code to test empirically.

<!-- TODO improve theme for code syntax highlighting -->

<!-- TODO move to part 2 -->
## Immutability

<!--

Why FP and TS? The same reason: reducing runtime errors.

Pure functions & immutability
- sort, splice, spread, freeze, rtk's use of immer as an intransparent external lib for immutability

-->
