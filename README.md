
# env-default

[![Build
Status](https://travis-ci.org/mattstyles/env-default.svg?branch=master)](https://travis-ci.org/mattstyles/env-default)

> Grabs the first defined variable from either environment variables,
> npm package config or as a supplied value

```sh
$ npm i -S env-default
```


```js
// index.js

var def = require( 'env-default' )

console.log( def( 'HOST', '0.0.0.0'), def( 'PORT', 3000 ) )
```

```sh
$ PORT=5001 node index.js
$ 0.0.0.0 5001
```

