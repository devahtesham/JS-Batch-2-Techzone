
// ========= start: DATA TYPES IN JAVASCRIPT =======
/*
    1. primitive
        . String
        . Number
        . Boolean
        . undefined
        . null

    2. Referene
        . Arrays
        . object
        . Functions
*/

// // let num = 521;
// let myvar = undefined 
// console.log(typeof myvar);

// ============ start: Array ====================
// const arr = new Array("ali","aslam","javeria","noor bano",true,420)
let arr = ["ali","aslam","javeria","noor bano",true,420];
// const arr2 = [1,2,3,4,6,7,8]
// console.log(arr[1],arr[2],arr[2],arr[4]);
// addition 
// arr.push("Pushpa");
// arr.unshift("Pushpa")
// arr.splice(3,0,"hassan")          // addition
// arr.splice(3,0,"hassan")          // add with delete

// deletion
// arr.pop()
// // let deletedEl = arr.shift()
// console.log(deletedEl);
// const ans = arr.concat(arr2)
// console.log(ans);

// getting all values of an array via loop
// for(let i=0 ; i<arr.length ; i++){
//     // console.log(arr[i]);
// }

// forEach
// let ans = arr.forEach(function(element){
//     // console.log(element);
// })

// //map
// let ans;
// ans = arr2.map(function(element){
//     return element*2 
// })
// console.log(ans);   

// filter 
// let filteredVal = arr2.filter(function(num){
//    return num>3
//    sjdhsjds
// })
// console.log(filteredVal);
// console.log(arr2);
// const arr2 = [1,2,3,4,6,7,8,9]
// indexOf
// console.log(arr2.indexOf(4));

// join
// let ans = arr2.join("$")
// let ans1 = ans.split("$")
// console.log(ans1);

//reduce
// let ans = arr2.reduce(function(prev,curr){
//     return prev+curr
//     //      0  + 1
//     //      1 + 2
//     //      3 + 3
// },0)
// console.log(ans);

//reverse
// console.log(arr2.reverse());

//slice
// console.log(arr2.slice(4));

//sort
// let myNewArr = [13,245,56,76,38,28,89,83,84]
// console.log('old',myNewArr);
// console.log('new',myNewArr.sort(function(a,b){
//     return a-b
// }));

// toString()
// console.log(myNewArr.toString());

/*
MULTIDIMENSIONAL ARRAY:-
    Array inside another array
*/ 
let multiDimArray = [
    ['a','b','c','d','e','f',],
    ['g','h','i','j','k','l'],
]

// for(let i=0 ; i<multiDimArray.length ;i++){
//     for(let j=i ; j<multiDimArray[i].length ; j++){
//         console.log(multiDimArray[i][j]);
//     }
// }

// ARRAY DESTRUCTURING
const myNewArr = ['a','b','c','d','e','f',]
// console.log(myNewArr[0],myNewArr[1]);
const [a,b] = multiDimArray
// ============ end: Array ====================
