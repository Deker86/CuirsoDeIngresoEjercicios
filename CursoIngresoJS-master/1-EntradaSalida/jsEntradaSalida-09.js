/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 
 var sueldo;
 var nuevoSueldo;
 var aumento;


 sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
 
 aumento = sueldo * 0.10;
 nuevoSueldo = sueldo + aumento;




 document.getElementById("txtIdResultado").value = nuevoSueldo;

}

