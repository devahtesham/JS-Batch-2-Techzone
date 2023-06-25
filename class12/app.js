const btn = document.getElementById("btn");
const btnClick = (name)=>{
    console.log(name);
}

// click

// btn.addEventListener(eventName,callbackFn)
// btn.addEventListener("click",(e)=>{
//     e.target.style.backgroundColor = "red"
// })
// btn.addEventListener("click",btnClick)

// submit
// form handling
// const form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault()      // prevent page refreshing which is the default behaviour of a browser
    
//     // form validation
//     const name = e.target.name.value
//     const email = e.target.email.value
//     const password = e.target.password.value;

//     if(!name || !email || !password){
//         alert("Required Fields are missing !!")
//         return
//     }
    
//     if(password.length<7){
//         alert("password is too short  !!")
//         return
//     }
//     if (!email.includes("@")){
//         // alert("Invalid email ")
//         document.getElementById("email-error").innerText = "Invalid email";
//         document.getElementById("email-error").style.height = 'auto'
//         return
//     }
//         console.log("form submitted !!");
//         console.log("Data sending to DB");
  

// })

// mouseover and mouseout
// const heading = document.querySelector("form h1");
// heading.addEventListener("mouseover",()=>{
//     console.log("i am hovering");
//     heading.style.color = "red"
// })

// heading.addEventListener("mouseout",()=>{
//     // console.log("i am hovering");
//     heading.style.color = "black"
// })

// change
const nameField = document.getElementById("name");
// nameField.addEventListener("change",()=>{
//     console.log("i am firing");
// })

// keyup
// nameField.addEventListener("keyup",()=>{
//     console.log("i am firing");
// })

// onload
// window.addEventListener("load",()=>{
//     console.log("This is Cokkie MODAL");
// })

// onscroll
// document.addEventListener("scroll",()=>{
//     console.log("Document is scrilling");
// })

// copy
const h1 = document.querySelector("form h1");
h1.addEventListener("copy",()=>{
    console.log("Copying is not allowed !");
})




