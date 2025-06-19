

let time = new Date()

// let months= ["January","February","March","April","May","June","July","August","September","October","November","December"]
// console.log(months[time.getMonth()])

// let days= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// console.log(days[time.getDay()])

// console.log();



// print counting in console
let  count=10;
 let first

let starttiming=()=>{

    first = setInterval(()=>{
    let mytag = document.querySelector("#num")
    // count++
    mytag.innerHTML = count++
    // console.log(count)
}, 1000)
} 

let stoptiming=()=>{
    clearInterval(first)
}






// setInterval(()=>{
//     console.log(time.getHours);
    
// }, 1000)