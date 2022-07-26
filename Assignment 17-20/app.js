// Answer One

// const multiArray = [[1,2,3],[4,5,6],[7,8,9]];

// Answer Two 

// const secondmultiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// let txt = '';

// for(var i=0; i<secondmultiArray.length; i++){
//     txt += secondmultiArray[i].join(" ") + "<br>";
// }

// document.write(txt);


// Answer three

// let countTxt = "";
// for(var j=0; j<=10; j++){
//  countTxt += j + "<br>";
// }

// document.write(countTxt);

// Answer four


// let userEnteredNumber = +prompt("Enter the number you want to get Table");

// let lengthOfTable = +prompt("Enter the length of the table");

// let tabsl = "";

// for(var k=1; k <=lengthOfTable; k++){
//     tabsl += `${userEnteredNumber} * ${k} = ${userEnteredNumber*k} "<br>"`;
// }

// document.write(tabsl);


// Anwer five

// const fruits = ['apple','banana','mango','orange','strawberry'];

// let txt = "";
// let withInd = "";

// for(i=0; i < fruits.length;i++){
//     txt += fruits[i] + "<br>";

// }

// document.write(txt + "<br>");

// for(j=0; j<fruits.length;j++){
//     withInd += "Elements at " + j + " is " + fruits[j] + "<br>";
// }

// document.write(withInd + "<br>");

// Answer Six

// let counting = "";
// let reverse = "";
// let even = "";
// let odd = "";
// let lastSeries = "";

// for(var i=0;i<=15; i++){
//     counting += i + " ";
// }

// document.write(counting + "<br>");

// for(var j=10;j>=1; j--){
//     reverse += j + " ";
// }

// document.write(reverse + "<br>");

// for(var k=0; k<18; k++){
//     if(k%2==0){
//         even += k + "";
//     }
// }
// document.write(even + "<br>");

// for(var l=0; l<18; l++){
//     if(l%2==1){
//         odd += l + "";
//     }
// }
// document.write(odd + "<br>");

// for(var n=2; n<=20; n++){
//     if(n%2==0){
//         lastSeries += `${n}k` + "";
//     }
// }
// document.write(lastSeries + "<br>");

// Answer Seven

// const arrayList = ['cake', 'apple-pie', 'cookie', 'chips', 'patties'];

// let userInput = prompt("User Search");

// let matchText = arrayList.filter(myFunction);


// function myFunction(value,index){
//      let txt = arrayList;
//      if(userInput == txt[value]){
//         document.getElementById('demo').innerHTML = userInput + " is present in this bakrey" +
//         "and index number is " + arrayList.indexOf(userInput);
//      }
// }


// Answer Eight

// const largestArray = [24,53,78,91,12];

// document.getElementById('demo').innerHTML = "The Largest number in the array is " + Math.max.apply(null,largestArray);


// Answer Nine 

// const smallestArraty = [24, 53, 78, 91, 12];

// document.getElementById('demo').innerHTML = "The Largest number in the array is " + Math.min.apply(null,smallestArraty);

// Answer Ten

let multipleOffive = 5;
let txt = "";
for(var i=multipleOffive; i<=100; i+5){
   txt += multipleOffive;
}

document.getElementById('demo').innerHTML = txt;