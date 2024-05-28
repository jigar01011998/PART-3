import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module", 
      globals: globals.browser,
    },
  },
  {
    rules: {
     
      "no-console": "warn",
    
    },
    files: ["**/*.js"],
  },
];
