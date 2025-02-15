function consultarprecio(){
    let elementorespuesta = document.getElementById("textoprecio");
    let elementofruta = document.getElementById("numerofruta");
    let fruta = elementofruta.value;
    


    switch(fruta){


        case "1":
            elementorespuesta.textContent ="8.45";
            break;
        
         case "2":
           elementorespuesta.textContent ="6.32";
             break;

        case "3":
            elementorespuesta.textContent ="7.6";
            break;

        case "4":
            elementorespuesta.textContent ="23";
            break;

        case "5":
            elementorespuesta.textContent ="1.58";
            break;


    }
}