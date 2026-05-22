const user = {
    username: 'mayank',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user detaild from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${username}`)
    }

    return this
}

const userOne = new User("mayank", 12, true)
const userTwo = new User("mansi", 13, false)
console.log(userOne)
console.log(userTwo)