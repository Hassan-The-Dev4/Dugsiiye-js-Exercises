

async function fetchUsers(){

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw Error(`There is an error accoured! status:  ${response.status}`);
        }


        const users = await response.json();
        console.log("this is users data: ", users);

    }catch(error){

        console.log("error accoured:", error);
    }
}

fetchUsers();