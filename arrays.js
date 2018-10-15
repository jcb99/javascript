let a = [4, 8, 15, 16, 23, 42];
let nflTeams = ["Redskins", "Bears", "Buccaneers"];

/*console.log(a[0]);
console.log(a[1]);*/

a[0]=7;
console.log(a[0]);
 

let c = [4, 'alex', true]; //In JS you are allowed to have multiple datatypes in an array
console.log(c);

console.log(a.length); //Gives the number of elements in the array (6 total in a array)


a.push(77); //Adds to the end of the array
console.log(a);
console.log(a.length);

a.pop(); //Pop pulls the last element from the array
a.pop();
a.pop();
console.log(a);
console.log(a.length);
