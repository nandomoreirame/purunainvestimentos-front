module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    Slider: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'arrow-parens': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
