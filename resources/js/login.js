import { storeToken } from './tokenManager.js'

document.querySelector('#btnAccedi')
    .addEventListener('click', onLogin);

function onLogin(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    const credential = { email, pwd }
    fetch('http://127.0.0.1:5000/api/auths/', {
        method: 'POST',
        mode: 'cors',
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credential)
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log(data);
        storeToken(data.token);
        window.location='./auth/prenotazioni.html'
    })
}