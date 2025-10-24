// singleton => constructor se banega
// Objects.create

// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Mayank",
    "full name": "Mayank Bajaj",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "mayank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email = "chatgpt@bajaj.com";
// Object.freeze(JsUser)
JsUser.email = "microsoft@bajaj.com";
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello js user")
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user ${this["full name"]}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())