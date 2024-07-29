const accountId = 144553
let accountEmail = "SitaRam@google.com"
var accountPassword = "12345"
accountCity = "Jaiput"
let accountState;

// accountId = 2 //Not allowed
accountEmail = "RaghupatiRaghavRajaRam@gmail.com"
accountPassword = "21212121"
accountCity = "Bengalure"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

//console.log(accountId);
console.table([accountId, accountEmail,accountPassword,accountCity, accountState ]);