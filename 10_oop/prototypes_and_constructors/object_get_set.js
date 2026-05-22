const User = {
    _email: "mayank@mail.com",
    _password: undefined,

    get email() {
        return this._email.toLowerCase()
    },

    set email(value) {
        this._email = value
    },

    get password(){
        return "*******"
    },

    set password(value) {
        if (value.length > 6) {
            this._password = value
        } else {
            throw new Error("Password too short");
        }
    }
}


// console.log(User);
// User.password = "1234567"        // setter runs
// console.log(User.password);       // getter runs


const u1 = Object.create(User)       // u1 empty
console.log(u1.password);             // getter called
u1.password = "!33safdbghbags"           // setter called
console.log(u1.email);     
u1.email = "mansi@mail.com"           // setter called     
console.log(u1);    