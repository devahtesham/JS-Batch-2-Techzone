// const name =  prompt("Enter your name:- ")
// const experience =  +(prompt("Enter your experience:- "))
// let designation;
// if(experience < 10 && experience >=7){
//     designation = "Senior Architect"
// }else if (experience < 7 && experience >=5){
//     designation = "Senior Software Engineer"
// }else if (experience < 5 && experience >=3 ){
//     designation = "Software Engineer"
// }else if (experience < 3 && experience >=1){
//     designation = "Mid level Soft Engineer"
// }else{
//     designation = "Junior"
// }

// switch case
// let age = +prompt("Enter your age:- ");
// switch(age){
//     case 19:
//         console.log("You are Teenager");
//         break;
//     case 20:
//         console.log("You are adult");
//         break;
//     case 28:
//         console.log("You are mature");
//         break;
//     default:
//         console.log("Invalid input");
    
// }

// =================== loops ==============
// 1.) for loop
/*
    for(initialization; condition; increement/decreement){
        // body
    }
*/
for(let i = 0 ; i<10 ; i++){
    if (i===2){
        // break    // break the loop immediately
        continue   // skip the point
    }
    console.log("hello world",i);
}
