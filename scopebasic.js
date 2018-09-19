let a = 'first';

function scopeTest() {
  console.log(a);

  //let b = 'second';

  if (a != " ") {
    console.log(a);
  }
}

scopeTest();
//console.log(b);
