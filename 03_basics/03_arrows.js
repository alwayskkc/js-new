const user = {
    username: "kesava",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website!!!`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "kesava"
    console.log(this);
    
}
// chai()

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(3,4));