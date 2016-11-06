// reverse a number

function reverse(num) {
var num = num.toString();
return num.split("").reverse().join("");
}
reverse(123);

function reverse(num){
var num = num.toString();
 console.log(num.split("").reverse().join(""));
}
reverse(123);


//check for palindrome

function pal(str){
var str1 = str.split("").reverse("").join("");
if (str1 == str) {
	console.log("palindrome");
}
else console.log("nope");
};
pal("madam");


// alphabetize string

function alpha (str) {
var str = str.split("").sort().join("");
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

	var day = new Date().getDay(); 
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

var time = new Date().getHours();
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();

if (time > 12) {
	time = time-12 + " PM";
} else {
	time = time + " AM";
}

console.log ("Today is: " + day + "Current time is " + time +  ":" + minutes + ":" + seconds);

};

dayTime();
