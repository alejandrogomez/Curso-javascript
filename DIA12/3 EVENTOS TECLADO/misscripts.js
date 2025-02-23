let campo = document.getElementById("micampo");


function verificarnumero(event){
    if(event.keyCode<48 || event.keyCode>57 ){
        event.preventDefault();
    };
};

campo.addEventListener('keydown', verificarnumero);


campo.addEventListener('keyup', function(event){
    console.log("Entrada del usuario:" + event.target.value)
});





campo.addEventListener('keypress', function(event){
    console.log("caracter ingresado"+ event.key);
});

