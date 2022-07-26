// Question two 6 chapter

// Answer 2
// var a = 2;
// var b = 1;

// var result = --a - --b + ++b + b--;

// document.write(--a + "br>"); // 1

// document.write(--a - --b + "<br>"); // 1

// document.write(--a - --b + ++b + "<br>"); // 1 - 0 + 1 = 2
 
// document.write(--a - --b + ++b + b-- + "<br>"); // 1 - 0 + 1 + 1 = 3

// document.write("result " + result + "<br>");

// Question three

// let userName = prompt("Enter the name");

// alert("Welcome " + userName);

// Question four

// let userNumber = +prompt("Enter the Number for Multiplication Number");

// let txt = "";

// if(userNumber == ""){

//     for(var i=1; i<=10; i++){
//     txt = `${5} * ${i} = ${5*i}`;

//     document.write(txt + "<br>");
//     }
// }
// else{
//     for(var i=1; i<=10; i++){
//         txt = `${userNumber} * ${i} = ${userNumber*i}`;
    
//         document.write(txt + "<br>");
//         }
// }


// Question five

let subOne = prompt("Enter the Subject One");
let subTwo = prompt("Enter the Subject Two");
let subThree = prompt("Enter the Subject Three");

let marksOne = +prompt("Enter the marks One");
let marksTwo = +prompt("Enter the marks Two");
let marksThree = +prompt("Enter the marks Three");

let firstSub = subOne;
let secondSub = subTwo;
let thirdSub = subThree;

let m1 = marksOne;
let m2 = marksTwo;
let m3 =  marksThree;

document.getElementById("subjectOne").innerHTML = firstSub;
document.getElementById("subjectTwo").innerHTML = secondSub;
document.getElementById("subjectThree").innerHTML = thirdSub;

document.getElementById("obtOne").innerHTML = m1;
document.getElementById("obtTwo").innerHTML = m2;
document.getElementById("obtThree").innerHTML = m3;

let subperOne = (m1/100)*100;
let subperTwo = (m2/100)*100;
let subperThree = (m3/100)*100;

document.getElementById("pertOne").innerHTML = subperOne + "%";
document.getElementById("pertTwo").innerHTML = subperTwo + "%";
document.getElementById("pertThree").innerHTML = subperThree + "%";

let totalObt = marksOne + marksTwo + marksThree;
document.getElementById("obtF").innerHTML = totalObt;

let totalpercent = ((marksOne+marksTwo+marksThree)/100)*100;

document.getElementById("pertF").innerHTML = totalpercent + "%";



let per_subject_total_marks = 100;

