const accountId = 144
let accountEmail = "jay@google.com"
var accountPassword= "123456"
accountCity = "Delhi"
let accountState
// accountId = 2 // not allowed

accountEmail= "jg@jg.com"
accountPassword="87659"
accountCity="Bangalore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])