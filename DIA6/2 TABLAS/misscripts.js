function multiplicar(){
  //OBTEner el numero
  let elementotextotabla =  document.getElementById("textotabla");//aqui recibo todo el elemento
  let textonumerotabla = elementotextotabla.value;//esto es un string
  let numerotabla = Number(textonumerotabla);

  //obtener la tabla
  let elementotablamultiplicar = document.getElementById("listatabla");

  //producir y mostrar resultado

  for(x=1;x<=10;x++){
    //calcular resultado
    let numeroresultado = numerotabla*x;
    //armar string con resultado
    let textoresultado = numerotabla + " por " + x + "es igual a " + numeroresultado;

    //CREAR UN ELEMENTO DE LA LISTA

    let itemlista = document.createElement("li");
    itemlista.innerText = textoresultado;
    elementotablamultiplicar.appendChild(itemlista);


  }


}