function extraernumerodesdeelemento(elemento){
    let mielemento =document.getElementById(elemento);
    let mitexto=mielemento.value;
    let minumero=Number(mitexto);
    return minumero;

}




function calcular(){
    let ventas=[];
    ventas[0]=extraernumerodesdeelemento("ventastienda1");
    ventas[1]=extraernumerodesdeelemento("ventastienda2");
    ventas[2]=extraernumerodesdeelemento("ventastienda3");
    ventas[3]=extraernumerodesdeelemento("ventastienda4");
    ventas[4]=extraernumerodesdeelemento("ventastienda5");
    ventas[5]=extraernumerodesdeelemento("ventastienda6");

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