document.querySelector('#cmdPrenota')
    .addEventListener('click', onPrenota);

function onPrenota(e){
    e.preventDefault();
    const visita_id = document.querySelector('#visite').value;
    const data = document.querySelector('#data').value;
    const pagato = document.querySelector('#pagato').value;
    console.log(visita_id,data,pagato);
}