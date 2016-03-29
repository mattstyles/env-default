
var assert = require( 'assert' )
var def = require( './' )

var desc = 'Grabbing a supplied default value'
assert.equal( 3001, def( 'PORT', 3001 ), desc )
console.log( desc, 'OK' )

desc = 'Grabbing a default value from npm config'
process.env.npm_package_config_port = 3000
assert.equal( 3000, def( 'PORT', 3001 ), desc )
console.log( desc, 'OK' )

desc = 'Grabbing a default value from env'
process.env.PORT = 5000
assert.equal( 5000, def( 'PORT', 3001 ), desc )
console.log( desc, 'OK' )

