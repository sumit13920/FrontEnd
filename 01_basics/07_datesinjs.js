let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

//let myCreatdDate = new Date(2024, 0, 24);
//let myCreatdDate = new Date(2024,0, 24, 5, 3);
//let myCreatdDate = new Date("01-07-2024");
let myCreatdDate = new Date("08-01-2024");
//console.log(myCreatdDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatdDate.getTime);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time is ${newDate.getTime()}`

newDate.toLocaleDateString('default', {
    weekday: "long",
    
})

