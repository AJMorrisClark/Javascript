// @auth Amy Morris-Clark

// reverse a number

function reverse(num) {
num = num.toString();
num.split("").reverse().join("");
}
reverse(123);

function reverse(num){
num = num.toString();
 console.log(num.split("").reverse().join(""));
}
reverse(123);


//check for palindrome

function pal(str){
str1 = str.split("").reverse("").join("");
if (str1 == str) {
	console.log("palindrome");
}
else console.log("nope");
}
pal("madam");


// alphabetize string

function alpha (str) {
str = str.split("").sort().join("");
console.log(str);
}
alpha("computer");


// check for even or odd numbers

function checkOdd (num) {
if (num % 2 === 0) {
 console.log("This is an even number"); 

} else {
 		console.log("This is an odd number");
 	}
 }

checkOdd(52);


// Display day and time

function dayTime () {

	let day = new Date().getDay(); 
	 switch(day)  {
	 case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

let time = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

if (time > 12) {
	time = time-12;
} 

console.log ("Today is " + day + ". Current time is " + time +  ":" + minutes + ":" + seconds);

}

dayTime();



// Print the contents of the current window

function printThis () {
    window.print();
}

printThis();



// Get current date

function date() {
    var d = new Date();
    //getMonth starts at 0
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
   console.log(month + "/" + day + "/" + year);
}

date();


//rotate a string one letter at a time

function rev2(str) {
var string = str.split("");

for (var i = 0; i < 5; i++) {
var popLetter = string.pop();
var addLetter = string.unshift(popLetter);
}
string = string.join("");
console.log(string);
}

rev2("w3resource");



// check for leap year

function leap (num) {

if (num % 4 === 0) {
    console.log("That's a leap year");
}
else {
     console.log("That's not a leap year");
}
}

leap(2004);


// Guess a number

function guess(num) {

let randomNum = Math.floor(Math.random() * 10) + 1;

if (num == randomNum) {
	console.log("Good Work!"); 
}
	else {
		console.log("Not matched. The number was " + randomNum);
	     }
}

guess();





