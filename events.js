const text=document.getElementById("txt");
const button=document.getElementById("btn");


button.addEventListener("click",()=>{
    text.innerHTML="Button Clicked";
})

const num=document.getElementById("num");
const button1=document.getElementById("btn1");
const button2=document.getElementById("btn2");

let count=0;

button1.addEventListener("click",() => {
    count++;
    num.innerHTML=count;
})

button2.addEventListener("click",() => {
   if(count>0) 
    {
        count--;
    num.innerHTML=count;
}})

