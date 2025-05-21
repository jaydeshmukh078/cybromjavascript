// // -------------------normal function-------------------------------------------
// function okk() {
//     console.log("normal function");

// }
// okk();




// // -------------------anonymus function-------------------------------------------
// let ano = function () {
//     console.log("heyy i am anoymus function");

// }
// ano();



// // -------------------IIFE function-------------------------------------------
// // -------------------immediet invoke function expression-------------------------------------------
// (function () {
//     console.log("IIFE function");
// })()



// // -------------------Arrow function(special type of anonymus function)-------------------------------------------
// let arrow = () =>
// {
//     console.log("arrow function");
// }
// arrow();



// let anshul=()=>{
//     alert("hey i am first alert")
// }


// let jay=()=>{
//     alert("hey i am second alert")
// }



// // -------------------Object------------------------------------------- 
// let obj = {
//     name: "anshul",
//     // name: "jay",   // always uniqe
//     age: 25,
//     city: "delhi",
//     state: "uttar pradesh",
//     hobbies: ["cricket", "football", "reading"],
//     fun:function() {
//         console.log("welcome to the function");
//     }
// }
// obj.fun()
// console.log(obj.name);
// obj.college = "RGPV"     // add data
// console.log(obj.city);
// console.log(obj.hobbies[0]);   // array access
// delete obj.name  // delete data
// obj.age = 26   //update data
// console.log(obj);




// // ----------------------------------------------

// let welcome=(num1,num2)=>{     // parameter

//     console.log("the sum of " + num1 +" and "+ num2 + " is " + (num1+num2));

// }
// welcome(5,4)    //argument


// =========================================================================

// let jay=(a,b)=>{

//     return a+b
// }
// let result=jay(4,5)
// console.log(result);


//==================================================================================

//===============================classwork================================

// //first
// let percentage=(m1,m2,m3)=>{
//     console.log("the percentage of " + m1 +" and "+ m2 + " and "+ m3 + " is " + ((m1+m2+m3)/3));
// }
// percentage(58,49,98) 



// //second
// let SI=(P,R,T)=>{
//     console.log("the SI of " + P +" and "+ R + " and "+ T + " is " + ((P+R+T)/100));
// }
// SI(10,22,13)



// //THIRD
// let sumof3=(num1,num2,num3)=>{
//      console.log("the sum of 3 number " + num1 +" and "+ num2 + " and "+ num3 + " is " + (num1+num2+num3));
// }
// sumof3(10,23,43)


// //fourth
// let numcheck=(number)=>{
//    return (number>0) ? console.log("positive") : console.log("nagative");

// }
// numcheck(20)


// //fifth
// let areaR=(len,wid)=>{
//     return len*wid

// }
// console.log( areaR(15,20));



// // odd /even
// let oddeven=(numberr)=>{
//     if(numberr%2==0){
//         return console.log("even");

//     }
//     else{
//           return console.log("odd");
//     }
// }
// oddeven(15)




// =======================loops=========================================


// forin loop

// let obj={
//     name:"sachin",
//     age:25,
//     city:"mumbai",
// }
// for (let i in obj) {
//     console.log(i + " => " + obj[i]);
// }




// // forof loop

// let arr=["alfa","beta","gama","delta"]
// for (let i of arr) {
//      console.log(i);
// }





// ====================== map method =========================================
// let numbers = [1, 2, 3, 4, 5];
// let doubleNumbers = numbers.map(num =>
//     num * 2);
// console.log(doubleNumbers);
// [2, 4, 6, 8, 10]
// map() returns a new array with the results of applying the provided function on every element



// let num = [2, 3, 4, 5];

// let newnum = num.map(  (e) => {

//    return e * e   }   )

// console.log(newnum);






//============================== filter method ================================

// let numbers = [1, 2, 3, 4, 5,
//     6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(num =>
//         num % 2 == 0);
//     console.log(evenNumbers);
//    // [2, 4, 6, 8, 10]


// let num=[5,6,7,4,5,6,7,32,12,98]
// let newnum=num.filter((e)=>{
//     return e>10 }
// )
// console.log(newnum);
// // [32,12,98]




//=================================== foreach==============================
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num =>
//         console.log(num * 2));
//     // 2, 4, 6, 8, 10



// =========================== some ======================================
// let numbers = [1, 2, 3, 4, 5];
// let hasEven = numbers.some(num =>
//         num % 2 == 0);
//     console.log(hasEven);
//     // true







//koafmlasdmgladm


// Q1. what is call back function?
// Q2. what is higher order function?