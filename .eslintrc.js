module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/strongly-recommended",
      "plugin:prettier/recommended",
      "@vue/airbnb"],
    parserOptions: {
      parser: "babel-eslint"
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "linebreak-style": 0,
      "global-require": 0,  
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }],
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
      }]
    }
  };
  