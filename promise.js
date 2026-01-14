const promise=new Promise((resolve,reject)=>{
    resolve("Hello from Harvey");
});

promise.then(result => {
    console.log(result);
});