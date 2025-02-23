let boton = document.getElementById('miboton');

function mostrarmensaje(){
    alert('el boton ha sido presionado')
};

boton.addEventListener('click',mostrarmensaje);

function otromensaje(){
    alert('flotar');
}

boton.addEventListener('mouseover',otromensaje);