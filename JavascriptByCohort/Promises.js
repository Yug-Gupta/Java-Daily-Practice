// // Classes - 
// class Rectangle{
//     constructor(length,widht,color){
//         this.widht = widht;
//         this.length = length;
//         this.color = color;
//     }
//     area(){
//         return this.length*this.widht;    
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`);  // This is string concatenation.
//     }
// }

// const reac = new Rectangle(2,3,"red");
// const reac2 = new Rectangle(10,23,"black");
// const area = reac.area();
// const area2 = reac2.area();
// reac.paint();
// console.log(area);
// reac2.paint();
// console.log(area2);


const date = new Date();
console.log(date.getMonth());
console.log(date.getFullYear());



// In JS also have a map class->

const map = new Map();
map.set('name','alice');
map.set('age',28);
map.set(27,'Birth-date');
// console.log(map);
console.log(map.get('name'));
console.log(map.get(27));




