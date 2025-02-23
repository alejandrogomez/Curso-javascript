let audio=document.getElementById('audio');
let listacanciones=document.getElementById('listacanciones');

listacanciones.addEventListener('change',cambiarcancion);


function cambiarcancion(){
    let cancionelegida=listacanciones.value;
    audio.src=cancionelegida;
    audio.play();
    let evento = new CustomEvent('cambiodecancion');
    audio.dispatchEvent(evento);

}


audio.addEventListener('cambiodecancion', mostrarcancion);

function mostrarcancion(){
    console.log("la cancion actual es:" +  listacanciones.value);
}




