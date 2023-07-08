// old js
// let obj1 = new Object();
// obj1.name = "ammar";
// obj1.age = 30
// console.log(obj1)

// new way (object literal)
let obj1 = {
    // properties 
    name:"ahtesham",
    course:"MERN",
    timings:{
        firstSlot:"9-6",
        secondSlot:"8-10",
        students:[
            {
                name:"ali haider",
                fees:50000,
                gender:"M"
            },
            {
                name:"Mahad",
                fees:50000,
                gender:"M"
            },
            {
                name:"Chutti Baaz",
                fees:50000,
                gender:"M"
            },
            
        ]
    },
    // functions

    reading(sentence){
        console.log(this.name + " " + sentence)
    }
}
// console.log(obj1['course'])

// delete obj1.course
// let students = [];
// obj1.timings.students.map((user)=>{
//   console.log(user)
// })

// for new loops
// for of loop (Array)
// for in loop (Object)

let students = [
    {
        name:"ali haider",
        fees:50000,
        gender:"M"
    },
    {
        name:"Mahad",
        fees:50000,
        gender:"M"
    },
    {
        name:"Chutti Baaz",
        fees:50000,
        gender:"M"
    },
    
]
// students.
// for(let i of students){
//     console.log(i)   
// }

// for(let i in obj1){
//     console.log(i, obj1[i])
// }

// obj1.reading("reading a book")

// Array Destructuring
// let arr = ['a','b','c','d','e','f','g','h']
// let [firstElement,secondElement, , , fifthElement] = arr
// console.log(firstElement,secondElement,fifthElement)

// Object Destructuring
let {name,timings} = obj1;

let name = "jhdgjsdghjsd"

console.log(name,timings)


