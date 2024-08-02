const user = {
    username: "Sitaram",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Sitaram"
//     console.log(this.username); //gives undefined this f not working here
// }

// chai()

// const chai1 = function () {
//     let username = "Sitaram"
//     console.log(this.username); // here this fn gives undefined 

// }

// chai1()

// const chai2 =   () => {
//     let username = "Sitaram"
//     console.log(this); // here this fn gives ->  {}.
// }

// chai2()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2 //implicite return 
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "Sitaram"})


console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => {})