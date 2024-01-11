//1. CALCULATE AREA OF A TRIANGLE

/*
let height = Number(prompt("enter height of a triangle in cm"));
let base = Number(prompt("enter base of a triangle in cm"));

let area = (0.5*base*height);
console.log(area);
*/

//2. CALCULATE PERIMETER OF A TRIANGLE


/*
let sideA = Number(prompt("enter side A of a triangle in cm"));
let sideB = Number(prompt("enter side B of a triangle in cm"));
let sideC = Number(prompt("enter side C of a triangle in cm"));

let perimeter = (sideA + sideB + sideC);
console.log("The perimeter of a triangle is :" + perimeter + " cm.");
*/

//3.AREA AND PERIMETER OF RECTANGLE

/*
let width = Number(prompt("enter width in cm"));
let length = Number(prompt("enter length in cm"));

let areaTotal = (length * width);
let perimeterTotal = 2*(length + width);

console.log("The area of a rectangle is: " + areaTotal + "cm.");
console.log("The perimeter of a rectangle is: " + perimeterTotal + " cm.");
*/

//4.RADIUS AND CIRCUMFERENCE OF CIRCLE 

/*
let radius = Number(prompt("Enter radius of a circle in cm"));

let areaCircle = (3.14 * radius * radius);
let circumferenceCircle = (2 * 3.14 * radius);

console.log("The area of a Circle is: " + areaCircle + " cm")  

console.log("The circumference of a Circle is: " + circumferenceCircle + " cm")
*/

//5-8.CALCULATE SLOPE

/*
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;

const slope = (y2 - y1) / (x2 - x1);


console.log("Slope (m): " + slope);
*/

//9.CALCULATE INCOME

/*
let hours = Number(prompt("enter weekly work hours"));
let ratePerHour = Number(prompt("enter your rate per hour"));
console.log(hours)
console.log(ratePerHour)

let weeklyIncome = (hours * ratePerHour);
console.log("your weekly income is: " + weeklyIncome + " $");
*/

//10-11. COMPARE LENGTH

const myName = "Ozan";
const myLastName = "Yuce";

if (myName.length > myLastName.length){
    console.log(`your first name, ${myName} is longer than your last name, ${myLastName}`)
} else if (myName.length < myLastName.length) {
    console.log(`your last name, ${myLastName} is longer than your first name, ${myName}`)
} else if ((myName.length < 7) && (myLastName.length < 7)) {
    console.log(`your last name, ${myLastName} and your first name, ${myName} are both short`)
} else{
    console.log(`your last name, ${myLastName} and your first name, ${myName} are both long`)
}

//12. COMPARE AGE

let myAge = 28;
let yourAge = 200;

if (myAge < yourAge){
    console.log(`you are ${yourAge - myAge} years older than me`)
}else {
    console.log(`I am ${yourAge-myAge} older than you`)
}

//13. PROMPT AGE 

/*
const birthday = Number(prompt("enter year of birth"))
let now = new Date();
let curentYear = now.getFullYear();
let promptAge = curentYear - birthday;
const driverLicence = 18;

console.log(promptAge)

if(promptAge >= driverLicence){
    console.log("you can get a driver licence")
} else{
    console.log(`your are ${driverLicence-promptAge} years too young to get a Driver Licence`)
}
*/

//14. LIFE SPAN CALCULATE

/*
let alive = Number(prompt("how old are you"))
let lifeSpan = alive * 31536000;

console.log(`you are ${alive}, so you lived for ${lifeSpan} seconds`)
*/

//15.DATE OBJECT

const today = new Date();

console.log(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`)

console.log(`${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)

console.log(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`)




