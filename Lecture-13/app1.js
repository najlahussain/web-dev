const func = ()=> {
    console.log("inside function...")
    setTimeout(()=>{console.log("event10");}, 2000);
    console.log("after set timeout");
}

console.log("event1");
console.log("event2")
setTimeout(()=>{console.log("event3");}, 3000)
setTimeout(()=>{console.log("event4");}, 1000)
console.log("event5");
console.log("event6");
func();
console.log("event7");