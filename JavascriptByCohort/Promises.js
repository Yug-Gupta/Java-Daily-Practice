// Classes - 
class Rectangle{
    constructor(length,widht,color){
        this.widht = widht;
        this.length = length;
        this.color = color;
    }
    area(){
        return this.length*this.widht;    
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const reac = new Rectangle(2,3,"red");
const area = reac.area();
console.log(area);

