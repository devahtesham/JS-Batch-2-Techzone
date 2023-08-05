// ============= PROMISES ========
const getUser = (user)=>{
    return new Promise((resolve,reject)=>{
        
        if(user){
            resolve("User is Present ")
        }else{
            reject("Invalid User !")
        }
    })
}
/*
    Prmise.all:- 
        if any of one promise is reject from the array of promises, it considered overall reject

    Prmise.allSettled:- 
        if any of one promise is reject from the array of promises, it gives the overall result of fullfilled as well as rejected promises

*/
// Promise.all([getUser(true),getUser(false),getUser(true)])
// Promise.allSettled([getUser(true),getUser(false),getUser(true)])
// console.log(ans);
    // .then((res)=>{
    //     console.log(res[0]);
    //     console.log(res[1]);
    //     console.log(res[2]);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })

// ==================== FETCH API =============
// syntax
// fetch("url",{
//     method:"GET/POST/PUT/DELETE"
// })

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// ============== async await ===========
const getTodos = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
}
getTodos()