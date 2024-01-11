//TYPEOF

const firstName = "Ozan";
const lastName = "Yuce";
let age = 28;
let married = true;
let country = "Turkey";
let city = "Izmir";
let year = 2024;

console.log(typeof year);

console.log(typeof 10 == "10")

console.log(parseInt("9.8") == 10)



// TRUE STATEMENT
let nameFirst = "Ozan";

let income = 10000;

let month = "june";

console.log(nameFirst == "Ozan");

console.log(income <= 100000);

console.log(month.length == nameFirst.length)

//FALSE STATEMENT

console.log(nameFirst !== "Ozan")
console.log(income > 20000)
console.log(month.length !== nameFirst.length)

//.5

4 > 3 //TRUE
4 >= 3 //TRUE
4 < 3 //FALSE
4 <= 3 //FALSE
4 == 4 //TRUE
4 === 4 //TRUE
4 != 4 //FALSE
4 !== 4 //FALSE
4 != '4' //FALSE
4 == '4' //TRUE
4 === '4' //FALSE

console.log(4 === '4')

let word1 = "python";
let word2 = "jargon";

console.log(word1 === word2)

//.6

4 > 3 && 10 < 12 //TRUE
4 > 3 && 10 > 12 //FALSE
4 > 3 || 10 < 12 //TRUE
4 > 3 || 10 > 12 //TRUE
!(4 > 3) // FALSE
!(4 < 3) // TRUE
!(false) // TRUE
!(4 > 3 && 10 < 12) // FALSE
!(4 > 3 && 10 > 12) // TRUE
!(4 === '4') //TRUE

let word3 = "dragon";
let word4 = "jargon";
console.log(word3.includes("on") && word4.includes("on"));


//7.DATE OBJECT
let date = new Date();
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getMilliseconds())
console.log(date.getTime())
