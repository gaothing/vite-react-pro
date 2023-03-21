module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },

  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-native/no-inline-styles': 0,
        // '@typescript-eslint/no-shadow': ['error'],
        'space-before-function-paren': [
          0,
          {
            anonymous: 'always', // 用于匿名函数表达式（例如function () {}）
            named: 'never', // 用于命名函数表达式（例如function foo () {}）
            asyncArrow: 'always' // 用于异步箭头函数表达式（例如async () => {}）
          }
        ],
        'no-shadow': 'off',
        // 'no-undef': 2,
        'no-with': 2, // 禁用with
        'no-var': 2, // 禁用var
        'no-eval': 2, // 不允许使用eval
        'no-sequences': 2, // 禁止使用逗号运算符
        'no-empty-pattern': 2, // 不允许空块语句
        'no-sparse-arrays': 2, // 不允许稀疏数组文字
        'no-self-compare': 2, // 禁止比较变量与自身
        'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
        'no-trailing-spaces': 2, // 不允许在行尾添加尾随空白
        'padded-blocks': [2, 'never'], // 在块内强制执行一致的空行填充
        'no-multiple-empty-lines': [2, { max: 1 }], // 最多一个空行
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    strict: 'off',
    'import/first': 'off',
    'lines-around-directive': 'off',
    "prettier/prettier": "error",
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off"
  }
}
