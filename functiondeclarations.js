function sayHello(){
  console.log("hello");
}

//================================ASSIGNING A FUNCITON TO A VARIABLE==========================
/*

let a = sayHello; //We don't need to invoke the funciton here AKA we dont need to use the ()
a(); //Can assign this funciton into a variable here

*/


//=================================PASSING A PARAMETER INTO A FUNCTION========================
/*
function sayHello(name){
  console.log("hello " + name);
}

sayHello('Bobby');
sayHello("Hank");
sayHello('Rick');

*/

//==============================================================================================


function calcTax(amount){

  let result = amount * 0.0825;
  return result;
}

let tax = calcTax(100); //This passes in the 100, lets the funciton calculate it and then stores the value in the tax VARIABLE
console.log(tax);
