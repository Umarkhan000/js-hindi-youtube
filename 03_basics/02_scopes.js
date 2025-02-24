
//var c = 30
let a = 300

if (true){
     let a = 10
     const b = 20
     var c = 30
     //  console.log("IINER : ", a);
     
}



// console.log(a);
// console.log(b);
// console.log(c);



// NESTED SCOPE

function one(){
     const username = "umarkhan"

function two(){
     const website = "youtube"
     // console.log(username);
     }
    // console.log(website);   // this is error cannot be printed
     

     two()
}

// one()



if(true) {
      const username = "umarkhan"
      if (username === "umarkhan"){
          const website = " youtube"
          // console.log(username + website);
          
      }
     // console.log(website);  // this is error cannot be printed
     
     
}
     // console.log(username);   // this is error cannot be printed
     





// +++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++



console.log(addone(5));

function addone(num){
     return num + 1
}
 


console.log(addtwo(5));
const addtwo = function(num){
     return num + 2              // this can't be run coz we defined the it by const so it can't. Up one it called it directly through function so it can be run
}















