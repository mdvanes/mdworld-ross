---
title: 'FP & TS chapter 3: Putting fun in functional operators'
cover: ''
date: '18-04-2025'
category: 'webdevelopment'
tags:
  - webdevelopment
  - FP & TS
---

When you have been developing in TypeScript for a while, you are probably already using the functional operators, even if you don't realize it. 

The operators `Array.prototype.map`, `Array.prototype.filter`, and `Array.prototype.reduce` are native JavaScript methods that are used to iterate over
collections without mutating the original collection. 

Let's first look at imperative style iteration. It's possible to iterate over different types of objects, e.g.

- string: `const x = "123";`
- array:  `const x = [1, 2, 3];`
- array-like objects: e.g. NodeList `const x = document.querySelectorAll('div');`
- Map, Set: `const x = new Set([1,2,3]);`

The oldest way in JavaScript to iterate is with the `for` statement, e.g. to iterate over the characters in a string:

```typescript
const str = "123";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
```

This also works for Arrays, but to use it with Sets, you would first have to convert it to an Array.
Also, this is quite verbose, because you have to manually define the counter `i`. Alternatively, the shorthand `for...of` can be used to solve both issues:

```typescript
const x = new Set([1,2,3]);
for (const elem of x) {
  console.log(elem);
}
```

## The map operator

With immutability in mind, what is wrong with this example?

```typescript
const sourceArr = [1,2,3];
const squareArr = [];
for( const item of sourceArr ) {
    squareArr.push(item * item);
}
console.log(squareArr);
```

The `squareArr` is mutated, and we want to avoid that it is unexpectedly manipulated. Let's encapsulate the iteration in a function, so `squareArr` can't be mutated outside that function:

```typescript
const sourceArr = [1,2,3];

const mapSquare = (arr) => {
    const squareArr = [];
    for( const item of arr ) {
        squareArr.push(item * item);
    }
    return squareArr;
}

console.log(mapSquare(sourceArr));
```

That's much safer! Now we can also build a more abstract function that can iteratively apply any function, instead of always squaring the value.

```typescript
const sourceArr = [1,2,3];

const map = (arr, fn) => {
    const resultArr = [];
    for( const item of sourceArr ) {
        resultArr.push(fn(item));
    }
    return resultArr;
}

const square = item => item * item;

console.log(map(sourceArr, square));
```

The `map` function returns a value, unlike the `for...of` loop from the initial example. The function `map` is a higher-order function, because it takes a function `fn` as a parameter. The function `square` is a pure function, and is trivial to unit test. 

