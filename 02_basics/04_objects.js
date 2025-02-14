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




const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign(obj1, obj2)

console.log(obj3);







