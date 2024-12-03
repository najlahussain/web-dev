// callback
// function first(secondCallback){
//     console.log("Hello ");
//     secondCallback();
// }

// function second(){
//     console.log("World!!");
// }

// first(second);
// first(()=>{console.log("World!!");});

function getData(id, dataCallback){
    setTimeout(()=>{
        console.log("data: ", id);
        if(dataCallback)
            dataCallback();
    }, 3000)
}
getData(1 , ()=>{
    console.log("display data 2.....")
    getData(2, ()=>{
        console.log("display data 3.....")
        getData(3, ()=>{
            console.log("display data 4.....")
            getData(4)
        })
    })});
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4)
//         })
//     })
// });

