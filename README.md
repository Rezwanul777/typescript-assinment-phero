Interfaces vs Types

Interfaces and types in TypeScript have similarities but differ in key ways:

Feature	Interface	Type
Basic Syntax	interface Name {...}	type Name = {...}
Extending	Uses extends keyword	Uses & operator
Declaration Merging	Supports merging	Cannot be re-opened
Primitives & Unions	Cannot directly represent	Can represent directly

typescript

// Interface example
interface User {
  name: string;
  age: number;
}

interface Employee extends User {
  salary: number;
}

// Declaration merging
interface User {
  email: string; // Now User has name, age, and email
}

// Type example
type Animal = {
  species: string;
  sound: string;
}

type Dog = Animal & {
  breed: string;
}

// Types can represent primitives and unions
type ID = string | number;
type Coordinates = [number, number];

The keyof Keyword

The keyof keyword creates a union type of all property names from a type.

typescript

interface Person {
  name: string;
  age: number;
  address: string;
}

// Keys will be: "name" | "age" | "address"
type PersonKeys = keyof Person;

// Practical example: Type-safe property accessor
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const john = { name: "John", age: 30, address: "123 Main St" };
const johnsName = getProperty(john, "name"); // Returns "John" with type string
const johnsAge = getProperty(john, "age");   // Returns 30 with type number

any vs unknown vs never

These special types serve different purposes in TypeScript:

Type	Description	Safety Level
any	Opt out of type checking	⚠️ Low
unknown	Type-safe alternative to any	✅ High
never	Represents values that never occur	✅ High

typescript

// any - no type checking (avoid when possible)
let anyValue: any = 10;
anyValue = "hello";
anyValue.nonExistentMethod(); // No error (runtime error)

// unknown - type-safe (requires type checking)
let unknownValue: unknown = 10;
unknownValue = "hello";
// unknownValue.toString(); // Error: Object is of type 'unknown'

// Type checking required
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // Works
}

// never - for values that never occur
function throwError(): never {
  throw new Error("This function never returns");
}

function infiniteLoop(): never {
  while (true) {}
}

Enums in TypeScript

Enums create named constants with meaningful names instead of literal values.

typescript

// Numeric enum (default)
enum Direction {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}

let myDirection: Direction = Direction.North;

// String enum
enum HttpStatus {
  OK = "OK",
  NotFound = "NOT_FOUND",
  ServerError = "SERVER_ERROR"
}

function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("Request successful");
  }
}

Type Inference

Type inference is TypeScript's ability to automatically determine types.

typescript

// TypeScript infers 'number' type
let age = 30;

// TypeScript infers 'string' type
let greeting = "Hello";

// TypeScript infers return type as 'number'
function multiply(a: number, b: number) {
  return a * b;
}

// TypeScript infers types in arrays and objects
const mixed = [1, "two", 3]; // inferred as (string | number)[]
const user = { name: "John", age: 30 }; // inferred object structure

Benefits:

    Reduces verbosity while maintaining type safety
    Makes code cleaner and more readable
    Allows types to "flow" through your code

TypeScript and Code Quality

TypeScript improves code quality through:

    Early Error Detection
        Catches type errors before runtime
    Better IDE Support
        Autocomplete, hover information, refactoring tools
    Self-documenting Code
        Types serve as living documentation
    Safer Refactoring
        Type checking validates changes
    Enhanced Team Collaboration
        Clear interfaces between components

typescript

// Without TypeScript
function processUser(user) {
  // What properties does user have?
  return user.firstname + ' is ' + user.age + ' years old';
}

// With TypeScript
interface User {
  firstname: string;
  lastname: string;
  age: number;
}

function processUser(user: User): string {
  return `${user.firstname} is ${user.age} years old`;
}

Union and Intersection Types

Union and intersection types allow for flexible type compositions.
Union Types (OR)

Union types represent values that could be one of several types.

typescript

// Can be either string or number
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId("abc"); // Works
printId(123);   // Works

Intersection Types (AND)

Intersection types combine multiple types into one.

typescript

type HasName = { name: string };
type HasAge = { age: number };

// Must have both name AND age properties
type Person = HasName & HasAge;

const validPerson: Person = { name: "Alice", age: 28 }; // Valid
// const invalidPerson: Person = { name: "Bob" }; // Error: missing age property

This guide covers the fundamental TypeScript concepts that help developers build more robust and maintainable applications. For more details, refer to the official TypeScript documentation.
Retry


