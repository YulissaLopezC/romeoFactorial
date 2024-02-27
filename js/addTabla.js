export function addTabla(num, factorial, tableBody, tabla){
    //creo la fila de la tabla
    const fila = tableBody.insertRow();
    //calcular cuantas celdas tiene la tabla usando el encabezado
    const encabezado = tabla.rows[0];
    const numCell = encabezado.cells.length;
    //ingresar los datos
    for(let i = 0; i < numCell; i++){
        //creo la celda
        const cell = fila.insertCell(i);
        cell.textContent = arguments[i];
    }
}