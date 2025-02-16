function extraernumerodesdeelemento(elemento){
    let mielemento =document.getElementById(elemento);
    let mitexto=mielemento.value;
    let minumero=Number(mitexto);
    return minumero;

}




function calcular(){
    let ventas1,ventas2,ventas3,ventas4,ventas5,ventas6;
    ventas1=extraernumerodesdeelemento("ventastienda1");
    ventas2=extraernumerodesdeelemento("ventastienda2");
    ventas3=extraernumerodesdeelemento("ventastienda3");
    ventas4=extraernumerodesdeelemento("ventastienda4");
    ventas5=extraernumerodesdeelemento("ventastienda5");
    ventas6=extraernumerodesdeelemento("ventastienda6");

    let totalventas=ventas1+ventas2+ventas3+ventas4+ventas5+ventas6;
    
    let mensajesalida="total ventas: "+ totalventas;
    let elementosalida=document.getElementById("parrafosalida");
    elementosalida.textContent=mensajesalida;

}