'use strict'

// let myname=()=>{

//     document.querySelector("#myname").innerHTML = "Jay";
//     document.querySelector("#myname1").innerHTML = "Jay deshmukh";
    
// }

// let surname=()=>{

//    let mytag = document.querySelector(".surname")
//    let mytag1 = document.querySelector(".surname")

//   mytag.innerHTML = "jay Deshmukh";
//   mytag1.innerHTML = "jay";


//   // make 3 button already write a string 
//   // change color (red button to red)
//   // change color (green button to green)
//   // change color (blue button to blue)
    
// }

let mytag = document.querySelector("#changecolor")

let red=()=>{
   mytag.style.backgroundImage = "url('download.jpeg')"
   mytag.style.borderColor = "blue" 
   mytag.style.borderWidth = "10px"
}


let green=()=>{
  mytag.style.backgroundImage = "url('download 2.jpeg')"
    mytag.style.borderColor = "red" 
   mytag.style.borderWidth = "10px"
}


let blue=()=>{
  mytag.style.backgroundImage = "url('download 1.jpeg')"
    mytag.style.borderColor = "green" 
   mytag.style.borderWidth = "10px"
}

let reset=()=>{
 mytag.style.backgroundImage = ""
    mytag.style.borderColor = "" 
   mytag.style.borderWidth = ""
}