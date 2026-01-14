function greet(name,callback){
    callback(name);
}
greet("Virat",function (name){
    console.log("Hello "+name);
})