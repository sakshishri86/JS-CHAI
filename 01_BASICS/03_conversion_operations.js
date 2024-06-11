let score ="33abc"
console.log(typeof score)


let valueInnumber = Number(score)   //converted string to number by defining it number
console.log(typeof valueInnumber)
console.log(valueInnumber)   // gives NaN as output i.e. not an number bcz value of score converted
                            // to number but given input is not number.
// "33"=> 33     
// "33abc" => NaN
//   true => 1;  false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) 

// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber );

//************operations****************** 
 // console.log(2**2) => power

 let str1 = "hello"
 let str2 = "hitesh"


 console.log("1"+2);
 console.log("1"+2+2);

console.log(+true) // gives 1 convetrs to boolean
console.log(+"")   // gives 0 

// prefix and postfix operator read from mdn 

let gameCounter = 100
gameCounter++;
console.log(gameCounter)