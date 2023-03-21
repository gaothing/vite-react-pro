module.exports = {
  printWidth: 100, // 每行代码长度（默认175）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 使用tab（制表符）缩进而非空格
  semi: true, // 是否在行尾加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 单引号
  quoteProps: 'as-needed',
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: 'es5',
  jsxSingleQuote: false, // jsx中是否使用单引号
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict', // HTML 文件空格敏感度
  rangeStart: 0,
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  jsxBracketSameLine: true // 将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行
}
