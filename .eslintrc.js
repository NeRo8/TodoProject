// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "import", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "no-console": "warn",
    "no-nested-ternary": "error",
    "@typescript-eslint/no-restricted-types": [
      "error",
      {
        types: {
          "React.FC": {
            message:
              "Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177",
          },
          "React.FunctionComponent": {
            message:
              "Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177",
          },
        },
      },
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], ["internal"], ["parent", "sibling", "index"]],
        pathGroups: [
          { pattern: "react", group: "external", position: "before" },
          {
            pattern: "expo-*",
            group: "external",
            position: "after",
          },
          { pattern: "@/providers/*", group: "internal", position: "after" },
          {
            pattern: "@/utils/*",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    jest: true,
  },
};
