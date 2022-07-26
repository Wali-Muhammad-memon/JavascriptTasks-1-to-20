// Assignment 5 Math Expression 

// Question One

// let firstName = prompt("Enter the First Name");
// let lastName = prompt("Enter the Last Name");

// let fullName = firstName + " " + lastName;

// document.getElementById("demo").innerHTML = fullName;

// Question Two

// let numOne = +prompt("Enter the num One");
// let twoNum = +prompt("Enter the num Two");

// let enteropt = prompt("Enter Operator");

// if(enteropt == "+"){
//     let totalNum = numOne + twoNum;
//     document.getElementById("demo").innerHTML = totalNum;
// }
// else if(enteropt == "-"){
//     let totalNum = numOne - twoNum;
//     document.getElementById("demo").innerHTML = totalNum;
// }
// else if(enteropt == "*"){
//     let totalNum = numOne * twoNum;
//     document.getElementById("demo").innerHTML = totalNum;
// }
// else if(enteropt == "/"){
//     let totalNum = numOne / twoNum;
//     document.getElementById("demo").innerHTML = totalNum;
// }
// else if(enteropt == "%"){
//     let totalNum = numOne % twoNum;
//     document.getElementById("demo").innerHTML = totalNum;
// }
// else{
//     document.getElementById("demo").innerHTML = "Sorry you entered wrong Operator";
// }

// Question Three

// let valOne;
// valOne = "Value after variable declaration is: ??";

// valOne = 17;
// document.getElementById("demo").innerHTML = `Value after decreament is:  ${valOne/3}`;

// Question four

// let ticketPrice = 600;
// let userReserved = +prompt("Enter the number of Seat you want to reserved");

// let totalPrice = ticketPrice * userReserved;

// document.getElementById("demo").innerHTML = `Total price of ${userReserved} seats will be ${totalPrice} PKR`;

// Question five

// let tableNumber = +prompt("Enter the number you want its table");

// let txt = "";

// for(var i=1; i <= 10; i++){
//     txt = `${tableNumber} * ${i} = ${tableNumber * i}`;
//     document.write(txt + "<br>");
// }

// Question Six

// let farhValue = 35;
// let calculateCent = (farhValue - 32) * 5/9;

// document.getElementById("demo").innerHTML = `${calculateCent}C  is ${farhValue}F`;

// Question Seven

// let itemOnePrice = 250;
// let itemTwoPrice = 550;

// let qntOneItm = 3;
// let qntTwoItm = 4;

// let totalShipingValue = 100;

// document.getElementById("demo").innerHTML = `Price of item One is ${itemOnePrice}`;
// document.getElementById("demo1").innerHTML = `Price of item Two is ${itemTwoPrice}`;
// document.getElementById("demo2").innerHTML = `Quantity od item One is ${qntOneItm}`;
// document.getElementById("demo3").innerHTML = `Quantity od item Two is ${qntTwoItm}`;
// document.getElementById("demo4").innerHTML = `Shipping Value ${totalShipingValue}`;

// document.getElementById("demo5").innerHTML = `Total Cost is ${(itemOnePrice*qntOneItm) + 
//                                             (itemTwoPrice*qntTwoItm) + totalShipingValue}`;


// Question Eight

// let totalMarks = 700;
// let obtMarks = 430;

// let percentValue = (obtMarks/totalMarks)*100;

// document.getElementById("demo").innerHTML = `Percentage ${percentValue.toFixed(2)}%`;

// Question Nine

// let USD = 104.80;
// let saudiRiyal = 28;

// let userInputUSD = +prompt("Enter the total number of USD you have");
// let userInputRiyal = +prompt("Enter the total number of riyals you have");

// let totalValue = `${(USD*userInputUSD) + (saudiRiyal*userInputRiyal)} PKR`;

// document.write(totalValue);


// Question Ten

// let valOne = 3 * 5 * 10 / 2;

// document.write(valOne);


// Question eleven

// let currentYear = 2022;
// let birthDate = 1995;

// let calcYear = currentYear - birthDate;

// document.write(calcYear-1);

// Question  Twelve

// let radiusValue = 7;

// let cicumValue = 2 * Math.PI * radiusValue;

// document.write("The Value circumValue is " + cicumValue.toFixed(2) + "<br>");

// let areaofCircle = Math.PI  * Math.pow(radiusValue,2);

// document.write("The Value circumValue is " + areaofCircle.toFixed(2));

// Quesiton Thirteen

// let favSnack = "Chocolate chip";

// let currentAge = 22;
// let maxAge = 25;

// let amountDay = 20;

// let eatperDay = 3;

// let reuslt = `You will need ${(maxAge-currentAge)*eatperDay} chocolate chip to last you until
//             the ripe out ot of mxax age ${maxAge}`

// document.write(reuslt);