function mostrar()
{
	var edad;
	var estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if( edad < 18 && estado != "Soltero")
	{
	
		alert("Es muy pequeño para No ser soltero");
	}

}//FIN DE LA FUNCION