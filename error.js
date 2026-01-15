try{
    let result=10/x;
    console.log(result);
}catch(err){
    console.log("Error is: ",err.message);
}
finally{
    console.log("I will run always");
}

async function  fetchUsers(){
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
           throw new Error("Users couldnt be fetched");
        }
        const users=await response.json();
        users.forEach(user => {
            console.log(`Users:${user.name}`);
        })
    } catch(error){
        console.log("Error: ",error.message);
    }
    finally{
        console.log("Fetch Operation Done");
    }  
}

fetchUsers()
