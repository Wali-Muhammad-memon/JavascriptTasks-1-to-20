// Question 1

// let userInput = prompt("Enter the Character");
// let userCharcodeASCII = userInput.charCodeAt();
// if(userCharcodeASCII >= 65 && userCharcodeASCII <= 90){

// alert(`The entered character is ${userInput} and its ASCII is ${userCharcodeASCII} 
//                 which is uppercase character`);
// }else if(userCharcodeASCII >= 97 && userCharcodeASCII <= 122){

// alert(`The entered character is ${userInput} and its ASCII is ${userCharcodeASCII} which is lowewr character`);
// }else if(userCharcodeASCII >= 48 && userCharcodeASCII <= 57){

//     alert(`The entered character is ${userInput} and its ASCII is ${userCharcodeASCII} which is digit character`);
// }else{
//     alert("Other Character")
// }

// Question 2

// let firstNumber = +prompt("Enter the first Number");
// let secondNumber = +prompt("Enter the second Number");

// if(firstNumber > secondNumber){
//     alert("First Number is greater")
// }else if(firstNumber < secondNumber){
//     alert("Second Number is greater")
// }else{
//     alert("Both are equal")
// }


// Question 3

// let firstNumber = +prompt("Enter the first Number");

// if(firstNumber > 0){
//     alert("Is greater then 0")
// }else if(firstNumber < 0){
//     alert("Is Less then 0")
// }else{
//     alert("Are equal to zero")
// }

// Question 4

// let user_entered_char = prompt("Enter the single character");

// let user_entered_char_ascii = user_entered_char.charCodeAt();

// if(user_entered_char_ascii == 97 || user_entered_char_ascii == 101 ||
//     user_entered_char_ascii == 105	 || user_entered_char_ascii == 111 ||
//     user_entered_char_ascii == 117){
//         alert("Entered the vowel char ")
//     }
//      else{
//         alert("Not a vowel char")
//     }


// Answer 5

// let storePassword = "Walistars";
// let userPassword = prompt("Enter the Password we can do it.");

// if(userPassword == ""){
//     userPassword = +prompt("Enter the user number you can do it");
// }
// else if(storePassword == userPassword){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Password")
// }

// Answer 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }


// Answer 7

let userTime = +prompt("Enter the time");

if(userTime >= 0000 && userTime <1200){  
   alert("Good Morning")
}else if(userTime >= 1200 && userTime <1700){
    alert("Good AfterNoon")
}else if(userTime >= 1700 && userTime <2100){
    alert("Good Evening")
}else if(userTime >= 2100 && userTime <=2359){
    alert("Good Evening")
}