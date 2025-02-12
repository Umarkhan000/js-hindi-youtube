// object literals

const mySym = Symbol("myKey1")

const myUser = {
    name : "umarkhan",
    "full name" : "Mayana umar khan",
    [mySym] : "myKey1",
    age : 21,
    college : "jain university",
    email : "umar@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(myUser.college);
// console.log(myUser["college"]);
// console.log(myUser["full name"]);
// console.log(myUser[mySym]);

myUser.name = "Ahamedkhan"
// console.log(myUser["name"]);
// Object.freeze(myUser)
myUser.college = "Bits pilani"
// console.log(myUser["college"]);
// console.log(myUser);



myUser.greeting = function(){
    console.log("Hello myUser");
}


myUser.greetingTwo = function(){
    console.log(`Hello myUser ${this.name}`);
}

console.log(myUser.greeting());
console.log(myUser.greetingTwo());









