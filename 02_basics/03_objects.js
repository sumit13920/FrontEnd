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
console.log(JsUser.email)
console.log(JsUser["location"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log( typeof JsUser[mySym]);