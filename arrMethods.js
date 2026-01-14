const arr = [10,20,3,40,50];

const res = arr.filter(arr => arr%2===0);
console.log("Filter result:",res);

const res1 = arr.map(arr => arr*2)
console.log("Map result :", res1);

const res2 = arr.reduce((acc,curr) => acc+curr , 0);
console.log("Reduce result :",res2);