function sayMyName(){
console.log("S")
console.log("W")
console.log("A")
console.log("P")
console.log("N")
console.log("I")
console.log("L")
}

//  sayMyName()    // to call the function 


 //+++++++++++++++++++++++++++++++++++++++++++++++++ Passing parameters to the function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 function addTwoNum(a,b)     // here a and b are parameters
 {
 
    // console.log(a+b)
 }
 
 addTwoNum(3,4)              // here 3 and 4 are  arguments

//  const  result = addTwoNum(3,4)      // here also 3 and 4 are arguments

  //+++++++++++++++++++++++++++++++++++++++++++++++++ Retun  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  function add(c,d)
  {
    let result = c+d
    return result
    // console.log("Swapnil")                                  //anything written after return statement will not get executed
                                                           
  } 

//   console.log(add(10,30))


  //+++++++++++++++++++++++++++++++++++++++++++++++++ If Username  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  function loggedInfo(username)
  {
if(username === undefined)
{
    console.log("Please enter username")
    return
}

    return `${username} just  logged in `
  }

  // console.log(loggedInfo())
//   console.log(loggedInfo("Swapnil joshi"))        // you can give multiple arguments  to one parameter function


  //+++++++++++++++++++++++++++++++++++++++++++++++++ !Username  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  function exclaim(username)
  {
if(!username)
{
    console.log("Please enter username")               // ! It checks whether the value is falsy. In JavaScript, 
                                                       //  falsy values include false, 0, "", null, undefined, and NaN.
    return
}

    return `${username} just  logged in `
  }

//    console.log(exclaim())

     //+++++++++++++++++++++++++++++++++++++++++++++++++ Overriding values  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


     function  override(username = "Shanu")
     {  if(!username)
     {
        console.log(username)
     }
     return `${username} just logged in `
    }

    //  console.log(override("Swapnil"));                     // here if i will not pass any value then by default shanu will be printed
                                                           //  but here i have written "Swapnil" this overrides the above paramenter



 //+++++++++++++++++++++++++++++++++++++++++++++++++ accessing objects through functions   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const item =  {                 // creating object named item

name:"notebook",
price:600
}

function print(anyobject)           // anyobject is a parameter that will receive an object when the function is called.
{   
//console.log(`The ${anyobject.name} costs ${anyobject.price}`);
}

print(item)        // Here you pass the object item as an argument to the function


 //+++++++++++++++++++++++++++++++++++++++++++++++++ returning values of array   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNewArray = [100,300,400,500]

function returnSecondValue(getArray)    // Takes paramter as getArray
{
return getArray[1]
}

console.log(returnSecondValue(myNewArray))

 //+++++++++++++++++++++++++++++++++++++++++++++++++ returning values of array   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 const newArray = [500,600,700,800,900]

 function returnLastValue(getValue)
 {
    return getValue[4]
 }

 console.log(returnLastValue(newArray))
