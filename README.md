# 📘 TypeScript Essentials: Concepts & Interview Questions

This document covers key TypeScript concepts in a clean, easy-to-understand format. Use it for interviews, quick reference, or learning.

---

## 1️⃣ Differences Between `interface` and `type`

| Feature             | `interface`                                   | `type`                                                      |
|---------------------|-----------------------------------------------|--------------------------------------------------------------|
| Basic Purpose       | Describes object structure                    | Defines any type (objects, unions, primitives, etc.)         |
| Syntax              | `interface Person { name: string }`           | `type Person = { name: string }`                             |
| Extending           | Supports `extends`                            | Use intersections (`&`) for extending                        |
| Declaration Merging |  Supports re-declaration (merged)           |  Cannot be re-declared                                     |
| Best Use Cases      | Object structures, class shapes               | Complex or combined types, unions, tuples, etc.              |

### ✅ Example:
```ts
interface User {
  name: string;
  age: number;
}

type ID = string | number;
type Employee = User & { salary: number };

2️⃣ What is keyof in TypeScript?

The keyof keyword returns a union of property names of a given type.
✅ Example:

type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"

🔹 Use Case: Helps in building reusable, type-safe functions with generics.
3️⃣ Difference Between any, unknown, and never
Type	Description	When to Use
any	Disables type checking completely (unsafe)	Last resort when you don't care about types
unknown	Similar to any but safer — you must type-check it first	When accepting values of any type safely
never	Represents a value that never occurs (e.g., function that throws)	For unreachable code or error functions
✅ Example:

let a: any = "Hi";        // Can be anything
let b: unknown = 42;      // Must check before use

function fail(): never {
  throw new Error("Fail!");
}

4️⃣ What are Enums in TypeScript?

Enums define a set of named constants.
 Numeric Enum:

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

 String Enum:

enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}

 Use Case: Improves readability and avoids hardcoded strings/numbers.
5️ What is Type Inference?

TypeScript can automatically determine the type of a variable based on its value.
 Example:

let username = "Alice";  // Inferred as string
let age = 30;            // Inferred as number

 Why It’s Helpful:

    Reduces the need for manual type annotations

    Keeps code cleaner

    Still ensures type safety

6️⃣ How TypeScript Improves Code Quality and Maintainability

 Error Prevention:

    Detects type mismatches at compile time

 Improved Collaboration:

    Developers get clear contracts with types and interfaces

 Safe Refactoring:

    Renaming or changing types updates across the project with IDE support

## Documentation & Autocomplete:

    Types serve as inline documentation

    Improves editor suggestions and prevents misuse

 ## Scalability:

    Essential for large codebases and team collaboration

7️⃣ Union vs. Intersection Types
🔹 Union Type (|)

A value can be one of multiple types.

type ID = string | number;

function printId(id: ID) {
  console.log(id);
}

🔹 Intersection Type (&)

Combines multiple types — the result must match all.

type Person = { name: string };
type Employee = { company: string };

type FullInfo = Person & Employee;

const user: FullInfo = {
  name: "John",
  company: "OpenAI"
};

## Final Tip

Use TypeScript's type system to:

    Prevent bugs before runtime

    Write clean and scalable code

    Help your team understand and maintain the code easily