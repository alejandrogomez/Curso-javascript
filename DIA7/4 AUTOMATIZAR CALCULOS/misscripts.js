function extraernumerodesdeelemento(elemento){
    
    let mitexto=elemento.value;
    let minumero=Number(mitexto);
    return minumero;

}




function calcular(){
    let ventas=[];
    let posicionventas=0;
    let elementosventas = document.getElementById("itemstiendas");

    for(let item of elementosventas.children){
        let valorventa=extraernumerodesdeelemento(item.children[1]);
        ventas[posicionventas]=valorventa;
        posicionventas=posicionventas + 1;
    }


  

    let totalventas=sumartotal(ventas);
    let ventamayor =calcularmayor(ventas);
    let ventamenor=calcularmenor(ventas);
    
    let mensajesalida="total ventas: "+ totalventas + "/ venta mayor:"+ ventamayor+ "/ venta menor: "+ ventamenor;
    let elementosalida=document.getElementById("parrafosalida");
    elementosalida.textContent=mensajesalida;

}


function sumartotal(array){
    let total = 0;

    for(let venta of array){
        total=total+venta;

    }
    return total;
}

function calcularmayor(array){
    let maximo =array[0];

    for(let venta of array){
        if(venta>maximo)
            maximo=venta
    }


    return maximo;
}

function calcularmenor(array){

    let minimo =array[0];

    for(let venta of array){
        if(venta<minimo)
            minimo=venta
    }


    return minimo;
}


function crearparrafotienda(textolabel,valormin){
    //crear etiquetas de parrafo
    let elementoparrafo=document.createElement("p");
    //crear etiqueta label
    let elementoetiqueta=document.createElement("label");
    elementoetiqueta.innerText=textolabel+":";
    //conectar con input
    elementoetiqueta.setAttribute("for",textolabel);
    //crear input

    let elementoinput=document.createElement("input");

    //establecer atributos de input
    elementoinput.setAttribute("type","number");
    elementoinput.setAttribute("id",textolabel);
    elementoinput.setAttribute("min",valormin);
    elementoinput.setAttribute("value",0);
    //agregarlabel input al parrafo
    elementoparrafo.appendChild(elementoetiqueta);
    elementoparrafo.appendChild(elementoinput);
    //devolver parrafo completo

    return elementoparrafo;

}


function creartiendas(contenedorid,min,cantidadtiendas){
    //encontrar contenedor por su ID
    let elementocontenedor=document.getElementById(contenedorid);
    //loop para crear tiendas 
    for(let conteotiendas=1;conteotiendas<=cantidadtiendas;conteotiendas++){
        //crear texto label
        let textoetiqueta="tienda "+ conteotiendas;
        //crear tiendas con crearpparafotienda
        let parrafotienda=crearparrafotienda(textoetiqueta,min);
        //agregar parrafo al contenedor
        elementocontenedor.appendChild(parrafotienda);
    } 

}

