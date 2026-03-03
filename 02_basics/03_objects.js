/* There are two ways to define objects in JavaScript:
1) Using Object literal
2) Using a constructor
*/

const mySym = Symbol("Key1")

const JsUser = 
{
name:"Swapnil", 
[mySym] : "mykey1",
age : 23 ,
email : "swapnil@google.com", 
location : "Dehradun",
isLoggedIn : true,
}

// console.log(JsUser["name"])
// console.log( JsUser[mySym])

JsUser.email = "swapnil@amazon.com"
// console.log(JsUser["email"])

// console.log(JsUser)

//+++++++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


JsUser.greeting = function()
{

    console.log("Hello JS User:")
}

console.log(JsUser.greeting());

JsUser.greetingtwo = function()
{
    console.log(`Hello ${this.name} Good afternoon`)
}

console.log(JsUser.greetingtwo());