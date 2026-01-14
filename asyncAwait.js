async function greet(){
    return "Hello from Asynchronous";
}

async function show(){
    const msg = await greet();
    console.log(msg);
}

show();