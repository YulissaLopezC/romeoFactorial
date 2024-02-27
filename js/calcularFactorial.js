export function calcularFactorial(num){

    let factorial = 1;
    //si no es un numero
    const isNum = isNaN(num);
    if(isNum){
        alert("Ingrese in valor numerico");
    }else if(num < 0){
        //si es negativo
        alert("Ingrese un valor positivo");
    }else if(num == 1 || num == 0){
        factorial = 1;
    }else{
        for(let i = 1; i <= num ; i++){
            factorial *= i;
        }  
    }

    return factorial;
}