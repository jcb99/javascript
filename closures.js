function sayHello(name){
  return function(){
    console.log("howday" + name);
  }
}

let bob = sayHello("bob");
let conrad = sayHello("conrad");
let grant = sayHello("grant");


bob();
conrad();
grant();
