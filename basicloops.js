for(let i=0;i<5;i++)  //for loop
{
     console.log("For loop:",i);
}

let j=0;
while (j<5)  //while loop
{
    console.log("while loop:",j);
    j++;
}

const arr = [1,2,3];    //for of loop
for(const nums of arr)
{
    console.log("For of loop:",nums);
}

arr.forEach((nums,index) => {                       //foreach loop
    console.log(`foreach index at ${index}: ${nums}`)
})