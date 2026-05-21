/*
A Promise is an object that represents a value that:
-> you don’t have yet
-> but will have in the future
-> or might fail

A Promise can be in exactly one of these states:
-> pending – still working
-> fulfilled – success, value available
-> rejected – failed, error occurred

modern js has native Promise
*/

// fetch('https://api.github.com/users/mayank-bajaj-22').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task like
    // DB calls, cryptography, network call
    setTimeout(function() {
        console.log("Async task is completed");  
        resolve()  
    },1000)
})

// .then() → runs on success
promiseOne.then(function(){    
    console.log("Promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");   
        resolve()
    }, 2000)
}).then(function(){
    console.log("Async task 2 resolved");    
})


// Whatever you pass to resolve() is received by .then()
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: "Mayank", email: "mayank@mail.com"})
    },1000)
}).then((userObj)=>{
    console.log(userObj);    
})


//.catch() → runs on failure
const promiseFour = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username: "Mayank", password: "123456"})
        } else {
            reject("ERROR")
        }
    },3000)
})
.then((userObj)=>{
    console.log(userObj);    
    return userObj.username
}) 
 // whatever is returned by first .then is passed to next .then
.then((username)=>{
    console.log(username);    
})
.catch((errorStr) =>{
    console.log(errorStr);
})
.finally(() => console.log("promiseFour is either resolved or rejected"))


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if (!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject("THERE IS AN ERROR")
        }     
    }, 4000);
})

// Whatever passed to reject() or resolve() works like:
// resolve(value) -> const value = await promise
// reject(error) -> catch(error)
async function consumePromiseFive() { 
    try{
        const response = await promiseFive
        console.log(response);     
    } catch (error){
        console.log(error);       
    }
};

consumePromiseFive()







/*
we can only await promises, so:
await fetch(url);         (promise)
await response.json();    (Function that returns a Promise)
await getUserData();      (Async function)

An async function ALWAYS returns a Promise.
*/



// fetch() starts process of fetching as resourse from network and returns a promise
async function getAllUsers(params) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response);        
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("ERROR IN GETTING USERS");      
    }
} 
// getAllUsers()



fetch('https://api.github.com/users/mansi-okay')
.then((response) => {
    return response.json()
})
.then((jsonResponse) => {
    console.log(jsonResponse)   
})
.catch((error) => {console.log("Error in getting data")})


// fetch() only rejects when request could not be made
//  but if server gives an HTTP error it is counted as a response
//  thus handled by then()