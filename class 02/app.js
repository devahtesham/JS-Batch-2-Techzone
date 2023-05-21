/*  arithmetic operator
    1. +
    2. -
    3. *
    4. /
    5. %
*/

// add
// const num1 = 10;
// const num2 = 20;
// const ans = num1+num2;

// subtract
// const num1 = undefined;
// const num2 = 20;
// const ans = num1-num2;

// multiply
// const num1 = 5;
// const num2 = 20;
// const ans = num1*num2;

// %
// const num1 = 16;
// const num2 = 15;
// const ans = num2 % num1;  // 15/16 = ?

// let num1 = 10;
// console.log(++num1);
// console.log(num1);
// const num2 = num1;
// console.log(num2);

// Relational operators
// const num1 = '15';
// const num2 = 15;
// const ans = num1 !== num2;  // 15/16 = ?'
// console.log(ans);

// Logical operators
    /*
        OR (||), AND (&&), NOT (!)
    */
// const num1 = 10
// const num2 = 20
// const num3 = 10
// const ans = num1 == num2 && num1 === num3 && num2 === num3
// console.log(!ans);

// Assignment operators
// let num1 = 10;

// // let num1 = num1-1; 
// num1-=1; 
// console.log(num1);


// concatenation
// let fname = "hello"
// let lname = "world"
// console.log(fname + " " + lname);

// ============= Decesion Making statemenconditionts ==========
// let name = "ahtesham"
// if (name === "ahteham"){
//     console.log("NAME IS VALID");
// }else{
//     console.log("NAME IS INVALID");

// }
const name =  prompt("Enter your name:- ")
const experience =  Number(prompt("Enter your experience:- "))
let designation;
if(experience < 10 && experience >=7){
    designation = "Senior Architect"
}else if (experience < 7 && experience >=5){
    designation = "Senior Software Engineer"
}else if (experience < 5 && experience >=3 ){
    designation = "Software Engineer"
}else if (experience < 3 && experience >=1){
    designation = "Mid level Soft Engineer"
}else{
    designation = "Junior"
}
console.log(typeof experience);

console.log("Hi, " + name + "Your desination is " + designation + "and your salary is " + (experience+3));

console.log("Ending of line");

// const num1 =  Number(prompt("Enter num1:- "))
// const num2 =  +prompt("Enter num2:- ")
// console.log(typeof num1)
// console.log(typeof num2)


