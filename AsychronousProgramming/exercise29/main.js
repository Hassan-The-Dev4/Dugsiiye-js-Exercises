

async function fetchData(){

    console.log("Starting fetching data");

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    console.log("Data fetched: ", data);
}


fetchData();