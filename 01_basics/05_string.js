const name= "Swapnil"
const repoCount = 50

/*
console.log(name + repoCount + "Value");

this one is old style not so much readble
instead use : 

console.log(`My name is ${name} and my repo count is ${repoCount}`)

*/

console.log(`My name is ${name} and my repocount is ${repoCount}`);

/*

CHARAT:

to find the character at the specified position

0 1 2 3 4 5 6 
S W A P N I L

*/

console.log(name.charAt(2));

/*

INDEXOF :

to find the position of a given character

0 1 2 3 4 5 6 
S W A P N I L

*/

console.log(name.indexOf('i'));

/*
SUBSTRING:

to extract a part of string i.e , to a specified length 
we use substring function :

name.substring(0,4)

0 1 2 3 4 5 6 
S W A P N I L

for this it will give the output as :
SWAP

means the last value that you gave (4)
it will print till  4-1 = 3 i.e from 0 to 3 index characters
*/

console.log(name.substring(0,4))


/*

TRIM :

this function is used to remove the extra spaces 
from the beginning and the last also

*/

let city = "   Dehradun     "
console.log(city)
console.log(city.trim())

/*

REPLACE :

is used to change part of a string into something else.

*/
let url = "www.swapnil$.com"
console.log(url.replace('$','-'))

/*
SPLIT :

split() is a string method used to divide a string into
an array of substrings based on a specified separator.

It does not modify the original string.
*/

let gameName = "rock-paper-scissor"
console.log(gameName.split('-'))