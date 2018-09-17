document.getElementById("totalTip").style.display="none"; //This hides the Tip Amount and Dollar amount until clicked

//Build the onclick event for the calculate button
document.getElementById("calculate").onclick = function() {calculateTip()};




function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value; //Tells how
  let peopleAmt = document.getElementById("peopleamt").value; //To know the number of people to split the tip by

  //Check for zero or null values
 if (peopleAmt <= 0 || isNaN(peopleAmt)) {
    alert("You must enter a valid number of people! It must be greater than 0.");
    return;
  }

  if (billAmt< 0 || isNaN(billAmt)){
    alert("You must enter a bill amount that is greater than 0!");
    return;
  }


  //calc total
  let total = billAmt * serviceQual / peopleAmt;
  let formattedTotal = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = formattedTotal;





}
