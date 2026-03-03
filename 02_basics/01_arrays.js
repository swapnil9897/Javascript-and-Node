// JavaScript arrays are resizable and can contain a mix of different data types.
// 2 ways to declave arrays in js


const myArr = [1,2,3,4,5]
const myHeros = ["Shaktimaan","Power Rangers","Naagraj"]
const myArr2 = new Array(4,5,6,8,2,4,3)

// console.log(myArr)
// console.log(myHeros)
// console.log(myArr2)


// +++++++++++++++++++++++++++++++++++++++++++++++++++ ARRAY METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myArr.push(6)
// myArr.pop()
// myArr.push(9)
// console.log(myArr)

// const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr)

console.log("A" , myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr)                               /*
                                                        slice() and splice() are both array methods in JavaScript, 
                                                        but they work differently. The slice(start, end) method is 
                                                        used to extract a portion of an array and returns a new array 
                                                        without modifying the original array. The starting index is included, 
                                                        while the ending index is not included. On the other hand, splice(start, deleteCount) 
                                                        is used to add or remove elements from an array and it modifies the original array. 
                                                        It returns the removed elements as a new array. In short, slice() does not 
                                                        change the original array, whereas splice() changes the original array.
                                                    */

const myn2 = myArr.splice(1,3)
console.log("C" , myArr)
console.log(myn2)

