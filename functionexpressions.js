/*setTimeout(function () {
  console.log("I waited 2 seconds.");
}, 2000);*/ //first is a function (handler I think?), then the number of milliseconds to wait until it executes
  //Funcitons can take funcitons as input parameters

  //================================================================================================
/*
  let counter = 0;
  function timeout(){
    setTimeout(function(){
      console.log('hi ' + counter++);
      timeout(); //called here again to run the same function again and then it keeps looping because it keeps calling that same funciton
    }, 2000)
  }

  timeout(); //The function is called initially to start the "loop" it calls the funciton above
*/
//Ctrl C to stop execution

//=======================================================================================================

//=============================================IMMEDIATELY INVOKED FUNCITON EXPRESSION (IIFE)==============================

(function(){
  console.log("Immediately invoked functions");
})();
