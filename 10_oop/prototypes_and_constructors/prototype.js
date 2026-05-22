// JavaScript is prototypal by default
// Objects in JS inherit directly from other objects via the prototype chain
// There is no true classical inheritance in js

// [[prototype]] :
// every object has internaln[[prototype]]
//  which points to another object from which properties and methods are inherited

// __proto__ :
// All objects have this property
// which is an accessor (getter/setter) to their internal [[Prototype]]


let nums = ["one", "two", "three"]

let numbers = {
    one : "1",
    two : "2",
    three: "3",

    printThree: function(){
        console.log(this.three);       
    }
}

// affects all objects
Object.prototype.sayHello = function(){
    console.log("Hello");    
}

// affects instances of Array only
Array.prototype.sayHi = function(){
    console.log("Hi");    
}

// numbers.sayHello()
// nums.sayHello()      
// nums.sayHi()  

//numbers.sayHi()    //error



let anotherUsername = "        SomeName   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mayank".trueLength()
"mountain    ".trueLength()



// Inheritance

const User = {
    name: "mayank",
    email: "mayank@mail.com"
}

const Teacher = {
    makeVideo: true
}

Teacher.__proto__ = User 
Object.setPrototypeOf(Teacher,User)  // modern syntax
// changed [[Prototype]] of Teacher thus it inherits properties of User