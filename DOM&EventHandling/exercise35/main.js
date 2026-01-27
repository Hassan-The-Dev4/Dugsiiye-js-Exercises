


function changeImage(){


    const img = document.querySelector('#image')

    const url = prompt('Enter your image');
    const borderColor = prompt("Enter border color");
    const width = prompt("Enter width")
    const heigth = prompt("Enter height")
    const borderRadius = prompt("Enter border radius");

    img.setAttribute('src', url);
    img.style.border = `4px solid ${borderColor}`;
    img.style.width = `${width}px`;
    img.style.heigth = `${heigth}px`;
    img.style.borderRadius = `${borderRadius}px`;
}