(function() {

  function clickHandler(message){
    console.log('hi....' + message);
  }

  let myButton = document.getElementById('myButton');
  myButton.addEventListener('click', function() {clickHandler('Hi from the IFFE!!!') });
})(); //IIFE executes the innermost funciton immediately

//We need to get a reference to myButton
