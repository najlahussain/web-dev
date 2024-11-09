var y;
let num1 = 11;

{
    let num2 = 12;
    var x=90;
    console.log(num2);
    const num4 = 44;
}
console.log(x);
var x = 12;
console.log(num1);

const num3 = 23;
console.log(num3);

// console.log(num4);
// num3 = 43;

let n = "ali";

console.log(n);
console.log(typeof n);
console.log(typeof num1);

n = 123;
console.log(typeof n);
console.log("value of n is: ",n);
console.log('value of n is: ${n}');
console.log(`value of n is: ${n}`);

let months = ["jan", "feb"];
console.log(months);
console.log(months[0]);

months.push("aaa");
console.log(months);

let item = months.pop();
console.log(item);

months.unshift("aaa");
console.log(months);

function display (month){
    console.log("hello", month);
}

display(months[0]);

// let costs1 = costs.reduce(
//     function (total, cost){return total + (cost*2);}
// );

// console.log(costs1);

const costs = [15,2,3];
//iterates over all elements
costs.forEach(function (cost){
    console.log(cost);
});

//iterates over elements and returns a resultant collection
let a = costs.map((cost)=>{
    return cost *2;
});
console.log(a);

let b = costs.filter(function (cost){
    return cost < 10;
});
console.log(b);

let displayHello = ()=> console.log("hello");
