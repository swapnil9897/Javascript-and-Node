const marvel = ["thor" , "IronMan" , "SpiderMan"]
const dc = ["superman" , "flash" , "batman"]

//marvel.push(dc)
 //console.log(marvel)

/* from above operation we can see that the output is coming like an array inside another array 
 so in order to solve this we use concat to use it we need to store it in a new variable it
 will then work properly */

//  const allHeros = marvel.concat(dc)
//  console.log(allHeros)

 // An alternate option for this concat function is spread operator

// const allHeros =  [...marvel, ...dc]
//   console.log(allHeros)

  /*
suppose we are in a situation in which there are araays inside arrays and another sub array 
so there we use flat function and inside flat(here we declare the depth of array)
but we have a hack that isdtead counting for the depth use : - flat(infinity) it will automatically count and give the desired result
  */

// const newArr = [1,2,3,[5,6,7 ,  [8,9,2,3,4,[5,6,7,89]]]]
// const realArr = newArr.flat(Infinity)
// console.log(realArr)

// console.log(Array.isArray("Swapnil"))

// let newName = "Swapnil"
// console.log(Array.isArray(newName))

// let name = "hitesh"
// console.log(Array.from(name))

/*
In case you are having a set of variables and you want them to convert into array together then use .of
*/

// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = 400

// console.log(Array.of(score1,score2,score3,score4))

