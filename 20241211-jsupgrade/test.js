const userInfo = {
    name : 'Lee',
    age : '25',
    job : 'Developer',
    city : 'seoul'
}


const {name, age , ...restInfo} = userInfo;

console.log(name,age,restInfo);

const evenNumbers = [2,4,6];
const oddNumbers = [1,3,5]

const spread = [...evenNumbers , ...oddNumbers];

console.log(spread);
const [first,second , ...remaining] = spread;
console.log(first,second , remaining);




class Shape {
    constructor(width,height){
        this.width =width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height;
    }
}

let rec1 = new Shape(3,4);

class Rectangle extends Shape{
    
    constructor(width,height){
        super(width,height);


    }
    getArea(){
       return Math.sqrt(this.width**2 + this.height**2)
    }
}
let rec2 = new Rectangle(3,4);


class Triangle extends Shape{
       constructor(width,height){
        super(width,height);


    }
    getArea(){
       return (this.width * this.height)/2
    }
}

class Circle extends Shape{
    constructor(width,height,redius){
     super(width,height);
     this.redius = redius;


 }
 getArea(){
    return (Math.floor((this.redius*this.redius) * Math.PI));
 }
}


let rec3 = new Triangle(3,4);
let rec4 = new Circle(3,3,3);


console.log(rec2);
console.log(rec3);
console.log(rec1.getArea());

console.log('대각선 길이는 >>>>',rec2.getArea());

console.log('삼각형 넓이는 >>>>',rec3.getArea());

console.log('원의넓이는 >>>> ',rec4.getArea());
