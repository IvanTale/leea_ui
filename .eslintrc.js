module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": [
    "airbnb-base"
  ],

  "rules": {
    "indent": [
      2,
      "tab",
      {
        "SwitchCase": 1,
        "VariableDeclarator": 1
      }
    ],
    "no-tabs": 0,
    "no-underscore-dangle": "off",
    "dot-notation": 0,
    "import/prefer-default-export": "off",
    "lines-between-class-members": 0,
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": false
      }
    ]
  }
}

