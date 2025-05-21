module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    "cypress/globals": true, // Para suporte ao Cypress
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:cypress/recommended", // Adicione esta linha
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "cypress"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // Não necessário a partir do React 17
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
