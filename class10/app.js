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
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()      // prevent page refreshing which is the default behaviour of a browser
    console.log(e.target);
})