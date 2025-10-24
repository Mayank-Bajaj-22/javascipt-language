function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}

// sayMyName()

function addTwonumbers(n1, n2) {
    // let result = n1 + n2;
    // return result;

    return n1 + n2;
}

const result = addTwonumbers(3, 4)
// console.log("Result: ", result)

function loginUserMessage(username) {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Mayank",
    price: 9999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 150
})

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]))