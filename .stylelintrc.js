module.exports = {
  extends: [
    "stylelint-config-recess-order", // 属性排序
    "eslint-config-mature/stylelint/style", // 使用 eslint-config-mature 包的规则
    "eslint-config-mature/stylelint/style-scss",
  ],
  ignoreFiles: [
    "**/*.js",
    "**/*.cjs",
    "**/*.jsx",
    "**/*.tsx",
    "**/*.ts",
    "node_modules/",
    "dist/",
    "public/",
    "docs/",
  ],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss", // 处理.scss文件时使用postcss-scss语法解析器
    },
  ],
  rules: {
    // 自定义覆盖规则
  },
};
