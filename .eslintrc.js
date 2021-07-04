module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
//    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {

  },
  "overrides": [
    {
      "files": ["bin/*.js", "lib/*.js"],
      "excludedFiles": "assets/logo.vue"
    }
  ]
}
