let empleados =[];
function Empleado(legajo,nombre,apellido,nacimiento,cargo){
    this.legajo=legajo;
    this.nombre=nombre;
    this.apellido=apellido;
    this.nacimiento=nacimiento;
    this.cargo=cargo;
}

function agregarempleado(){
    let legajo =document.getElementById("txtlegajo").value;
    let nombre =document.getElementById("txtnombre").value;
    let apellido =document.getElementById("txtapellido").value;
    let nacimiento =document.getElementById("txtnacimiento").value;
    let cargo =document.getElementById("txtcargo").value;

    let empleado = new Empleado(legajo,nombre,apellido,nacimiento,cargo);
    empleados.push(empleado);
    alert("empleado ha sido agregado");
    limpiarcampos();

}


function mostrarempleado(){
    let listado='';

    for(empleado of empleados){
        for(let prop in empleado){
            listado=listado+prop.toUpperCase()+ ": "+ empleado[prop]+","
        }
        listado=listado+"\n";

    }
    alert(listado);


}

function limpiarcampos(){
    document.getElementById("txtlegajo").value="";
    document.getElementById("txtnombre").value="";
    document.getElementById("txtapellido").value="";
    document.getElementById("txtnacimiento").value="";
    document.getElementById("txtcargo").value="";
}


