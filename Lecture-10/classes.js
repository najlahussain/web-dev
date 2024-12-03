
class Student{
    // Data (Properties)
    Name
    Age
    Standard
    
    // constructor(){
    //     this.Name = "";
    //     this.Age = 0;
    //     this.Standard = 0;
    // }
    //one constructor allowed in Javascript
    constructor(Name, Age, Standard){
        this.Name = Name;
        this.Age = Age;
        this.Standard = Standard;
    }

    // getters and setters
    setName(name){
        this.Name = name;
    }

    getName(){
        return this.Name;
    }
    // Methods (Action)
    study(){
        console.log("Studying!!!");
    }
    Play(){
        console.log("Playing!!!");
    }
    doHomeWork(){
        console.log("Doing Homework!!!");
    }
   }

let s1 = new Student();
s1.setName("Haider Ali");
// s1.Age(12);
// s1.Standard = 7;
// console.log(s1.Name, s1.Age, s1.Standard);
// s1.Play();

class MSStudent extends Student{
    thesis
    constructor(Name, Age, Standard, thesis){
        super(Name, Age, Standard);
        this.thesis = thesis;
    }
}

let s2 = new MSStudent("Sayem", 23, 17, "Video editing");
console.log(s2.Name, s2.Age, s2.Standard, s2.thesis);
s2.Play();

class Car {
    static model
    engine
    static drive(){
        console.log("Driving!!");
    }
}

Car.model = "honda"
console.log(Car.model);

let car1 = new Car();
car1.engine = 1600;
Car.drive();
// you cannot call a static method on an object
car1.drive();