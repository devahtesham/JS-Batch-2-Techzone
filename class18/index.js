// console.log("hello world");
// setTimeout(()=>{
//     console.log("hello world");
//     console.log("hello world");
    
// },3000)

// console.log("hello world");
let employees = [
    {
        name:"Ammad",designation:"Intern Wordpress Dev",salary:150000
    },
    {
        name:"ali haider",designation:"Wordpress Dev",salary:150000
    },
    {
        name:"Mahad",designation:"Senior Wordpress Dev",salary:150000
    }
]

// add employee in DB
let addEmployee = (employee,callback)=>{
    setTimeout(()=>{
        employees.push(employee)
        callback()
    },2000)
    
}

// get all employees from  DB
let getEmployees = ()=>{
    setTimeout(()=>{
        employees.forEach((employeeData)=>{
            // console.log(employeeData);
        })
    },1000)
}

let newEmployee={
    name:"ahtesham",designation:"dev",salary:150000
}
addEmployee(newEmployee,getEmployees)

// ================= LOCAL STORAGE ========
let nameField = document.getElementById("displayName")
let btn = document.getElementById("btn")
let btndel = document.getElementById("btndel")
let resetBtn = document.getElementById("resetBtn")

btn.addEventListener("click",()=>{
    let myname = {
        name:"ali",
        age:22,
        course:"js"
    }
    // nameField.innerText = myname
    // console.log('myname:- ',myname);
    localStorage.setItem('data',JSON.stringify(myname))
    // btn.style.display = 'none'
})

// btndel.addEventListener("click",()=>{
//     nameField.innerText = " "
//     localStorage.removeItem("name")
// })

// resetBtn.addEventListener("click",()=>{
//     localStorage.clear()
// })
window.addEventListener("load",()=>{
    let myData = JSON.parse(localStorage.getItem("data"))
    console.log(myData);
    // nameField.innerText = myData
})


