// function myName(){
//     console.log("R")
//     console.log("A")
//     console.log("J")
//     console.log("N")
//     console.log("I")
//     console.log("S")
//     console.log("H")
// }
// myName()

// function addTwoNo(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNo(3,4)

// function addTwoNo(num1,num2){
//     let result=num1+num2
//     return result
// }

// const result=addTwoNo(4,4)
// console.log("Result: ", result)


// function addTwoNo(num1,num2){
    
//     return num1+num2
// }

// const result=addTwoNo(4,4)
// console.log("Result: ", result)


//   function loggedIn(username,password){
//     if(username===undefined )
//         console.log("enter your username")
//     else if(password===undefined){
//         console.log("enter your password")
//     }else{
//         return `${username,password} Logged in`
//     }
          

//   }

//   console.log(loggedIn(username="Rajnish",password="123454567"))


// const username={
//     name:"rajnish",
//     price:299
// }

// function loggedIn(user){
//     console.log(`username is ${user.name} price is ${user.price}`);
// }
// loggedIn(username)
    // loggedIn({
    //     name:"Rajnish",
    //     price:299
    // })


    // function username(){
    //     const  name="Rajnish"

    //     function user(){
    //         const password=123123123
    //         console.log(name)
    //     }
    //     // console.log(password)
    //     user()

    // }
    // username()


    // function addOne(num1){
    //     return num1+1
    // }

    // console.log(addOne(5))


    // const addTwo= function(num2){
    //         return num2 + 2

    // }
    // console.log(addTwo(8))


    // const add =  (num1,num2) => {
    //     return num1+num2
    // }                                                     // expelicit return
    // console.log(add(2,2))

    // const add =  (num1,num2) =>  (num1+num2)                  //implicit return
    
    // console.log(add(2,2))

    // const add =  (num1,num2) =>  ({username:"Rajnish"})  // Return Object

    // console.log(add(2,2))


    // immideatly invoked function expression(IIFE)

    // (function raj(){
    //     console.log(`Hi, Welcome`)
    // })(); // semicolon(;) used to run the next code

    // (()=>{
    //     console.log(`my name is Rajnish`)
    // })()


    let val1=5
    let val2=10
    function addNum(num1,num2){
        let total=num1+num2
        return total
    }
    let result1=addNum(val1,val2)
    let result2=addNum(10,2)

