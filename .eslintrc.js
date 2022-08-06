module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:testing-library/react",
    "next",
    "next/core-web-vitals",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  //   plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "testing-library/no-render-in-setup": [
      "error",
      { allowTestingFrameworkSetupHook: "beforeEach" },
    ],
  },
};
