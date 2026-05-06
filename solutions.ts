// ? Problem 1
function filterEvenNumbers(numOfArray: Array<number>) {
  return numOfArray.filter((num) => num % 2 === 0);
}

// ? Problem 2
function reverseString(str: string) {
  return str.split("").reverse().join("");
}

// ? Problem 3

function checkType(input: string | number) {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
}

// ? Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// ? Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

// ? Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// ? Problem 7
function getIntersection(
  numArrayOne: Array<number>,
  numArrayTwo: Array<number>,
) {
  const numOneSet = new Set(numArrayOne);
  const intersectedArray: Array<number> = [];
  numArrayTwo.forEach((num) => {
    if (numOneSet.has(num)) {
      intersectedArray.push(num);
    }
  });
  return intersectedArray;
}
