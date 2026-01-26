

const list = document.querySelector("#list");

function addItem(){
    

    const newItem = document.createElement('li');

    newItem.textContent = 'Toyota Rav4';

    list.appendChild(newItem);
}


function removeItem(){

    if(list.lastChild){

        list.removeChild(list.lastChild);
    }else{
        alert("Items Has ended");
    }

    
}