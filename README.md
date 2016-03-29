
# env-default

> Grabs the first defined variable from either environment variables,
> npm package config or as a supplied value

```sh
$ npm i -S env-default
```


```js
// index.js

var def = require( 'env-default' )

console.log( def( 'PORT', 3000 ) )
```

```sh
$ PORT=5001 node index.js
$ 5001
```

