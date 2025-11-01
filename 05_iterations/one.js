// for loop 

// let arr = {1, 22, 45, 26, 2};

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number")
    }
    // console.log(element)
}

// console.log(element)

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
    }
}

let array = ["flash", "batman", "superman"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element)
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`5 Detected`)
//         break
//     }
//     console.log(`Value of i is ${index}`)
// }

// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 Detected`)
        continue
    }
    console.log(`Value of i is ${index}`)
}