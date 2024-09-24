// const tools=new Object()
// const tools ={}
// tools.name="rinch"
// tools.name1="screw driver"

// console.log(tools)

// console.log(Object.keys(tools))
// console.log(Object.values(tools))
// console.log(Object.entries(tools))

// console.log(tools.hasOwnProperty("name2"))

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
  // Dot notation
//   console.log(person.name); // Output: John
  
  // Bracket notation
//   console.log(person['age']); // Output: 30


// const car = {
//     brand: "Toyota",
//     model: "Corolla"
//   };
  
  // Adding a new property
//   car.year = 2021;
  
  // Modifying an existing property
//   car.model = "Camry";
  
//   console.log(car); 
  // Output: { brand: 'Toyota', model: 'Camry', year: 2021 }
  

//   const book = {
//     title: "JavaScript Guide",
//     author: "John Doe",
//     year: 2023
//   };
  
  // Deleting a property
//   delete book.year;
  
//   console.log(book);
  // Output: { title: 'JavaScript Guide', author: 'John Doe' }
  

//   const student = {
//     name: "Alice",
//     grade: "A"
//   };
  
  // Using 'in' operator
//   console.log('name' in student); // Output: true
  
  // Using hasOwnProperty method
//   console.log(student.hasOwnProperty('grade')); // Output: true
  

const product ={
    id: 101,
    name:"Laptop",
    price: 500000
};

// for(let key in product){
//     console.log(key,product[key])
// }
Object.keys(product).forEach((key)=>{
    console.log(key,product[key])
})

