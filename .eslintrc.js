module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended", // Adiciona as recomendações padrões @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Adiciona as configurações do prettier para evitar conflitos de regras @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "func-style": "error",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off", // temporary
    "@typescript-eslint/no-unused-vars": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/*.spec.ts"] }],
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: [
          "signature",

          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",
          "private-abstract-field",

          "public-field",
          "protected-field",
          "private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "field",

          "constructor",

          "public-instance-method",
          "public-abstract-method",
          "public-method",

          "public-static-method",

          "protected-instance-method",
          "private-instance-method",

          "protected-abstract-method",
          "private-abstract-method",

          "protected-method",
          "private-method",

          "instance-method",
          "abstract-method",

          "method",

          "protected-static-method",

          "private-static-method",

          "static-method",
        ],
      },
    ],
  },
};
