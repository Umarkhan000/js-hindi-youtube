function sayMyName(){
   console.log("u");
   console.log("m");
   console.log("a");
   console.log("r");
}

// sayMyName()


// function addTwonumbers(number1, number2){
//   console.log(number1 + number2);
// }

addTwonumbers(5,9)


function addTwonumbers(number1, number2){
 
        // let result = number1 + number2
        // return result
        return number1 + number2
 }
        
const result = addTwonumbers(46, 85)
//console.log("Result: ", result);



function loginUserMessage(username){
        return `${username} just logged in`
}

// console.log(loginUserMessage("umarahamedkhan"));



// using IF statement
function loginUserMessage(username){
        if(username === undefined){
                console.log("please enter a username");
                return
        }
        return `${username} just logged in`
}
console.log(loginUserMessage());












