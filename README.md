# jsonbin.org
NodeJS API for jsonbin.org

## Example Usage
```js
let key = "token blablabla"
let bin = require("jsonbin.org")(key)

bin.post("profile", {name: "John", age:21}).then(console.log)
// -> {name: "John", age: 21}
bin.patch("profile", {age: 36}).then(console.log)
// -> {name: "John", age: 36}
bin.get("profile/name").then(console.log)
// -> "John"
bin.delete("profile")
// -> {}
```