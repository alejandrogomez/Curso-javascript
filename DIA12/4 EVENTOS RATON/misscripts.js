let menu=document.getElementById('mimenu');
let boton = document.getElementById('miboton');


boton.addEventListener('mouseover',function(){
    menu.style.display='block';
});

boton.addEventListener('mouseout',function(){
    menu.style.display='none';
});

document.addEventListener('mousemove',function(event){
    console.log("posicionx"+ event.clientX+ " - posicion Y"+  event.clientY);
});