console.log("Hello World!")
{
    x = 33;
    var x;
    let y = 20;
    console.log(`value of y: ${y}`);
    const z = 30;
    y = 40;
    console.log(y);
    console.log(z);
    console.log(typeof(z));
   // z = 90;
}

console.log("x is: ",x);

// console.log(y);

let num = "1";
let num2 = 1;
console.log(typeof(num));
console.log(typeof(num2));

if(num == num2)
    console.log("both numbers are equal");
else
    console.log("both variables are not equal");

    num2 = "a string now";//indentation does not make a part of else
console.log(typeof(num2));


let test = (x1) =>{
    console.log(x1);
}


test(num);
test(num2);

const Person = {
    name : "abc",
    age : "12"
}

const cars = ["Honda", "Toyota", "BMW"];
// for(let i = 0; i<cars.length; i++) {
//     console.log(cars[i]);
// }
// cars.forEach(display);
// function display(value, index){
//     console.log(value, index);
// }
cars.forEach((value,index)=>{console.log(value,index);})
cars.map((car)=>{console.log(car);});
console.log(cars.length);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
const year1 = [q1, q2, q3, q4];
console.log(year);
console.log(year1);

let [month1, month2] = year;
console.log(month1);

year.push(1981);
console.log(year);

let n = year.pop();
console.log(n);

let cost = [100,400,300,700];
// let newCost = cost.map(function(costItem){ return costItem / 10;
// });
let newCost = cost.map((costItem)=>{return costItem/10});
console.log(newCost);

let cost1 = [100,400,50,40,700];
let smallCost = cost1.filter(function(costItem){ return costItem < 200
});
console.log(smallCost);