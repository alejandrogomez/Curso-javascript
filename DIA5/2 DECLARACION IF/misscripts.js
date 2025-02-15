function evaluarcompra(){
    let elementorespuesta = document.getElementById("decision");

    let elementoprecio = document.getElementById("textoprecio");
    let precio = elementoprecio.value;

    if(precio<5){
        elementorespuesta.textContent="comprar dos cartones leche";
    }else{
        if(precio<8){
            elementorespuesta.textContent="comprar 1 carton de leche";
        }else{
            elementorespuesta.textContent="no comprar leche";
        }
        
    }
}