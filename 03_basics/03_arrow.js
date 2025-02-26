const user = {
    username : "umarkhan",
    price : 999, 
 
 
      welcomeMessage : function(){
      console.log(`${this.username} , welcome to website`);
      console.log(this);
      }
 
 }
 
//  user.welcomeMessage()
//  user.username = "ibrahim"
//  user.welcomeMessage()
 
// console.log(this);






// function chai(){
//     let username = "umarkhan"
//   console.log(this.username);
// }

// chai()



// const chai = function(){
//   let username = "umarkhan"
//   console.log(this.username);
// }


const chai = () => {
  let username = "umarkhan"
  console.log(this.username);
}

// chai()




// ========= ARRROW FUNCTION ==========


// const addTwo = (num1, num2) => {
// return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2
  
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "umarkhan"})

 console.log(addTwo(9, 4));






 