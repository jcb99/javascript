document.getElementById("totalTip").style.display="none"; //This hides the Tip Amount and Dollar amount until clicked

//Build the onclick event for the calculate button
document.getElementById("calculate").onclick = function() {calculateTip()};


//Check for zero or null values
if (peopleAmt <= 0) {
  alert("You must enter a valid number of people! It must be greater than 0.");

}

function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value; //Tells how
  let peopleAmt = document.getElementById("peopleamt").value; //To know the number of people to split the tip by








  //calc total
  let total = billAmt * serviceQual / peopleAmt;
  let formattedTotal = total.toFixed(2);
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = formattedTotal;





}
