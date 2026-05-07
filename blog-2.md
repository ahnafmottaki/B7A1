# How `Pick` and `Omit` prevent code duplication

Typescript's Pick and Omit utility type is used in every project to prevent code duplication while creating slices of a master interface. By the end of the blog, You will know `why` and `how` to use Pick and Omit.

Let's say in your react or any project, you are working with a `Book` interface and we will call it the master interface.

```typescript
interface Book {
  id: string;
  name: string;
  genre: string[];
  category: string;
  author: {
    authorId: string;
    name: string;
    address: string;
  };
}
```

Now you encounters a situation where you need to work with only the book information, you don't need the author's information.There's two way to achieve that.

    1. either you duplicate it like below

```typescript
interface Book {
  id: string;
  name: string;
  genre: string[];
  category: string;
}
```

You are writing the same code again just without the authors infomation. And you are breaking the most important rule of coding which is DRY (Don't Repeat Yourself). You can also make any mistake while writing the same type again. Rather,

    2. You can  use Typescript's Omit Utility type

```typescript
type BookInformation = Omit<Book, "author">;
// BookInformation
/*
{
  id: string;
  name: string;
  genre: string[];
  category: string;
}
*/
```

So use Omit and Pick when you need to extract types from a master interface which prevent code duplication and keeps your code clean

---

### Here's another example with Pick

Now comes a situation where you have to work with only author information from the `Book` master interface. You can use `Pick` to extract the type.

```typescript
type Author = Pick<Book, "author">;
// Author
/*

{
    authorId: string;
    name: string;
    address: string;
}

*/
```

So using Typescript's utility types like `Pick` and `Omit` prevents code duplication and unexpected errors while building or extracting type from a master interface. That's why these utility types is used in almost every typescript project.
