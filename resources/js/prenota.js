import {loggedUserId, readToken} from './tokenManager.js';

document.querySelector('#cmdPrenota')
    .addEventListener('click', onPrenota);
const user_id = loggedUserId();
const jwt = readToken();

function onPrenota(e){
    e.preventDefault();
    const visita_id = document.querySelector('#visite').value;
    const data = document.querySelector('#data').value;
    const pagato = document.querySelector('#pagato').value;
    
    const prenotazione = {visita_id,data,pagato};

    fetch(`http://127.0.0.1:5000/api/users/${user_id}/reservations/`,{
        method:'POST',
        mode:'cors',
        cache:"no-cache",
        headers:{
            'Authorization':`Bearer ${jwt}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify(prenotazione)
    }).then(response => {
        console.log(response);
        if(response.status !== 201){
            alert('registrazione fallita. riprova!!');
            return
        }
        return response.json();
    }).then(data => {
        console.log(data);
        alert('Grazie per aver prenotato');
        window.location='./prenotazioni.html'
    }).catch(e => {
        alert("problemi con il server. contatta l'assistenza!!!");
    })
}