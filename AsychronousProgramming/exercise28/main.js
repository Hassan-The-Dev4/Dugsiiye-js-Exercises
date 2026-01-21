//promise

function fetchUserInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const success = true;

            if(success){
                resolve({name: "Abdi", age:25});
            }else{
                reject("failed to fetch this data any more");
            }
        },3000);

    })
}

// fetchUserInfo()
//          .then((data) => console.log("User data:", data))
//          .catch((error) => console.log("Error:", error));


async function displayData(){
    try {
        const user = await fetchUserInfo();
        console.log("User Data: ", user);
    } catch(err){
        console.log(err);
    }
}


displayData();