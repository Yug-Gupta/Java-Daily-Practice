// // Syntax of JS-
// let firstName = "John";
// const age = 25;
// var isStudent = true;
// console.log(firstName);
// console.log(age);
// console.log(isStudent);


// // Datatypes-
// var isStudent = "Yug";
// var isStudent = 45;
// console.log(isStudent);

// // let firstName = 45;  // It gives the error.
// // console.log(firstName);

// // In curr time do not use the var.

// let arr = [1,2,3,4];  // array
// console.log(arr[0]);

// // Functions-
// function greet(name){
//     return "Hello "+name;
// }
// let ans = greet("Yug");
// let ans1 = greet("Shyam");
// console.log(ans1);
// console.log(ans);

// function sum(a,b){
//     return a+b;
// }
// let x = sum(4,64);
// console.log(x);


// // Assignment 1-
// function sumString(a,b){
//     return a+b;
// }
// let ass12 = sumString(33,43);
// let ass1 = sumString("Java","Dev");
// console.log(ass1);
// console.log(ass12);


// // Assignment 2-
// function canVote(ageVote){
//     return ageVote > 18;
// }
// let ass2 = canVote(14);
// console.log(ass2);

// // Loops-
// for(let i = 0;i<2;i++){
//     console.log("Hello");
// }

// let j = 0;
// while(j<2){
//     console.log("World");
//     j++;
// }

// let users = ["Shri","Ramya","Tulsi","Kavya"];
// for(let i = 0;i<users.length;i++){
//     console.log(users[i]);
// }

// // Objects-

// function greet(users){
//     console.log("Hello " +users.name +" your age is: "+users.age);
    
// }
// let users = {
//     name:"Yug",
//     age:20,
//     location:"Delhi"
// }
// greet(users);
// // console.log(users);

// //Array of object-
// let arr = ["Yug",23,{
//     name:"Yug",
//     gender:"Male"
// }];
// const res1 = arr[2];
// const res2 = {
//     name:"Yug",
//     gender:"Male"
// };
// console.log(res1);
// console.log(res2);


// // Complex nested object-
// let arr1 = ["Gupta",64,{
//     name:"Yug",
//     age:20,
//     cities: ["Delhi","Ghaziabad","Kanpur",{
//         country:"India",
//         city:"Dholakpur"
//     }]
// }];
// console.log(arr1);
// console.log(arr1[2].cities[3].city);



function print(arr2){
    for(let i = 0;i<arr2.length;i++){
        if(arr2[i].age > 18 && arr2[i].gender == "male"){
        console.log(arr2[i]);
    }
    }
}
const users =[{
    name:"Yug",
    age:20,
    gender:"male"
},{
    name:"Shivani",
    age:19,
    gender:"female"
},{
    name:"Rahul",
    age:19,
    gender:"male"
}]

print(users);