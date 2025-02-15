let array =[7,4,2,9,6];

function listarnotas(){
    let lista = document.getElementById("listanotas");


    for(let nota of array){
        let item =document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);

    }



}

function calcularpromedio(){
    let suma =0;

    for(i=0;i<5;i++){
        suma +=array[i];
    }
    let promedio =(suma/5);
    document.getElementById("promedio").textContent=promedio;
}

function notamasalta(){
    let notaalta=0;
    let i=0;
    while(i<5){
        if(array[i]>notaalta){
            notaalta =array[i];
        }
        i++;
    }
    document.getElementById("nota").textContent=notaalta;
}

function hayaplazo(){
    let aplazo ="No";
    let i=0;
    do{
        if(array[i]<4){
            aplazo="si";
            break;
        }
        i++;



    }while(i<5);
    document.getElementById("aplazo").textContent=aplazo;
}