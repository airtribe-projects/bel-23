// A closure is a function that remembers variables from its outer lexical environment even after the otuer function has finished execution

function outer() {
  let counter = 0;
  let obj = {
    age: 0,
    name: "Jay"
  };

  function inner() {
    counter++;
    obj.age++;
    console.log(counter);
    console.log(obj)
  }

  return inner;
}

let fn = outer();

fn();
fn();
fn = outer()
fn();


