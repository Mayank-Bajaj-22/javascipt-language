const user = {
    username: "mayank",
    signedIn: true,           // properties
    getUserDetails: function(){         // method
        console.log(`Details of ${this.username}`); 
        console.log(this);         
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());



// +++++++ Constructor function and new keyword +++++++
// Every time a constructor function is called using the new keyword, it creates a new, unique instance (object)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

User.someMethod = function(){}  // static method thus instances do not have access to it

// Without new → this refers to the global object
// thus User running like a normal function and not an instance of User
const someUser = new User("name", 1, false)
console.log(someUser);   // a global object is stored in someUser because user returns "this"
console.log(someUser.constructor);  //Object


// With new → this refers to the newly created object
const userOne = new User("mansi", 2, true) 
const userTwo = new User("github", 5, false)

console.log(userOne.constructor);  // User
console.log(userTwo instanceof User);

// new internally kya karta hai?
// Steps:
// Ek naya empty object create hota hai {}
// this us object ko point karta hai
// Properties assign hoti hain
// Object return ho jata hai automatically

// Q. instanceof operator kya karta hai?
// Check karta hai object kisi constructor/class ka instance hai ya nahi.

// Constructor function without new behaves like a normal function, and this may point to the global object instead of a new instance.