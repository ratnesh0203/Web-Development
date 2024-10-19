// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)// 200 is used for success message
//         }, 2000);
//     });
// }

// ASYNC-AWAIT



// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("Success");
//         }, 4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

//PROMISE CHAIN

// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {});
// });



// const getPromise = () =>{
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Success");
//         reject("Network ferror");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res)
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 3000);
    });
}

async function getAllData(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);

}



// // PROMISE CHAIN IN CALLBACK HELL
// getData(1)
//  .then((res) => {
//     return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// CALLBACK HELL
// getData(1, () => {
//     console.log("getting data2...");
//     getData(2, () => {
//         console.log("gettting data3...");
//         getData(3, () => {
//             console.log("getting data4");
//             getData(4);
//         });
//     });
// });




