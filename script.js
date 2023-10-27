'use strict'

// learn function on javascript

// normal function

// function sayHello(){
//     console.log('hello');
//     return 'Hello dude'
// }

// const text = sayHello();
// console.log(text);

// const sum = (b,a) => a + b;
// console.log(sum(10,20));
// const sum = (b,...a) => {
//     console.log("a : ",a);
//     console.log("b : ",b);
// };
// console.log(sum(10,20,30,40,40));

// const sum1 = (b,...a)=>{
//     let total = 0;
//     for (let i = 0; i< a.length; i++){
//         total += a[i];
//     }
//     return total;
// }
// console.log(sum1(10,20,30,40,40));

// Copy Array with slice from spread operator

// const scores = [10,20,30,40,50];

// slice
// const copyScores1= scores.slice(1,2+1+1);//(start,end)
// console.log(copyScores1);

// From function
// const copyScores2 = Array.from(scores);
// console.log(copyScores2);

// spread operator

// const copyScores3 = [...scores];
// console.log(copyScores3);

// Destructuring 
const product = {
    id:1,
    name: "Pen",
    price: 1.5,
    stock: 10,
};
const {id,name,price,stock} = product;
// console.log(product.id);
console.log("id = "+id);
console.log("name = "+name);
console.log("price = "+price);
console.log("stock = "+stock);

const printReceipt = ({id,name,price,stock})=> {
    console.log(`id = ${id}`);
    console.log(`name = ${name}`);
    console.log(`price = ${price}`);
    console.log(`stock = ${stock}`);
}
printReceipt(product)

// Destructuring Array

const priceList = [10,20,30,40,50];
console.log(priceList[0]);
console.log(priceList.at(1));

// const [price1,price2,price3,price4,price5] = priceList;
// const [price1,price2, ...rest] = priceList;
const [,,price3,price4,price5] = priceList;
console.log(price3,price4,price5);