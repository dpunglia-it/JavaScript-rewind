async function fetchUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await response.json();
    const list =document.getElementById("userslist");
    
    users.forEach(user => {
        const li=document.createElement("li");
        li.innerHTML=user.name;
        list.appendChild(li);
    });
}

fetchUsers();