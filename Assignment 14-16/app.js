// Question 1

const studentName = [];

// Question 2

const myArr = new Array();

// Question 3

const strArray = ["Wali","Dua","Soha","Owais"];

// Question 4

const numArray = [2,5,4,1];

// Question 5

const boolArray = [true,false];

// Question 6

const mixArray = ["Wali","Dua","Soha","Owais",2,5,4,1,true,false];

// Question 7

const degreeArray = ["SSC","HSC","BSC","BS","BCOM","MS","M-PHILL","PHD"];


var txt = "<ol>"

for(var i = 0; i < degreeArray.length; i++){
    txt += "<li>" + degreeArray[i] + "</li>";
}

txt += "</ol>";
document.getElementById("demo").innerHTML = txt;


// Question 8

const studentNames = ["Wali","Owais","Masab"];
const marks_of_students = [345,231,321];

let total_percent_student_one = (marks_of_students[0]/500) * 100;
let total_percent_student_two = (marks_of_students[1]/500) * 100;
let total_percent_student_three = (marks_of_students[2]/500) * 100;

console.log(`${total_percent_student_one.toFixed(3)} %`)
console.log(total_percent_student_two.toFixed(3))
console.log(total_percent_student_three.toFixed(3))

// Question 9

const colorName = ["crimson","dblue","orangeyellow","darkbrown"];

document.write(colorName + "<br>");
let userColor = prompt("Enter the Color Name you want to add in first");
//a
colorName.unshift(userColor);

document.write("After adding one more color by the user the output is " + "<br>" + colorName + "<br>");
//b
let userColorTwo = prompt("Enter the Color Name you want to add in last");
colorName.push(userColorTwo);

document.write("After adding one more color by the user the output is " + "<br>" + colorName + "<br>");

//c
colorName.splice(0,0,"yellow","black","grey");

document.write("After adding one more color by the user the output is " + "<br>" + colorName + "<br>");
//d
delete colorName[0];

document.write("After delete first element the output is " + "<br>" + colorName + "<br>");
//e
delete colorName[colorName.length - 1];

document.write("After delete last element the output is " + "<br>" + colorName + "<br>");
//f

let userIndexNum = +prompt("Enter the position of index you want to add color");
let userthirdColor = prompt("Enter the color you want to add in your desired position")
colorName.splice(userIndexNum,0,userthirdColor);

document.write("The output is " + "<br>" + colorName + "<br>");
//g

let userDefinedPosition = +prompt("Enter the position of index you want to add color");
let elementsDelete = +prompt("Enter the color you want to delete in your desired")
colorName.splice(0,userDefinedPosition);
colorName.slice(elementsDelete);
document.write("The output is " + "<br>" + colorName + "<br>");

// Question 10

let studentScore= [23,65,78,267,33,72,100,106,161];

let afterSorting = studentScore.sort(function(a,b){return a -b});
document.write(afterSorting)

// Question 11

const townNames = ["Karachi","Hyd","Isl","Lahore","SUKKER"];

const selectedCities = townNames.slice(1,4);

document.write("Cities names " + townNames);
document.write("Selected names " + selectedCities);

// Question 12
var arr = ['This', 'is', 'my', 'cat'];

let afterJoin = arr.join(" ");

document.write("<br>" + afterJoin);


// Question 13

let devArr = [];
devArr[0] = "Keyboard";
devArr[1] = "mouse";
devArr[2] = "printer";
devArr[3] = "scanner";

document.write("<br>" + "Device" + "<br>"+ devArr + "<br>")

// Question 14
// create new array
var queue = new Array();

// push on three entries
queue.push('first');
queue.push('second');
queue.push('third');

// pop two entries
alert(queue.pop());  // returns third
alert(queue.pop());  // returns second
alert(queue); // retuen first

// Questionn 15

let arrMob = ["Apple","Sumsung","Nokia","Vivo"];

let txtthree = "<select>";

for(var i=0; i < arrMob.length; i++){
    txtthree += "<option>"+arrMob[i] +'</option>'
}

txtthree += "</select>"

document.write(txtthree)



