// Convert this array - [1,2,3,4,5]
// into a new array - [2,4,6,8,10]

let arr = [1,2,3,4,5];
let newArray = []

for(let i =0 ;i<arr.length;i++){
    newArray.push(arr[i]*2);
}
console.log(newArray);
