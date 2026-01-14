const arr = [1,2,3,4];
arr.push(4);
arr.pop(2);
console.log("ele at 1",arr[1]);

arr.unshift(0);
for(let i=0;i<5;i++)
{
    console.log("Elements :", arr[i]);
}