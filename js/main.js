import { calcularFactorial } from "./calcularFactorial.js";
import { addTabla } from "./addTabla.js";

function resetInput(input){
    input.value= '';
}

document.addEventListener("DOMContentLoaded", function(){
    //obtener el cuerpo donde se va insertar el resultado
    const bodyTable = document.getElementById("dataTable");
    //traer el boton
    const btnFact = document.getElementById("calcFactorial");
    //la tabla
    const tabla = document.getElementById("tabla");
    console.log(tabla)

     //obtener el input
     const input = document.getElementById("num");
     console.log(input)
    
    //agregdo el evento al boton
    btnFact.addEventListener("click", ()=>{
        //obtener el dato del factorial
        let num = document.getElementById("num").value;
        //revisar si el input esta vacio
        if(num === ""){
            num = 0;
        }
        //llamar la funcion que calcula el factorial y almacenar el valor en una variable
        let resultado = calcularFactorial(num);
        addTabla(num, resultado,bodyTable, tabla);
        resetInput(input);
        
    })

    

})

