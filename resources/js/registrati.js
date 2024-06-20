document.querySelector('#btnRegistrati')
    .addEventListener('click', onRegistrati);

function onRegistrati(e) {
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const cognome = document.querySelector('#cognome').value;
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;

    const user = { nome, cognome, email, pwd }

    fetch('http://127.0.0.1:5000/api/users/',{
        method:'POST',
        mode:'cors',
        cache:"no-cache",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user)
    }).then(response => {
        console.log(response);
        if(response.status !== 201){
            alert('registrazione fallita. riprova!!');
            return
        }
        return response.json();
    }).then(data => {
        console.log(data);
        alert('Grazie per esserti registrato');
        window.location='./login.html'
    }).catch(e => {
        alert("problemi con il server. contatta l'assistenza!!!");
    })
}