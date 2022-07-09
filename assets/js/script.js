let button = document.getElementById('button');
button.addEventListener('click', () => {
    let valpoPostal = document.getElementById('valpoPostal').value;
    let volcanoPostal = document.getElementById('volcanoPostal').value;
    let desertPostal = document.getElementById('desertPostal').value;
    total = Number(valpoPostal) + Number(volcanoPostal) + Number(desertPostal);
    let limit = document.getElementById('limit')
    if(total <= 10) {
        limit.innerHTML = 'Llevas' + ' ' + total + ' ' + 'postales.'
    }else if(total > 10) {
        limit.innerHTML = '¡¡Excedes el límite!!'
    } else {
        limit.innerHTML = 'Solo puedes ingresar número'
    }
})