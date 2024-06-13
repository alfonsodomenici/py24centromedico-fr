document.querySelector('#btnAccedi')
    .addEventListener('click', onLogin);

function onLogin(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#pwd').value;
    console.log(email,pwd);
}