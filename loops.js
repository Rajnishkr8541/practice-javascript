// for (let i = 1; i <=10; i++) {
    
//     for (let j = 1; j <=10; j++) {
       
        
//         console.log(i + '*' + j +'='+ i*j)
//     }
//     console.log(`Table of 1 to 10 : `);
    
// }


// const myarray=['Ram','Sita','lakshman','bharat']
// console.log(myarray.length)
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }

// const myarray=['Ram','Sita','lakshman','bharat']

// let arr=0
// while(arr<myarray.length){
//     console.log(`value of : ${myarray[arr]}` )
//     arr++
// }



// const greeting= "Hello Rajjo"

// for (const greet of greeting) {
//     console.log(`each char is ${greet}`)
// }


//map


// const map= new Map()

// map.set('IN',"India")
// map.set('Bhr',"Bihar")
// map.set('Raj',"Rajasthan")

//  console.log(map);

// for (const [key,value] of map) {
//     console.log(key, '=', value);
    
// }

// const myObj= {
//     'state':'Bihar',
//     'state1':'up'
// } 
// for (const key in myObj) {

//     console.log(`${key} = ${myObj[key]}`)
    
// }


// FOREACH

// const coding=["js", "ruby","python", "java"]

// coding.forEach( function (val){
//     console.log(val)
// } )


const coding=["js", "ruby","python", "java"]

// coding.forEach( (val) => {
//     console.log(val)
// } )


//  function printMe(val){
//     console.log(val);
//  }
//  coding.forEach(printMe)


// coding.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })


const myObj=[
    {
        language:"Hindi",
        languageState:"Bihar"
    },
    {
        language:"Hindi",
        languageState:"up"
    },
    {
        language:"Hindi",
        languageState:"rajsthan"
    },
    {
        language:"Hindi",
        languageState:"jharkhand"
    }
]

myObj.forEach((val)=>{
    console.log(val.languageState)
})




