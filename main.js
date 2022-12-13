let edad;
edad = Number((prompt("Introduce tu edad")));

if (edad >= 18){
    alert("Puedes ingresar, eres mayor de edad.");
} else {
    alert ("No puede ingresar, usted es menor de edad. Si decide ingresar será bajo su responsabilidad")
}

function alerta()
    {
    var mensaje;
    var opcion = confirm("Esta seguro que quiere salir de la pagina");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
}
