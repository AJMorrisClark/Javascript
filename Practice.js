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
 return ("This is an even number") 

} else {
 		return ("This is an odd number")
 	}
 }
checkOdd(52);


// Check for Prime Number

function(num) {



};

