// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Mayank"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mayank",
            lastname: "bajaj"
        }
    }
}

// console.log(regularuser.fullname.userfullname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" } 

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
];

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "mayank"
}

// course.courseInstructor

const { courseInstructor: instructor, price } = course; // destructuring
console.log(instructor)
console.log(price)

// {
//     "name": "mayank",
//     "coursename": "js in hindi",
//     "price": "free"
// }