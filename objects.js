const intern = {name:"Darshit",age:"21",role:"Developer", skills:["js","react"]};

console.log("Name :",intern.name);
console.log("Role:",intern.role);

intern.city="Ratlam";

intern.age="22";
intern.skills.push("Node.js");

for(let i in intern)
{
    console.log(i, ":" , intern[i]);
}