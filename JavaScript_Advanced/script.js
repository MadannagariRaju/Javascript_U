//   Asynchronous javascript

// Javascript is Fundamentally synchronous and single threaded.This mean it executes the code line by line and each line must finish before the next line start

// Javascript can also behave Asynchronously through this use of
// 1.Callback
// 2.Promises
// 3.Async/ Await


//        1.Callback

// function greeting(name) {
//     alert("Name :"+name)
// }

// function ProcessUserInput(callback) {          // here callback is just a parameter not a reserved keyword
//     let name = prompt("Enter your name ")
//     callback(name)
// }

// ProcessUserInput(greeting)

// But the problem with callback is callback hell

// for example:

// getdata(function(data){
//     processdata(data,function(processdata){
//         savedata(processdata,function(savedata){
//             // .....
//             // .....
//             // .....
//             // .....
//             // .....
//             // .....
//         })
//     })
// })
// //    It Effects on Performance


// 2.      Promises
// A Promise can be 1) Resolve 2)Reject


// function displaySomething(some) {
//     document.getElementById('demo').textContent = some;
// }

// const myPromise = new Promise((resolve,reject)=>{
//     let x=10
//     if(x==0) resolve('OK')
//     else reject("not ok")
// })

// myPromise.then((value)=>displaySomething(value))
//         .then(()=>console.log("transforming"))
//         .catch((err)=>displaySomething(err))

// but the problem with Promises is if we use .then for many times is not that we want



// 3.    Async/Await

// In Async/Await we wrap the code inside try and catch block

// async function myDisplay() {
//     try{
//         let myPromise = new Promise((resolve,reject)=>{
//             let x=10;
//             if(x==0) resolve('I Love you')
//             else reject ("I don't love you")
//         })
//         document.getElementById('demo').textContent = await myPromise;
//     }
//     catch(error) {
//         document.getElementById('demo').textContent = error
//     }
// }

// myDisplay()


async function takePicture() {
    let value = await fetch('https://dog.ceo/api/breeds/image/random')
    let jsonobject = await value.json();
    let img = document.createElement('img')
    img.src = jsonobject.message
    document.getElementById('demo').appendChild(img)
    console.log(jsonobject)
}
takePicture()