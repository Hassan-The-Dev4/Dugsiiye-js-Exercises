//promise

function fetchUserInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const success = true;

            if(success){
                resolve({name: "Abdi", age:25});
            }else{
                reject("failed to fetch thi data any more");
            }
        },3000);

    })
}

fetchUserInfo()
         .then((data) => console.log("User data:", data))
         .catch((error) => console.log("Error:", error));