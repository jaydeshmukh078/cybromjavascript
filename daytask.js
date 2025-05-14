// function first() {
//     alert("first function called")
// }
// function second() {
//     alert("second function called")
// }
// function third() {
//     alert("third function called")
// }



// function len() {
//     let text = "siddarth" //string
//     console.log(text.length) //length of the string
// }
// len() //output 8

// // 2.slice()
// let text = "this isstringfrom cybrom"
// console.log(text.slice(7, 13)) //output this is string

// //6 touppercase()
// function upper() {
//     let text = "this is capital letter"
//     console.log(text.toUpperCase()) //output THIS IS CAPITAL LETTER
// }
// upper() //output THIS IS CAPITAL LETTER

// //7. tolowercase()
// function lower() {
//     let text = "THIS IS SMALL LETTER"
//     console.log(text.toLowerCase()) //output this is small letter
// }
// lower() //output this is small letter

// //  3.concat()
// function concat() {
//     let a = "Anshul"
//     let b = "Gajbhiye"
//     console.log(a.concat(" ,", b))
// }
// concat()

// //4. Substring()
// function substring() {
//     let text = "this is substring"
//     console.log(text.substring(5, 7))

// }
// substring()


// //8.trim()
// function trim() {
//     let text = "     text    jsdhdjf     "
//     console.log(text.trim())
// }
// trim()

// //10.charAt()  (perticular charecter ko nikalti hai )
// function charat() {
//     let text = "this is charat"
//     console.log(text.charAt(2)) //output i
//     console.log(text.charAt(5))
//     console.log(text.charAt(8))
// }
// charat()


// //11.charcodeAt() (charecter ka uanic code nikalke deta hai  )
// function charCodeAt() {
//     let text = "this is charCodeAt"
//     let emoji = "😅"
//     console.log(text.charCodeAt(2))
//     console.log(text.charCodeAt(18))
//     console.log(emoji.charCodeAt(0))
// }
// charCodeAt()

// //12.indexOf()
// function indexOf() {
//     let text = "this is indexof"
//     console.log(text.indexOf("f"))
// }
// indexOf()

// // replace
// function replace() {
//     let text = "this is replace this"
//     let text2 = "this is replace This"
//     console.log(text.replace("this", "jsd")) //output jsd is replace this //only one
//     console.log(text.replace(/this/g, "jsd")) //output jsd is jsd //globel
//     console.log(text2.replace(/this/gi, "jsd")) //output jsd is jsd //globel with case insensitive
//     console.log(text.replaceAll("this", "jsd")) //output jsd is jsd //all
// }
// replace()

// //split
// function split() {
//     let text = "this is split"
//     console.log(text.split(" "))
//     console.log(text.split(" ", 2)) //output ["this","is"]
//     console.log(text.split(" ", 3)) //output ["this","is","split"]
//     console.log(text.split(" ", 4)) //output ["this","is","split",""]
//     console.log(text.split(" ", 5)) //output ["this","is","split","",""]
// }
// split()


// Classwork 13/05/2025

// function classwork() {

    //  let html=`<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nostrum rerum ex ipsam ducimus nihil sapiente aut dolor quisquam laudantium voluptatibus expedita magnam quasi ut aliquam aperiam itaque quo, sit necessitatibus repellendus eveniet eligendi. Adipisci, veniam eligendi minima pariatur cum eum distinctio tempora impedit, eius, magni laborum qui ipsam suscipit!</p>`


    //   document.write(html)


//     let name = jay
//     let age = 22
//     let gender = "male"

//     alert(name + age + gender)
// }
// // classwork()


// classwork2

function classwork2(){
    // let a=10
    // let b=20

    // alert(`the sum of ${a} our ${b} is ${a+b}`)

    let arr=["alfa","beta","gama"]

    document.write(arr.pop())
}
classwork2()