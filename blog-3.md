# "Generics" Modern Way to build reusable components and functions

Generics is a typescript feature which let's us create a reusable piece of logic that can work with many different data types while still keeping the strict type safety.

Let's see it with an example below.

```typescript
// A function to get the first element of any array

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirstElement([1, 2, 3]); // returns number
const firstStr = getFirstElement(["a", "b"]); // returns string
```

Here you use a single function to get the first element of any array. But without generic, you need to create different function for different types of elements. One for array of `string`.

```typescript
function getFirstElement(arr: string[]): string | undefined {
  return arr[0];
}
```

And another for array of `number`.

```typescript
function getFirstElement(arr: number[]): number | undefined {
  return arr[0];
}
```

And also for other types of array, which is illogical to make cause this function performs the same operations regardless of the data type. And in these situation `generics` comes in handy.

---

### Another example with a class

You are making a data structure `stack` using class. The stack can contain any kind of data. You just need to interect with the stack ( push, pop, peek) regardless of the data type of stack elements.

Rather than making a different `stack` class for different data types.

```typescript
class NumberStack {
  elements: number[];
  constructor() {
    this.elements = [];
  }

  peek(): number {}
  pop(): void {}
  push(value: number): void {}
}

class StringStack {
  elements: string[];
  constructor() {
    this.elements = [];
  }

  peek(): string {}
  pop(): void {}
  push(value: string): void {}
}
```

You can create a single `stack` class which works for different data types and also keeps strict type safety

```typescript
class Stack<T> {
  elements: T[];
  constructor() {
    this.elements = [];
  }
  peek(): T {}
  pop(): void {}
  push(value: T): void {}
}
```

Now you can create stack for different data types using a single `stack` class regardless of the data type and also have strict type safety

```typescript
const numberStack = new Stack<number>();
numberStack.push(56); // must pass number
numberStack.peek(); // returns a number
numberstack.pop(); // removes the stacked number
```

You can't pass or use anything unrelated to the datatype you passed while creating the stack.

Now here's a stack of string.

```typescript
const stringStack = new Stack<string>();
stringStack.push(56); // must pass string
stringStack.peek(); // returns a string
stringStack.pop(); // removes the stacked string
```

---

To conclude, `generics` gives us the power to make a single function or class and use it for any data types we want. Thus it prevents code duplication and keeps the code clean and maintainable while still keeping stict type safety.

[_Back To Top_](#generics-modern-way-to-build-reusable-components-and-functions)
