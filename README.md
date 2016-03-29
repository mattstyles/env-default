
# env-default

> Grabs a the first defined variable from either environment variables,
> npm package config or as a supplied value

```sh
npm i -S env-default
```

```js
var def = require( 'env-default' )

const PORT = def( 'PORT', 3000 )
```

