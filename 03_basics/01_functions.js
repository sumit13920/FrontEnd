
// function sayMyName() {
//     console.log("S");
//     console.log("I");
//     console.log("T");
//     console.log("A");
//     console.log("R");
//     console.log("A");
//     console.log("M");
// }

//sayMyName();

// function addTwoNumbers(number1, number2) {  //(....,....) parameters
//      console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
     

//const result =  addTwoNumbers(5, 3); // (5, 3) arguments

//console.log("Result:", result);

function loginUserMessage(username = "Ram") {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

//console.log(loginUserMessage("Sitaram"));
//console.log(loginUserMessage("Sitaram"));

function calculateCartPrice(val1, val2, ...num1) { //restOperator ...num1
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prics: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function  returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));