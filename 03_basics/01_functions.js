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
 
    console.log(a+b)
 }
 
 addTwoNum(3,4)              // here 3 and 4 are  arguments

 const  result = addTwoNum(3,4)      // here also 3 and 4 are arguments

  //+++++++++++++++++++++++++++++++++++++++++++++++++ Retun  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  function add(c,d)
  {
    let result = c+d
    return result
    console.log("Swapnil")                                  //anything written after return statement will not get executed
                                                           
  } 

//   console.log(add(10,30))


  //+++++++++++++++++++++++++++++++++++++++++++++++++ Username  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  function loggedInfo(username)
  {
    return `${username} just  logged in `
  }

  console.log(loggedInfo("Swapnil"))
  console.log(loggedInfo("Swapnil joshi"))        // i can give multiple arguments  to one parameter function