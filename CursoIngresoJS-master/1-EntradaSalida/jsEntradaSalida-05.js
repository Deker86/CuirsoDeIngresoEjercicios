/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	alert (" Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años ");





	var num1;
	var num2;
	var resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);

    resultado = num1 % num2;	


    alert(resultado);
}

}









