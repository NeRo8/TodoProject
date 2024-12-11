// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
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
