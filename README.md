# i18n-o

## Update
**This project is forked form [i18n-node](https://github.com/mashpie/i18n-node).
we added an option localesData for load locales data directly from an object
so you can just save your locales data in database or get it from remote api.**


Lightweight simple translation module with dynamic json storage. Supports plain vanilla node.js apps and should work with any framework (like _express_, _restify_ and probably more) that exposes an `app.use()` method passing in `res` and `req` objects.
Uses common __('...') syntax in app and templates.
Stores language files in json files compatible to [webtranslateit](http://webtranslateit.com/) json format.
Adds new strings on-the-fly when first used in your app.
No extra parsing needed.


## Install
```sh
npm install i18n-o --save
```

## Test
```sh
npm test
```

## Load
```js
// load modules
var express = require('express'),
    i18n = require("i18n-o");
```

### Configure

```js
var localesData = {
  en: {
    'key_1': 'value 1',
    'key_2': 'value 2'
  },
  zh: {
    'key_1': '值 1',
    'key_2': '值 2'
  }
}
i18n.configure({
    locales:['en', 'zh'],
    directory: false,
    localesData: localesData
});
```

> More document go <https://github.com/mashpie/i18n-node>