
// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     //if promise is fulfilled
//     // resolve("success");
//     //if promise is unfulfilled
//     reject("unsuccesful!!!");
// });
// console.log(promise);

// function getData(id, dataCallback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data: ", id);
//             resolve("success");
//             if(dataCallback)
//                 dataCallback();
//         }, 6000)
//     });
// }

// let result = getData(1); 
// console.log(result);
// console.log(promise)

function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data: ", id);
            if(id>0)
                resolve("success");
            else
                reject("unsuccessfull!!!");
            }, 3000)
    });
}
// getData(1).then(()=>{
//     getData(2)
// })
getData(1)
    .then((res)=>{
        return getData(2).then(()=>{
            getData(3)
        })
    })
.catch((error)=>{
    console.log(error)
})
.finally(()=>{console.log("finally")})

// getData(1).then((res)=>{
//     return getData(2);
// }).then(()=>{
//     return getData(3);
// }).then(()=>{
//     return getData(4);
// })
// .catch((error)=>{console.log(error)})
// .finally(()=>{console.log("finally")})
