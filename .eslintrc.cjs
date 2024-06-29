module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime"
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./tsconfig.node.json"
    ]
  },
  plugins: [
    "react-refresh",
    "react",
    "@typescript-eslint"
  ],
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "react/no-unknown-property": "off",
    "react-refresh/only-export-components": [
      "warn",
      {
        "allowConstantExport": true
      }
    ]
  }
};
