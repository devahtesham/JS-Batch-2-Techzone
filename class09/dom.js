// /*
// DOM (Document Object Model)
//     DOM is a tree like structure of HTML elements of a complete HTML document
// */
// // console.log(document);

// // 1. query selector
// // const heading = document.querySelector("section");
// // console.log(heading);

// // 2. query selector all
// // const allHeadings = document.querySelectorAll("h1");
// // console.log(allHeadings.length);
// // allHeadings.forEach((heading)=>{
// //     console.log(heading);
// // })

// //3.getElementById
// // const newHeading = document.getElementById("heading3");
// // console.log(newHeading);

// // const ul = document.getElementById("list-container");
// // // console.log(ul.children);
// // // console.log(ul.firstElementChild)
// // // console.log(ul.lastElementChild);
// // const myEl = ul.firstElementChild
// // console.log(myEl.nextElementSibling.parentElement.lastElementChild.firstElementChild.parentElement.parentElement);

// // =========== MODIFY TEXT =============
// const paragraph = document.getElementById("para");
// // 1. textContent
// // 2. innerText

// // paragraph.textContent = "Changing Text";
// // paragraph.innerText = "changing via innerText"

// // =========== create new element from JS =======
// // commonJS
// // const elContainer = document.getElementById("new-container");
// // const h1 = document.createElement("h1");
// // h1.innerText = "Hello Javascript";
// // elContainer.append(h1)

// //AdvanceJS
// // const elContainer = document.getElementById("new-container");
// // elContainer.innerHTML = "<h1>Changing Text through innerHTML</h1>"

// // ================ get Atribute ==========
// // const imgContainer = document.querySelector("#new-container img");
// // const oldURL = imgContainer.getAttribute("src");
// // imgContainer.setAttribute('src',"./assets/logo.png")

// // ========== via innerHTML ==========

// // let newURL = './assets/logo.png'
// // const imgContainer = document.getElementById("new-container");
// // imgContainer.innerHTML = `
// //         <img
// //             class="img-container" 
// //             src="${newURL}" alt=""
// //         >

// // `

// // ============ classList==========
// const newPara = document.getElementById("new-para");
// // console.log(newPara);
// // console.log(newPara.className);
// // newPara.classList.remove("success")
// // newPara.classList.add("success")
// // newPara.classList.add("error")

// ============ updating css through javascript ========
// const heading = document.querySelector(".heading");
// heading.style.color = "black";
// heading.style.backgroundColor = "pink"











