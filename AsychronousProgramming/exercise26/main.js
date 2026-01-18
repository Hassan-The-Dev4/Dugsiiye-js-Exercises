//synchronous

// function getUserData(){

//     alert("the user's data will fetch after now");
//     const user1 = {name: "Jama", age: 24, countery: "Somalia"}
//     return(user1);
// }

// console.log("please wait while we are fetching the data");
// console.log(getUserData());
// console.log("the waiting of data has taken some time");




//Asynchronous


function fetchUserData(callBack){
    setTimeout(() => {
        const user ={name: "Hassan", age: 23, countery: "Somalia"}
        callBack(user);
    }, 3000);
}

fetchUserData( function(user){
    console.log(user);
})

console.log("this is imideitly showing message");
