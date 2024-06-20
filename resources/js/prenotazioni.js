import {loggedUserId, readToken} from './tokenManager.js';

const user_id = loggedUserId();
const jwt = readToken();

fetch(`http://127.0.0.1:5000/api/users/${user_id}/reservations/`,{
    method:'GET',
    mode:'cors',
    cache:"no-cache",
    headers:{
        'Authorization':`Bearer ${jwt}`
    }
}).then(response => {
    console.log(response);
    if(response.status !== 200){
        alert('errore nel recupero delle prenotazioni. riprova!!');
        return
    }
    return response.json();
}).then(data => {
    const prenotazioni = document.querySelector('#prenotazioni')
    prenotazioni.innerHTML = data.map(v => dataToList(v)).join();
}).catch(e => {
    alert("problemi con il server. contatta l'assistenza!!!");
})

function dataToList({data,costo,pagato,tipo}){
    return `
        <li>
            <h6>${tipo}</h6>
            <p>${data}</p>
            <p>${pagato}</p>
        </li>
        <hr/>
    `
}