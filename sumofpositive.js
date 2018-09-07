let nums = [2, 7, 4, -1]; //Test array of nums..Should add up to 6..(-1 is negative and odd and 7 is odd)
let total = 0; //total sum


  for (var i = 0; i < nums.length; i++) { //For loop that runs through the elements of the array

    if (nums[i]>0 && nums[i] % 2 == 0) //If the number is both even and positive, add its value to the total
    {
      total+=nums[i];
    }

  }
      console.log(total); //Write out the total sum
