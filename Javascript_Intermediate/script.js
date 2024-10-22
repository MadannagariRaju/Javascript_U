console.log("java script intermediate")

//   Javascript String Methods

// let fullName = "Madannagari Raju"

// console.log(fullName.replace("Madannagari", "Madanna"))

// console.log(fullName.split(" "))
// console.log(fullName.split("a"))

// console.log(fullName.length)

// console.log(fullName.toLowerCase())

// console.log(fullName.toUpperCase())

// console.log(fullName.includes("gari"))



//      JavaScript Number Methods

// let age = 19.5
// console.log(age)
// console.log(age.toFixed())  // 20
// console.log(age.toFixed(4)) // 19.5000
// console.log(typeof age.toString())
// console.log(age.toExponential())
// console.log(Number.isInteger(age))
// age =20
// console.log(Number.isInteger(age))
// console.log(typeof parseInt("50"))
// console.log(typeof parseFloat("15.23"))


//     JavaScript fruitsay Method

let fruits =["Apple","kiwi","oranges","banana"]
// console.log(fruits)
// console.log(fruits.length)

// fruits.push("graphes");
// console.log(fruits)

// fruits.pop();
// console.log(fruits)

// fruits.unshift("papaya")
// console.log(fruits)

// fruits.shift()
// console.log(fruits)

// console.log(fruits.indexOf("kiwi"))
// // console.log(fruits.splice(2,1))        // fruits.splice(index,count of elements to be removed)
// console.log(fruits.splice(2,0,"leech","fruit"))
// console.log(fruits)

// let vegies =["brinjal","tamoto","bottle guard","bitter guard"]

// console.log(vegies)

// let newfruits = fruits.concat(vegies)
// console.log(newfruits)

// function consoleAllFruits(fruit) {
//     console.log(fruit)
// }
// fruits.map(consoleAllFruits)


// fruits.map((fruit,i)=>{
//     console.log(`${i+1}) ${fruit}`)
// })


// let arr = fruits.map((fruit,i)=>{
//             return (`${i+1}) ${fruit}`)
//             })
// console.log(arr)



// let fivemultiple = [5,10,15,20,25,30,35,40,45,50]

// let afterdividingbyfive = fivemultiple.map((ele)=>{
//     return ele/5;
// })
// console.log(afterdividingbyfive)



// let allGrades = [1,2,3,4,5,6,7,8,9,10];

// let sumofallgrades = allGrades.reduce(function(prev,curr){
//     return prev=prev+curr;
// })
// console.log(sumofallgrades)


//            Objects Methods

// let person ={
//     name: "LeoNarld",
//     age:22,
//     isMale: true
// }

// console.log(person)
// console.log(person.name)
// console.log(person["name"])

// console.log(Object.keys(person))
// let keysArr = Object.keys(person);
// console.log(keysArr)  // Array

// console.log(Object.values(person))
// let valuesArr = Object.values(person)
// console.log(valuesArr)  // Array

// console.log(Object.freeze(person))  

// console.log(Object.isFrozen(person))

// person.isFemale = false;
// console.log(person)


//      for in

// for(let prop  in person) {
//     console.log(`${prop} : ${person[prop]}`)
// }

// let demoArr = [10,20,30,40,50]

// [10, 20, 30, 40, 50]  Arraylist internally implements objects index is key and ele is value
// 0 : 10
// 1 : 20
// 2 : 30
// 3 : 40
// 4 : 50

// console.log(demoArr)
// for(let ele  in demoArr) {
//     console.log(ele)    
// }

// for(let ele  in demoArr) {
//     console.log(demoArr[ele])
// }


//           for of


// let demoArr = [10,20,30,40,50]

// for(let ele of demoArr) {
//     console.log(ele)
// }

// let learn = "Javascript_Intermediate"
// for(let char of learn) {
//     console.log(char)
// }


//          forEach

// let students = [["raju",10,10],["nandu",9,4],["surya",7,4],["vikram",3,4],["moiz",5,7]]

// students.forEach((student,i)=>{
//     console.log(`${i+1}) ${student[0]} first Grade : ${student[1]} second Grade : ${student[2]}`)
//     if(student[1]+student[2]/2 >= 6) {
//         console.log(`passed with ${student[1]+student[2]/2}`)
//     }else{
//         console.log(`failed with ${student[1]+student[2]/2}`)
//     }
// })


//      Break and Continue

let arrdemo = [0,1,2,3,4,5,6,7,8,9,10]

console.log("break")
for(let ele of arrdemo) {
    if(ele%2 == 0){
        console.log(ele)
    }else{
        break;
    }
}

console.log("continue")
for(let ele of arrdemo) {
    if(ele%2 == 0){
        console.log(ele)
    }else{
        continue;
    }
}