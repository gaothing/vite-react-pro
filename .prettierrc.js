module.exports = {
  bracketSameLine: true /** 标签的反尖括号是否需要换行 */,
  bracketSpacing: true /** jsx 大括号内的首尾是否需要空格 */,
  printWidth: 100 /** 一行最多 100 字符 */,
  tabWidth: 2 /**  使用 2个tab 缩进  */,
  useTabs: false /** 关闭 tab 缩进*/,
  semi: true /** 行尾需要有分号 */,
  singleQuote: true /** 使用单引号 */,
  quoteProps: 'as-needed',
  /** 对象key是否使用引号 <as-needed|consistent|preserve>
   *  as-needed 仅在需要的时候使用
   *  consistent 有一个属性需要引号，就都需要引号
   *  preserve 保留用户输入的情况
   */ trailingComma: 'es5' /**  末尾不需要逗号 <es5|none|all> */,
  jsxBracketSameLine: false /** jsx 标签的反尖括号需要换行 */,
  jsxSingleQuote: false /** jsx 使用单引号代替双引号*/,
  insertPragma: false /** 不需要自动在文件开头插入 @prettier 用于逐步过渡大型项目中未被格式化的代码标识 */,
  requirePragma: false /** 不需要写文件开头的 @prettier 用于逐步过渡大型项目中未被格式化的代码标识*/,
  proseWrap: 'never' /** 使用默认的折行标准*/,
  htmlWhitespaceSensitivity: 'strict' /** 据根显示样式决定 html 要不要折行 <css|strict|ignore>"*/,
  endOfLine: 'auto' /** "<lf|crlf|cr|auto>" 行尾换行符,默认是lf, */,
  rangeStart: 0 /** range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件（rangeStart: <int>  rangeEnd: <int>） */,
};
