let repetir = ""
do{
let nombre = prompt('Ingrese nombre y apellido')
let nota1 = parseInt (prompt('Ingrese su primera nota'))
let nota2 = parseInt (prompt('Ingrese su segunda nota'))
let nota3 = parseInt (prompt('Ingrese su tercera nota'))

let  sumarNotas= 0;

function sumar (nota1, nota2,nota3){
    sumarNotas = nota1 + nota2 + nota3
}
sumar (nota1,nota2,nota3)
let promedio = sumarNotas/3
if(promedio >= 9){
    alert ( nombre + ' ' + "entraste al top 10 te sacaste un: " +promedio +" Felicidades!")
}
 else if( promedio >= 7){
    alert  (nombre + ' ' +'estas aprobado con un: ' +promedio)
}else {
    alert  (nombre + ' ' +'no aprobaste te sacaste un: ' +promedio)
}
repetir = prompt('Si desea ingresar otro promedio ponga si').toLowerCase()
}
while(repetir == 'si')




