// console.log("hello world")

// var name = "raju";
// var age = 22;
// var city = "hyd"

// console.log(`My Name is ${name}\n age ${age}\n lives in ${city}`)



// var tutorial = "java script"
// var tutorial = "complete web development"
// console.log(tutorial)

// {
//     var tutorial = "java script"
//     {
//         var tutorial = "python"
//         {
//             var tutorial = "Angular"
//             console.log(tutorial)
//         }
//         console.log(tutorial)
//     }
//     console.log(tutorial)
// }


// let tutorial = "java script"
// let tutorial = "python"        // you cannot redeclare same variable with let

// {
//     let tutorial = "java script"
//     {
//         let tutorial = "python"
//         {
//             let tutorial = "Angular"
//             console.log(tutorial)
//         }
//         console.log(tutorial)
//     }
//     console.log(tutorial)
// }


// const tutorial = "java script"
// const tutorial = "python"        // since it is constant we cannot redeclare the const variable

// {
//     const tutorial = "java script"
//     {
//         const tutorial = "python"
//         {
//             const tutorial = "Angular"
//             console.log(tutorial)
//         }
//         console.log(tutorial)
//     }
//     console.log(tutorial)
// }



//  NaN (Not a number) , null , undefined


// let n = "raju"/2;
// console.log(name)

// let m = null;
// console.log(m);

// let v
// console.log(v)

// Understanding operators     ==  and ===

// let a = 10 == 10
// console.log(a) // true

// let a2 = 10 === 10
// console.log(a2) // true

// let a3 = 10 == "10"
// console.log(a) // true

// let a4 = 10 === "10"
// console.log(a4) // false


// JavaScript dialog box functions 

// let res = alert("Be, safe from virus attack")
// console.log(res)  // undefined
// let res2 = prompt("what is your name")
// console.log(res2)
// let res3 = confirm("is it you??");
// console.log(res3) // OK -> true  Cancle -> false


// Understanding Switch Case

// let weekday = parseInt(prompt("Enter the week number"));


// switch(weekday){
//     case 1: alert("Monday")
//             break
//     case 2: alert("Tuesday")
//             break
//     case 3: alert("Wednesday")
//             break
//     case 4: alert("Thursday")
//             break
//     case 5: alert("Friday")
//             break
//     case 6: alert("Saturday")
//             break
//     case 7: alert("Sunday")
//             break
//     default : alert("Enter the valid week number")
//             break   
    
// }


//  pre-increment, post-increment, pre-decrement, post-decrement

let n =10;
// ++n;
// console.log(n);  

// console.log(++n)

// n++;
// console.log(n)

//console.log(n++)

// --n;
// console.log(n)

// console.log(--n)

// n--;
// console.log(n)

// console.log(n--)


//    functions 

// function checkEvenOrOdd(n){
//     if(n%2 ==0){
//         return "Even"
//     }
//     return "Odd"
// }

// console.log(checkEvenOrOdd(2))
// console.log(checkEvenOrOdd(3))
// console.log(checkEvenOrOdd(4))


//      list

let favouriteFruits =["apples", "Kiwi", "oranges","graphes"];
// console.log(typeof favouriteFruits)
// console.log(favouriteFruits)

// console.log(favouriteFruits[0])
// console.log(favouriteFruits[1])
// console.log(favouriteFruits[2])
// console.log(favouriteFruits[3])

// for(let i=0;i<favouriteFruits.length;i++){
//     console.log(favouriteFruits[i]);
// }
    

          // Array Methods --> push() pop(), unshift(), shift()

// favouriteFruits.push("banana");
// console.log(favouriteFruits)

// let remove = favouriteFruits.pop();
// console.log(remove)
// console.log(favouriteFruits)

// favouriteFruits.unshift("watermelon");
// console.log(favouriteFruits)

// let removefirst = favouriteFruits.shift();
// console.log(removefirst)
// console.log(favouriteFruits)



//    Objects

// let person = {
//     name: "raju",
//     age : 22,
//     city : "hyd",
//     favouriteFruits :["apples", "Kiwi", "oranges"],
//     marksLevelWise:{
//         tenth : 9.5,
//         inter: 952,
//         btech: 8.8
//     }
// }

// console.log(person)
// person.surname = "Madannagari"
// console.log(person)

// delete person.name
// console.log(person)
// console.log(person.name)
// console.log(person['name'])

// console.log(person.favouriteFruits[2])

// console.log(person.marksLevelWise.inter)