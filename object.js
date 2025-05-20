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

//first
let percentage=(m1,m2,m3)=>{
    console.log("the percentage of " + m1 +" and "+ m2 + " and "+ m3 + " is " + ((m1+m2+m3)/3));
}
percentage(58,49,98) 



//second
let SI=(P,R,T)=>{
    console.log("the SI of " + P +" and "+ R + " and "+ T + " is " + ((P+R+T)/100));
}
SI(10,22,13)



//THIRD
let sumof3=(num1,num2,num3)=>{
     console.log("the sum of 3 number " + num1 +" and "+ num2 + " and "+ num3 + " is " + (num1+num2+num3));
}
sumof3(10,23,43)


//fourth
let numcheck=(number)=>{
   return (number>0) ? console.log("positive") : console.log("nagative");
        
}
numcheck(20)


//fifth
let areaR=(len,wid)=>{
    return len*wid
    
}
console.log( areaR(15,20));



// odd /even
let oddeven=(numberr)=>{
    if(numberr%2==0){
        return console.log("even");
        
    }
    else{
          return console.log("odd");
    }
}
oddeven(15)