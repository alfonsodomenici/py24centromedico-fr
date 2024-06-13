console.log("javascript is running in external file...");

//creo un nuovo elemento html '<p>nuovo testo nel footer</p>'
let elP = document.createElement('p');
elP.innerHTML = "nuovo testo nel footer";

//prendo l'elemento footer della pagina
let footerElement = document.querySelector('footer');

//aggiungo l'elemento p all'elemnto footer 
footerElement.appendChild(elP)

//prendo l'elemento accedi
let elAccedi = document.querySelector("#mnuAccedi");
elAccedi.addEventListener('click', onAccedi)

function onAccedi(e) {
    e.preventDefault();
    const response = confirm("Sei sicuro di voler accedere?");
    if (response) {
        window.location = "/login.html"
    }
}