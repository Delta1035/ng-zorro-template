module.exports = {
  root: true, // 声明这是根配置文件，不再向上查找
  env: { browser: true, es2023: true },
  // 使用的规则集，可以是一个字符串（预设）或自定义规则的对象，优先级由低到高
  extends: [
    "plugin:react/recommended", // 优先你的react或者Vue规则，优先级最低
    "eslint-config-mature/prettier", // 主要用于格式化模板，优先级应更低
    "eslint-config-mature",
    "eslint-config-mature/ts", // 如果使用ts
  ],
  // plugins 可以提供额外的规则配置，如vue，这些规则需要在 rules 中进行配置。
  plugins: ["vue"],
  // 自定义规则
  rules: {
    "no-console": "off", // 允许使用console
    indent: ["error", 2], // 两个空格的缩进
    // 更多规则...
  },
  // 默认使用espree，可以选择其他解析器，例如使用ts
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: "./tsconfig.json", // 指定tsconfig.json文件路径
  },
  //定义全局变量
  globals: {
    wx: "readonly",
  },
  // 配置哪些文件或目录应该被 ESLint 忽略
  ignorePatterns: ["node_modules/", "build/", "dist/"],
};
