---
title: 'FP & TS chapter 1: Functional Programming for TypeScript developers'
cover: ''
date: '10-10-2023'
category: 'webdevelopment'
tags:
  - webdevelopment
  - FP & TS
---

If you have made the concious decision to prefer TypeScript over JavaScript, you were probably convinced by its promise to reduce runtime errors. Without knowing anything about Functional Programming (FP from now on), it fulfills the same role. That's why FP and TS go hand in hand, in my opinion.

This should become a series of articles, where each article dives deeper into FP paradigms. But we start with two core concepts, pure functions & immutability. These concepts, even by themselves, will promote cleaner coding and can be applied in any TypeScript project without libraries. More advanced concepts of FP are build on these principles, and that makes them a great place to start.

## Pure functions

A pure function is a function that:

- is deterministic
- has no side effects

Determinism means that for the same arguments, the function always returns the same output. It is predictable and stable.

With side effects, we mean that nothing outside the scope of the function is modified. UI code relies heavily on side effects, since rendering anything is outside the scope of a function. Manipulating the DOM, but also logging to the console, or mutating global variables are all examples of side effects.

Pure functions help prevent runtime errors because they are transparent and therefore easy to comprehend. When pure functions are written with conciseness and high cohesion in mind, they can improve readability. They are also easy to write tests for, because there is no environment to set up, you just have to supply the correct arguments.

Some examples:

```typescript
const addRandom = (x: number): number => x + Math.random();
```

The function `addRandom` is not pure, because it is non-deterministic. Because of the random function, it possibly returns a different output for the same value of the argument `x`.

```typescript
const add = (x: number, y: number): number => {
  const sum = x + y;
  window.z = sum;
  return sum;
};
```

The function `add` is not pure, because although it is deterministic, it can have side effects by modifying the global variable `window`.

```typescript
const simpleAdd = (x: number, y: number): number => x + y;
```

The function `simpleAdd` is pure, because it is deterministic and has no side effects.

## Mathematics

FP lends a lot of its power from mathematics. Pure functions can be proven mathematically. If a lot of your code is mathematically provable, you have less code to test empirically.

Compare the mathematical equation:

```math
f(x) = 2x ^2 + 4x + 3
```

to the function:

```ts
const f = (x: number): number => 2 * Math.pow(x, 2) + 4 * x + 3;
```

Both describe the same cubic polynomial expression called `f` that takes an argument `x` and apply basic arithmetic operations on `x`. There are no side effects (or are there?), and the result is deterministic. Because they can be mathematically proven, we know that `f` can be solved by the quadratic formula, there is no reason to write unit tests to figure that out!

## The scale of purity

Unfortunately, a function is not just "pure" or "not pure". Since output of any kind can be considered as side effects, it would not be useful to have a program of only completely pure functions. It's more practical to see a function as "more pure" or "less pure". To give an extreme example, look at the function `f` from the previous previous paragraph. Practically speaking, I would consider this quite pure. But you could argue that `Math` is a global and could be overridden between calls of `f`. To make that function more pure by writing it like this:

```ts
const f = (x: number, pow: typeof Math.pow): number => 2 * pow(x, 2) + 4 * x + 3;
```

To my taste, that's just a tad impractical.

In general, it's a good idea to isolate pure functions from functions you know to be not pure. For example, sometimes you actually want to have a random function, like in `addRandom` and you could deal with this by separating the pure part and the not pure part into separate functions:

```ts
const simpleAdd = (x: number, y: number): number => x + y;
const addRandom = (x: number): number => simpleAdd(x, Math.random());
```

This way the undeterministic lines of code are limited to the absolute minimum.

Another good way to limit side effects is by employing immutability, which will be the topic of the [next chapter](./fpts2-immutability).

_Acknowledgement:_ this article was inspired by the course [Functional-Light JavaScript, v3 by Kyle Simpson](https://frontendmasters.com/courses/functional-javascript-v3/).
