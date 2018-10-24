# jsonbin.org
NodeJS API for jsonbin.org

## Example Usage
```js
let key = "token blablabla"
let bin = require("jsonbin.org")(key)

bin.post("profile", {name: "John", age:21}).then(console.log)
bin.patch("profile", {age: 22}).then(console.log)
bin.get("profile/name").then(console.log)
bin.delete("profile")
```