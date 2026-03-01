const balance =  new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // used to print exact values after decimal

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));  // used to print till the given number from the start and also does the round off.


const Hundreds = 1000000;
console.log(Hundreds.toLocaleString('en-US'));          //  Display the commas in the number as per US Standards.
console.log(Hundreds.toLocaleString('en-IN'));  //  Display the commas in the number as per Indian Standards. 


//++++++++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



    let num = -10
    console.log(Math.abs(num));   // Converts the negative values to positive values

    console.log(Math.pow(num,2));  // to use the power

     
    let array = [5,6,3,8,9,1]
    
    console.log(Math.min(5,8,7,6,9,0,3,24))   // in always accepts individial values it does not support direct variable name
    console.log(Math.min(...array));   // while giving whole array always use ... (spread operator)

    console.log(Math.random());         // It is used to give random values between 0 and 1 
    console.log((Math.random()*10) + 1);     //  It is used to give random values but with desired format


    // to get exact random values between two numbers we use MAX & MIN : ----

    const min = 10;
    const max = 20;

    console.log(Math.ransom()*(max-min+1)+min);  // here we use +1 because we want the max value to be included
    console.log(Math.random()*(max-min)+min);    // here the max value will be excluded

    