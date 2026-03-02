let myDate = new Date()

// console.log(myDate.toDateString())        //  Sun Mar 01 2026
// console.log(myDate.toISOString())        //   2026-03-01T09:26:17.919Z
// console.log(myDate.toLocaleString())    //    1/3/2026, 2:56:17 pm
// console.log(myDate.toTimeString())     //     14:56:17 GMT+0530 (India Standard Time)
// console.log(myDate.toString())        //      Sun Mar 01 2026 14:59:37 GMT+0530 (India Standard Time)

// Months are stared from 0 as January

//+++++++++++++++++++++++++++++++  TO DECLARE YOUR OWN DATE :----------------------------------------------------


let ownDate = new Date(2023,0,25)
console.log(ownDate.toDateString())


//+++++++++++++++++++++++++++++++  TO DECLARE YOUR OWN DATE with time  :----------------------------------------------------

let nowDate = new Date(20223,3,25,4,25)
console.log(nowDate.toLocaleString())