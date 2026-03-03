/*

in this we will learn how to make objects by Singleton (You create it once, and the same object is used everywhere.)
 and also by using constructor (Instead of manually writing many similar objects, we use a constructor to generate them.)


+++++++++++++++++++++++++++++++++++++++++++   exmaple  without constructor : +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user1 = {
  name: "Swapnil",
  age: 22
};

const user2 = {
  name: "Rahul",
  age: 23
};                               In this example what if we are having 100 users we will need to create  100 separate objects. 
                                That’s why here we will use a constructor function (or class) to create multiple objects using
                                 a single blueprint, making the code cleaner, scalable, and easier to manage.


  +++++++++++++++++++++++++++++++++++++++++++   exmaple use of constructor : +++++++++++++++++++++++++++++++++++++++++++++++++++++++++    
  
  
  class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Swapnil", 22);
const user2 = new User("Rahul", 23);

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

const tinderUser={}

tinderUser.id = "123abc"                                     
tinderUser.name = "John"                                   /* this whole value passing outside object bracket 
                                                            is called Property Assignment using Dot Notation*/
tinderUser.isLoggedIn = false

// console.log(tinderUser);
                                                             

                                                         /* if you passed the values inside the object brackets like 
                                                              
                                                              const tinderUser {
                                                              name:"Swapnil",
                                                              age :23,
                                                              city:"Dehradun"
                                                              }
                                                             
                                                               this method is called object Literal 
                                                              
                                                            */


//++++++++++++++++++++++++++++++++++++++++++++++++++ Now we will see to declare object inside object   ++++++++++++++++++++++++++++++++++++++++

const regularUser = { 
email : "user@gmail.com",
fullname : {
    userfullname : {
        firstname : "Swapnil",
        lastname :  "joshi"
    }
}

}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  merging two objects  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const one = {a:1 , b:2}
const two = {c:3 , d:4}
const five ={e:5,f:7}

const three = Object.assign({},one,two)     // using {} while merging is a good practice as it is not mandatory and it makes no difference
// console.log(three)


const four = {...one,...two,...five}                 // best way is to use this spread operator
// console.log(four);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to access the keys of object   +++++++++++++++++++++++++++++++++++++++++++++


// console.log(Object.keys(tinderUser))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to access the values of object   +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Object.values(tinderUser));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to access the entries of object   +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Object.entries(tinderUser));   // the entries will be shown in the form of array

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to know if the property is available or not   +++++++++++++++++++++++++++++++++++++++++++++


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to access object from new method  +++++++++++++++++++++++++++++++++++++++++++++


    const course = {
        courseName :    "javascript",
        price : 1000,
        courseInstructor : "Swapnil"
    }

    const {courseInstructor} = course
    console.log(courseInstructor)


 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to modify the name of object +++++++++++++++++++++++++++++++++++++++++++++

    const {courseInstructor : head} = course
    console.log(head)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  to modify the name of object +++++++++++++++++++++++++++++++++++++++++++++



