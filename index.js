const input = document.querySelector("input");
const button = document.getElementById("btn");
const display = document.querySelector("#content");

button.addEventListener("click", searchFunction);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchFunction();
    }
});

function searchFunction() {
    const inputValue = input.value;

    if (inputValue) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${inputValue}/`)
        xhr.onload = () => {
            const response = JSON.parse(xhr.response);
            displayPockemon(response);
        };
        xhr.send();
    }
}

function displayPockemon(el) {
    display.innerHTML = `
           <img  class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png" alt="${el.name}">
        <p class="p">Name :</hp>
        <h2>${el.name}</h2>
        <p  class="p">Type :</p>
        <p>${el.types[0].type.name}</p>
    `
}
