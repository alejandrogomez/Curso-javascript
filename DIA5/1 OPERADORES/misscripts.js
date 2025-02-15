function calcular(){
    let elementorespuesta1 = document.getElementById("respuesta1");
    let elementorespuesta2 = document.getElementById("respuesta2");
    let elementorespuesta3 = document.getElementById("respuesta3");

    let elementoedad= document.getElementById("textoedad");
    let edad=elementoedad.value;

    let puedebeber= edad>=18;
    elementorespuesta1.textContent = puedebeber;
    
    let puedeingresar = edad>=18 && edad <=30;
    elementorespuesta2.textContent = puedeingresar;

    let entradagratis= edad ==20 || edad ==25;
    elementorespuesta3.textContent = entradagratis;


}
