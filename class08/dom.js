/*
DOM (Document Object Model)
    DOM is a tree like structure of HTML elements of a complete HTML document
*/
// console.log(document);

// 1. query selector
// const heading = document.querySelector("section");
// console.log(heading);

// 2. query selector all
// const allHeadings = document.querySelectorAll("h1");
// console.log(allHeadings.length);
// allHeadings.forEach((heading)=>{
//     console.log(heading);
// })

//3.getElementById
// const newHeading = document.getElementById("heading3");
// console.log(newHeading);

const ul = document.getElementById("list-container");
// console.log(ul.children);
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild);
const myEl = ul.firstElementChild
console.log(myEl.nextElementSibling.parentElement.lastElementChild.firstElementChild.parentElement.parentElement);



