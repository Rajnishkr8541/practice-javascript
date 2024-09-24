let name="Rajnish"
let age=21


// console.log(`my name is ${name} and my age ${age} `)

// console.log(name.charAt(0))

// let a= 10
// let b=20

// if(a>=b ){
//     console.log("a is greater than b");
// }
// else if(a==b){
//     console.log("a is equal to b");
// }
// else{
//     console.log("a is less than b")
// }
// let a= "ramu"
// const strObj = new String(a);


// console.log(typeof(name))
// console.log(typeof(age))
// console.log(typeof(strObj))

function Tree(name) {
    this.name = name;
  }
  
  const theTree = new Tree("Redwood");
  console.log(`theTree.constructor is ${theTree.constructor}`);