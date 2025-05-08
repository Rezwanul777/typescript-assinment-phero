## 1️⃣ What are some differences between `interface` and `type` in TypeScript?

| Feature               | `interface`                                | `type`                                         |
|------------------------|---------------------------------------------|------------------------------------------------|
| Basic Use              | Describes the shape of objects              | Can describe anything (objects, unions, etc.)  |
| Extension              | Can be extended using `extends`             | Use `&` (intersection) to combine types        |
| Merging                | ✅ Supports declaration merging              | ❌ Cannot be merged                             |
| Use Case               | Best for object structure / class contracts | Best for complex types (union, tuple, etc.)    |

```ts
interface Person {
  name: string;
}

type ID = string | number;