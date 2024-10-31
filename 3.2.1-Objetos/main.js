let imageBtn = document.getElementById("image-btn");
console.log(imageBtn);

let containers = document.getElementsByClassName("container");
console.log(containers);

let arrayContainers = Array.from(containers);
console.log(arrayContainers);

let imageBtnQuery = document.querySelector("#image-btn");
console.log(imageBtnQuery);

let containersQuery = document.querySelectorAll(".container");
console.log(containersQuery);

let arrayContainersQuery = [...containersQuery];
console.log(arrayContainersQuery);

let titlesContainers = document.querySelectorAll(".container h1");
console.log(titlesContainers);

//Creación y adición de elementos
let paragraph = document.createElement("p");
console.log(paragraph);

let paragraphText = document.createTextNode("Hola mundo");
console.log(paragraphText);

paragraph.appendChild(paragraphText);

arrayContainersQuery[0].appendChild(paragraph);

//---------------------------------------------------------------

titlesContainers[0].textContent = "Modificando el nodo";
titlesContainers[1].innerHTML ="Modificando el HTML";

//---------------------------------------------------------------
let specialContainer =document.querySelector("#special-container");
specialContainer.innerHTML = `
    <h1>Aquí se inserta HTML</h1>
    <p>innerHTML</p>
`;


function handleClick () {
    console.log("Esta tocandome");   
    let imageConteiner = document.querySelector(".container img");
    console.log(imageConteiner);
    imageConteiner.style.display = none;
    if (imageConteiner.style.display === "block") {
        
    } else {
        
    }
}

imageBtn.addEventListener("click", () => handleClick());