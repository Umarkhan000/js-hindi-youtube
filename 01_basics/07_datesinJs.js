// Dates

const myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let  myCreatedDate = new Date(2025, 1, 8)
let  myCreatedDate = new Date("02-08-2025")  // month-date-year
 console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

// `${newDate.getDay()} and the time ` // sting interpolation

newDate.toLocaleString('default',{    //internationalization
    weekday: "long"

})





