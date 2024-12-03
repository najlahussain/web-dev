//this is our api that returns a promise
function getData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data: ", id);
            if(id>0)
                resolve("success");
            else
                reject("unsuccessfull");
            }, 2000)
    });
}
async function databaseCall(){
    await getData(1);
    await getData(2);
}
databaseCall()
// async function databaseCall(){
//     try{
//     await getData(1);
//     await getData(2);
//     await getData(-1);
//     }catch(err){
//         console.log("error", err);
//     }
// }
// databaseCall();
// (async () => {
//     await getData(1);
//     await getData(2);
// })()