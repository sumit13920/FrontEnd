// singleton
//object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "SitaRam",
    "full name": "SitaRam Choudhary",
    [mySym]: "mykey1",
    age: 38,
    location: "Hoshiarpur",
    email: "SitaRam123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser);
// console.log(JsUser.email)
// console.log(JsUser["location"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log( typeof JsUser[mySym]);

JsUser.email = "SitaRam123@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email = "SitaRam123@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS user")
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());