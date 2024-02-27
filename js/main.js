function resetInput(input){
    input.value= ' ';
}
function calcFactorial(){
    //obtener el numero 
    const input = document.getElementById("num");
    const usuNum = document.getElementById("num").value;
    //obtener el cuerpo de la tabla
    const bodyTable = document.getElementById("dataTable");
    //variable donde se va almacenar el factorial
    let factorial;

    //calcular el factorial
    if(isNaN(usuNum)){
        alert("Ingrese un valor numerico")
    }else if(usuNum < 0){
        alert("Ingrese un valor positivo");
    }else if(usuNum == 1 || usuNum == 0){
        factorial = 1
    }else{
        //ciclo que calcula el factorial
        factorial = 1;
        for(let i = 1; i <= usuNum; i++){
            factorial *= i;
        }
        //ingresar datos a la tabla
        console.log(bodyTable)
        //crear la fila
        const newFila = bodyTable.insertRow()
        const cell = newFila.insertCell(0);
        const cell2 = newFila.insertCell(1);
    
        //agregar los valores a la celda
        cell.textContent = usuNum;
        cell2.textContent = factorial;

    }

    resetInput(input)

    


    
}