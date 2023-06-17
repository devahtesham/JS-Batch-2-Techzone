/*
FUNCTIONS
syntax:- function functionName(){       //  function initialization
    // function body
}

functionName()      // function calling 


FUNCTION TYPES(BY NATURE):-
    1.parameterized functions:- which have paramters and arguements
    2.parameterless/non-parameterized functions :- which not have paramters and arguements
FUNCTION TYPES(BY VERSIONS):- 
    1.Function declaration
    2. function expression
    3. Arrow functions

*/
// let myname = "ahtesham"
// // parameter less
// function displayName(){
//     console.log();
// }
// displayName(myname)

// // paramterized functions
// function displayName(fname,mname){
//     console.log(fname + " "+ mname + " " + " ");
// }
// displayName("muhammad","ahtesham","akram")

// by versions
//1. function declaration
// displayName("ahtesham")
// function displayName(myname){
//     console.log(myname);
// }

// 2. function expression
const newFunc = function displayName(){
    console.log("ahtesham");
    
}
// newFunc()

// 3. arrow function
let num1 = 10;
let num2 = 20
const addNumbers = (a,b)=>{
    let c = a+b
    return c

}
const c = addNumbers(num1,num2)

const multiply = (num)=>{
    let number = 5;
    console.log(number*num);
}
// multiply(c)

