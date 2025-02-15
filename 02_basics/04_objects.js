//const instagramUser = new Object()  // This is an singleton object
//console.log(instagramUser);


const instagramUser = {}   // This is not an singleton object

instagramUser.id = "123abc"
instagramUser.name = "Umar"
instagramUser.IsLoggedIn = true

//console.log(instagramUser);



const regularUser = {
    email: "umar@gmail.com",
    fullname: {
        userfullname: {
            firstname: "umar",
            lastname: "khan"
        }
    }
}

//console.log(regularUser.fullname.userfullname);




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "umar@gmail.com"
    },
    {
        id: 2,
        email: "khan@gmail.com"
    },
]


// console.log(Object.keys(instagramUser));
// console.log(Object.values(instagramUser));
// console.log(Object.entries(instagramUser));


const course = {
    coursename: "js in hindi",
    price: "999",
courseTeacher: "umarkhan"
}

const {courseTeacher: teacher} = course  // this is called DESTRUCTURE, if the name is big you can give small name within it.
console.log(teacher);





// JSON is written in curly braces{} and both key and values are both should be written in strings " " 
// {
//     "name": "umar",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
   {},
   {},
   {},
]





























