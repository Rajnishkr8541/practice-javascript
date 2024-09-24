// const coding=["js", "ruby","python", "java"]

// const values= coding.forEach((item)=>{
//     console.log(item);
// })


// const num=[1,2,3,4,5,6,7,8,9,10]

// const nums=num.filter((num)=>num>4)

// console.log(nums);
const num=[1,2,3,4,5,6,7,8,9,10]

// const nums=num.filter((num)=>{
//     return num>3
// })

// const nums=[]

// num.forEach((num)=>{
//     if(num>3){
//         nums.push(num)
//     }
// })


// console.log(nums);


// const arr=[1,2,3]

// const total=arr.reduce(function(acc, cv){

//     console.log(`acc: ${acc} and cv: ${cv}`);
//     return acc+cv
// },0)

// console.log(total);



const Books=[

    {
        booksName:"java",
        price:899
    },
    {
        booksName:"javascript",
        price:1999
    },
    {
        booksName:"DSA",
        price:1899
    },
    {
        booksName:"python",
        price:199
    },
    {
        booksName:"C++",
        price:2999
    },

]

const totalPrice= Books.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(totalPrice);




