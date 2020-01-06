# jsonbin.org
NodeJS API for [jsonbin.org](https://jsonbin.org/)

## Example Usage
```js
let key = 'token xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
// or using bearer: key = 'Bearer xxxxxxxxxxxxxxx...'
let bin = require('jsonbin.org')(key)

await bin.post('profile', { name: 'John', age: 21 }) // -> {name: "John", age: 21}
await bin.patch('profile', { age: 36 }) // -> {name: "John", age: 36}
await bin.get('profile/name') // -> "John"
await bin.delete('profile') // -> {}

// You will only get a proper JSON response from the get method!
```
