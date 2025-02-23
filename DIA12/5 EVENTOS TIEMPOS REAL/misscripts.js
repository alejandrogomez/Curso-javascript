let socket =new WebSocket('ws:localhost:8080');

let mensajeingresado=document.getElementById('mensajeingresado');
let botonenviar=document.getElementById('botonenviar');

function mostrarmensajes(contenido){
    let contenedormensajes=document.getElementById('mensajechat');
    let elementomensaje= document.createElement('p');
    elementomensaje.innerText=contenido;
    contenedormensajes.appendChild(elementomensaje); 

}

botonenviar.onclick=function(){
    let mensaje =mensajeingresado.value;
    mostrarmensajes(mensaje);
    socket.send(mensaje);
};
socket.onmessage=function(event){
    let mensaje=event.data;
    mostrarmensajes(mensaje);
};