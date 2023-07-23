// ======= OOP (Object Oriented Programming )========
// Function constructor
// function Users(name,age,address,salary){
//     // attribuutes
//     this.name = name,
//     this.age = age,
//     this.address = address,
//     this.salary = salary

//     //methods
// }
// let user1 = new Users("mahad",22,"abc road",200000);
// let user2 = new Users("ali",22,"abc road",30000000);
// console.log(user1,user2);


// ====== classes 
/*
classes:-
    blue print/template from which objects are formed.
    1. attributes
    2. methods
*/

class Car{
    constructor(name,make,model,color,type){
        // attributes
        this.name = name,
        this.make = make,
        this.model = model,
        this.color = color,
        this.type = type
    }
    // methods
    reverse(){
        console.log(`${this.name} has reverse option`);
    }
    windowLock(){
        console.log(`${this.name} which has a model ${this.model} has window lock`)
    }
    massagerSeats(){
        console.log(`${this.name} which has ${this.type} has massager Seats`);
    }

}

let car1 = new Car("Civic","honda","2025","Black","automatic");
// let car2 = new Car("Civic","honda","2025","Black","automatic");
// console.log(car1);
// car1.reverse()
// car1.windowLock()

// ======== inheritance 
class Sportscar extends Car{
    constructor(name,make,model,color,type,hp,nos){
        super(name,make,model,color,type)
        this.hp = hp
        this.nos = nos
    }
    extraHp(){
        console.log(`${this.name} has ${this.hp}`);
    }
    highSpeed(){
        console.log(`${this.name} has ${this.hp} has ${this.nos}`);
    }
}

let sc1 = new Sportscar("Supra","Honda","1998","Black","Manual","4000","nitro")
// console.log(sc1);
console.log(sc1.extraHp())
