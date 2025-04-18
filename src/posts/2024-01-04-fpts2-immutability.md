---
title: 'FP & TS chapter 2: Immutability'
cover: ''
date: '04-01-2024'
category: 'webdevelopment'
tags:
  - webdevelopment
  - FP & TS
---

The previous article explained what side effects are and why it is important to prevent them and to write pure functions.

The example of a function with a side effect was:

```typescript
const add = (x: number, y: number): number => {
  const sum = x + y;
  window.z = sum;
  return sum;
};
```

Let's look at a similar example, but without the global window variable. Instead, an array that is declared outside the function is updated:

```typescript
const heroes: string[] = ['Dent', 'Prefect'];

const addHero = (h: string) => {
  heroes.push(h);
};

addHero('Marvin');
```

Although the `heroes` array is declared with `const`, that just means that it can't be reassigned, e.g. with `heroes = []`. In fact, the array itself can still be _mutated_. This is the default behavior for data structures in JavaScript. That is why `addHero` causes a side-effect, it mutates the `heroes` array that was declared outside the scope of the function, so when the `heroes` array is accessed after calling `addHero`, it _will_ contain the value `Marvin`.

Typescript offers the `readonly` modifier to make the compiler prevent calling mutating methods on a data structure:

```typescript
const heroes: readonly string[] = ['Dent', 'Prefect'];

const addHero = (h: string) => {
  heroes.push(h); // TS2339 property 'push' does not exist on type 'readonly string[]'
};

addHero('Marvin');
```

## Copying instead of mutating

Instead you should create a new array and return that inside of `addHero`. You could create an intermediary array in `addHero` and push to it, and then return it. In functional style you would do this without an intermediary variable. TypeScript has a very readable way to do this, with the spread operator:

```typescript
type Heroes = readonly string[];
const heroes: Heroes = ['Dent', 'Prefect'];

const addHero = (hs: Heroes, h: string) => {
  return [...hs, h];
};

const newHeroes: Heroes = addHero(heroes, 'Marvin');
```

This copies the values of the `heroes` array and the new value to a new array, preventing side effects on the `heroes` array. This also applies to objects:

```typescript
interface Hero {
  readonly name: string;
}

const dent: Hero = {
  name: 'Dent'
};

const updateName = (h: Hero, n: string) => {
  // h.name = n; // TS2540 cannot assign to 'name' because it is a read-only property
  // return h;
  return {
    ...h,
    name: n
  };
};

const newDent = updateName(dent, 'Arthur');
```

## Mutating methods

The mutating methods `pop`, `shift`, and `unshift` on arrays can all be solved with similar solutions to `push`:

```ts
const addHeroToStart = (hs: Heroes, h: string) => {
  // Instead of: hs.unshift(h); return hs;
  return [h, ...hs];
};
const lastHero = (hs: Heroes, h: string) => {
  // Instead of: return hs.pop();
  return hs.at(-1);
};
const firstHero = (hs: Heroes, h: string) => {
  // Instead of: return hs.shift();
  return hs.at(1);
};
```

It it also possible to write similar solutions for the mutating methods `sort`, `splice`, and `reverse`. But we don't have to! Modern browsers benefit from new copying versions of these methods. It is just a matter of replacing them and returning directly:

```ts
// mutating method:
hs.reverse();
return hs;
// copying method:
return hs.toReversed();
```

## Freezing

Besides marking properties on objects as `readonly` to let the TypeScript compliler notice unintended mutations, we can also add runtime protection by sealing or freezing objects with `Object.seal()` or `Object.freeze()`. Freezing offers the most protection of the two: existing properties are made immutable and can't be reassigned. It will fail silently, or when called from a strict mode context, it will throw a TypeError.

This works for Objects as well as Arrays, for the complete documentation and examples see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

## Libraries

Instead of freezing objects and arrays manually, there are libraries that provide immutable data structures. E.g. the aptly named [Immutable](https://immutable-js.com/) provides several collection types, like Map. ECMAScript natively already has a collection type Map, but that one is mutable. Immutable's Map returns a new Map when the original Map was modified, for instance by setting a property.

Another library is [Immer](https://immerjs.github.io/immer/). It is used internally in e.g. [Redux Toolkit](https://redux-toolkit.js.org/). It converts data structures to be immutable _while preserving the mutable methods_. To clarify:

```ts
import { produce } from 'immer';

const nextState = produce(baseState, (draft) => {
  draft[1].done = true;
  draft.push({ title: 'Tweet about it' });
});
```

In this example, `draft` is **not** mutable. It was made immutable by Immer. But the method `push` still updates it like you would expect from mutable object. It does this by internally copying the object.

While the library itself is solid, it introduces one drawback that you should be very wary of in my opinion: someone who is not familiar with Immer might be confused and think this object is mutable. At a bad moment, it may even be copy-pasted to a place that is not protected by Immer. That's why I would not disregard the more verbose, but explicitly immutable, alternatives.

In the [next chapter](./fpts3-putting-fun-in-functional-operators) we will look at the functional operators.

_Acknowledgement:_ this article was inspired by the course [Functional-Light JavaScript, v3 by Kyle Simpson](https://frontendmasters.com/courses/functional-javascript-v3/).
