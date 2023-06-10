/*
DOM (Document Object Model)
    DOM is a tree like structure of HTML elements of a complete HTML document
*/
// console.log(document);

// 1. query selector
const heading = document.querySelector("section");
console.log(heading);
// query selector all
// const allHeadings = document.querySelectorAll("h1")
// allHeadings.forEach((heading)=>{
//     console.log(heading);
// })