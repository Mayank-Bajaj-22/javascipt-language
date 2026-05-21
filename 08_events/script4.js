// method 1
// const body = document.querySelector('body')

// function changeBg() {
//     const code = Math.round(Math.random() * 1000000)
//     body.style.backgroundColor = `#${code}`
// }

// let intervalId; 

// document.querySelector('#start').addEventListener('click', function(e) {
//     intervalId = setInterval(changeBg, 1000)
// })

// document.querySelector('#stop').addEventListener('click', function(e) {
//     clearInterval(intervalId)
// })


// method 2
// generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId

function startChangingColor() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}
function stopChangingColor() {
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);