Although it's educational to see how we could implement the `map` function, it's natively supported in TypeScript (with `Array.prototype.map`) as well as in many utility libraries like [Lodash](https://lodash.com).

```typescript
const sourceArr = [1,2,3];
const square = item => item * item;
console.log(sourceArr.map(x => square(x)));
```

Because `Array.prototype.map` expects a function with the iterated item as a parameter, and `square` *is* a function with an item as a parameter, the `map` call can be reduced to:

```typescript
console.log(sourceArr.map(square));
```

The conclusion that these two expressions are equivalent, is proven by what is called "equational reasoning".

The `map` function can also be explicitely typed to expect to return a `number`. That implies that the result of the `map` call is always expected to be an array of numbers.

```typescript
const sourceArr: number[] = [1, 2, 3];
const square = (item: number): number => item * item;
console.log(sourceArr.map<number>(square));
```

## The filter operator

Let's say you only want to keep the odd numbers from an array. With a `for...of` loop you could write it similar to the abstract `map` example above, like:

```typescript
const sourceArr = [1, 2, 3, 4, 5, 6];

const filter = (arr, predicateFn) => {
    const resultArr = [];
    for( const item of arr ) {
        if (predicateFn(item)) {
            resultArr.push(item);        
        }
    }
    return resultArr;
}

const isOdd = item => item % 2 === 1;

console.log(filter(sourceArr, isOdd));
```

In this example `isOdd` is a predicate function. A predicate is a function that always results in `true` or `false` and can therefore be used as a condition. 

You might realize how to use `Array.prototype.map` to write this without the `for` loop, but it's easier to use the `Array.prototype.filter` operator. Where `map` always returns the same amount of items that goes in, `filter` uses a predicate to determine for each item in the array if it should be returned. The output of `filter` is therefore of the same length or shorter than its input. 

```typescript
const sourceArr = [1, 2, 3, 4, 5, 6];
const isOdd = item => item % 2 === 1;
console.log(sourceArr.filter(isOdd));
```

## Type guards

In the `map` example the call used a generic to specify the return type with `.map<number>`. This does not work the same way with `filter`, because you can actually narrow the type based on the condition. E.g. if you are filtering odd numbers, numbers go in, but a specific subset of numbers comes out. This is extremely powerful because the type system can help you with this guarantee that the filtered values are of a specific subtype. We use TypeScript's type guard syntax for this.

Trivially, since a filter takes a predicate that always is `true` or `false`, you would expect the return type to be `boolean`:

```typescript
const sourceArr: number[] = [1, 2, 3, 4, 5, 6];
const isOdd = (item: number): boolean => item % 2 === 1;
console.log(sourceArr.filter(isOdd));
```

But in fact, you can specify what the type of `item` is when the predicate is `true`, by defining `isOdd` like a "type predicate":

```typescript
type Even = 2 | 4 | 6;
type Odd = 1 | 3 | 5; 
type OddOrEven = Odd | Even;

const sourceArr: OddOrEven[] = [1, 2, 3, 4, 5, 6];

const isOdd = (item: OddOrEven): item is Odd => item % 2 === 1;

console.log(sourceArr.filter<Odd>(isOdd));
```

### Practical example: a response may have an error type

This example is contrived, so let me give a practical example with a fetch response that may be an error. Using the type guard guarantees that after the conditional the response is of one of the subtypes. You can also see that a type guard predicate can be used without using a `filter`.

Given the types and function:

```typescript
interface SomeSuccess {
  data: string;
}

interface SomeError {
  message: string;
}

type SomeResponse = SomeSuccess | SomeError;

const mutation = (): SomeResponse => ({ data: 'some data' });
```

This would fail, because response could also be of type `SomeSuccess`:

```typescript
const response = mutation();
console.error(response.message); // Error: Property 'message' does not exist on type 'SomeSuccess'
```

Checking with `if(response.message)` is not possible, for the same reason. You _can_ check with the `in` operator:

```typescript
const response = mutation();
if('message' in response) {
    console.error(response.message); // derived to be SomeError
    return;
}
console.debug(response.data); // derived to be SomeSuccess
```

But if you extract the conditional to a function, it would fail if it has a normal `boolean` return type:

```typescript
const isError = (response: SomeResponse): boolean => 'message' in response;

const response = mutation();
if(isError(response)) {
    // Property 'message' does not exist on type 'SomeSuccess'
    console.error(response.message);
    return;
}
// Property 'data' does not exist on type 'SomeError'
console.debug(response.data);
```

And you can fix it by writing the conditional like a type guard:

```typescript
const isError = (response: SomeResponse): response is SomeError => 'message' in response;
```

### Practical example: undefined checks

Another useful application of a filter with a type guard is reducing checks for undefined values in your conditions. Assume you get an array of objects from a service, which we will call `list`. We want to get the property `label` for each of these objects and use these later. When only a `map` is used, the resulting array may contain undefined values:

```typescript
interface Bat {
    id: number;
    label?: string;
}

const list: Array<Bat> = [{ id: 0, label: 'first' }, { id: 1 }];

const newList = list.map(n => n.label);
```

The type of `newList` is now derived as `Array<string | undefined>`. This makes it hard to follow up transformations, because you will have to perform undefined checks. We can fix this by doing this up front with a type guard we will call `isDefined`.

```typescript
const isDefined = <T>(value: T | undefined): value is T => {
  return typeof value !== 'undefined';
};

const newList = list.map(n => n.label).filter(isDefined);
```

The type of `newList` is now derived as `Array<string>`. Note that for older versions of TypesScript if you would not use the type guard syntax `value is T`, this would not work and `newList` would still have the type `Array<string | undefined>`! 

This has been fixed since TypeScript 5.5 with [Inferred Type Predicates](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#inferred-type-predicates).

In the next chapter we will look at more functional operators, including `Array.prototype.reduce`.

_Acknowledgement:_ this article was inspired by the course [Functional-Light JavaScript, v3 by Kyle Simpson](https://frontendmasters.com/courses/functional-javascript-v3/).
