# no-redundant-enum-values

🚀 **Disallow redundant explicit values in numeric enums.**

## 📌 Rule Overview
This rule ensures that **numeric enums do not explicitly assign values that TypeScript automatically assigns by default**.

### ✅ Correct Code
```typescript
enum Status {
    Pending,
    Approved,
    Rejected
}

enum CustomValues {
    Start = 1,
    Middle = 3,
    End = 5
}

enum Example {
    One = 0,
    Two,
    Three,
    Custom = 5
}
```

### ❌ Incorrect Code
```typescript
enum Status {
    Pending = 0,  // ✅ Allowed (first value)
    Approved = 1, // ❌ Redundant
    Rejected = 2  // ❌ Redundant
}

enum Example {
    One = 0,  // ✅ Allowed (first value)
    Two = 1,  // ❌ Redundant
    Three = 2,  // ❌ Redundant
    Custom = 5 // ✅ Allowed (custom value)
}
```

## 🎯 Why is this rule useful?
- TypeScript automatically assigns **`0, 1, 2, 3...`** to numeric enums.
- **Explicitly setting values that TypeScript already assigns is unnecessary**.
- Improves **readability** and prevents redundant code.

## 🛠 Rule Details
This rule reports an error if a numeric enum **explicitly assigns values that match TypeScript’s default behavior**. It does **not** report an error if:
- The **first value is explicitly set** (e.g., `Pending = 0` or `Start = 1`).
- The enum members have **custom values that are not sequential**.

## 🔧 Fixable
This rule is **auto-fixable** with ESLint’s `--fix` option. It removes redundant explicit values while preserving custom values.

## 📜 Configuration
### Using eslintrc format
```json
{
  "rules": {
    "typescript-patterns/no-redundant-enum-values": "error"
  }
}
```

### Using Flat Config format
```javascript
import typescriptPatterns from "eslint-plugin-typescript-patterns";

export default [
  {
    plugins: {
      "typescript-patterns": typescriptPatterns
    },
    rules: {
      "typescript-patterns/no-redundant-enum-values": "error"
    }
  }
];
```
