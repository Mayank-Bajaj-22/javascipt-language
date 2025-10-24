const user = {
    username: "mayank",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this)

    // function chai() {
    //     let username = "mayank"
    //     console.log(this.username) // undefined
    // }

// chai()

// const chai = function chai() {
//     let username = "mayank"
//     console.log(this.username) // undefined
// }

// chai()

const chai =  () => {
    let username = "mayank"
    console.log(this.username) // undefined
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "mayank"})

console.log(addTwo(3, 5))

// const myArray = [2, 3, 4, 5]

// myArray.forEach()