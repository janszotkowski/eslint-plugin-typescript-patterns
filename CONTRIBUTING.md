# Contributing to eslint-plugin-typescript-patterns

Thank you for your interest in contributing to `eslint-plugin-typescript-patterns`! We appreciate your help in improving this project.

## 🚀 Getting Started

### 1️⃣ Fork and Clone the Repository
First, fork the repository on GitHub and then clone it locally:

```sh
git clone https://github.com/janszotkowski/eslint-plugin-typescript-patterns.git
cd eslint-plugin-typescript-patterns
```

### 2️⃣ Install Dependencies

Ensure you have Node.js installed, then install project dependencies:

```sh
npm install
```

or using yarn:

```sh
yarn install
```

or using pnpm:

```sh
pnpm install
```

### 3️⃣ Run Tests
Before making changes, run the existing test suite to ensure everything is working:

```sh
npm test
```

If you are working on a specific rule, you can run:

```sh
npx mocha tests/rules/prefer-const-assertion.test.js
```

## 🛠 Adding a New Rule

1. Create a new file in `lib/rules/` for your rule, e.g., `new-rule.js`.
2. Define the rule following the ESLint rule structure.
3. Write test cases in `tests/rules/new-rule.test.js`.
4. Add documentation for the rule in the README.

- Write meaningful commit messages.

## 🏆 Submitting Your Contribution

1. Create a new branch for your feature/fix:

```sh
git checkout -b feature/new-rule
```

2. Make your changes and commit:

```sh
git add .
git commit -m "feat: add new ESLint rule for X"
```

3. Push your branch:

```sh
git push origin feature/new-rule
```

4. Open a Pull Request on GitHub: [Create a PR](https://github.com/janszotkowski/eslint-plugin-typescript-patterns/pulls)

We will review your PR and provide feedback if needed.

## 🤝 Code of Conduct
Please be respectful and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## 💡 Questions?
If you have any questions, feel free to open an issue: [GitHub Issues](https://github.com/janszotkowski/eslint-plugin-typescript-patterns/issues)

Happy coding! 🚀
