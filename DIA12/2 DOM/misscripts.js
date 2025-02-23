let boton = document.getElementById('miboton');
let div = document.getElementById('midiv');
let enlace = document.getElementById('mienlace');

function evitarenlace(event){
    event.preventDefault();
    alert('enlace no habilitado');
}

function mostrarmensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}

div.addEventListener('click',mostrarmensaje);
enlace.addEventListener('click',evitarenlace);

