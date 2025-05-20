module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".vue"],
      },
    },
  },
  rules: {
    "prettier/prettier": ["error"],
    "no-plusplus": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-console": "off",
  },
};
