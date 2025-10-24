// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE 
    console.log(`DB Connected`);
})()

// global scope se pollution se bachane ke liye

;( (name) => {
    console.log(`DB Connected Two ${name}`)
} )("hitesh")