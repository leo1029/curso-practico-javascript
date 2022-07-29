/* calcular promedio */

/*
se calcula agregando un grupo de números y dividiendo por el recuento de esos números. 
Por ejemplo, el promedio de 2, 3, 3, 5, 7 y 10 es 30 dividido por 6, que es 5.
*/ 
 
/**  METODO ARRAY.REDUCE recorre la matriz elemento por elemento agregando a cada paso el valor actual al valor anterior
 *   osea que lo va sumando 
*/

function calculadorpromedio(lista){
    const numeroLista = lista.reduce(
        function (numPosicionInicial =0, numPosicionFinal){
            return numPosicionInicial + numPosicionFinal;
        }
    );

    const promedio = numeroLista/lista;
    return promedio;
}

const lista2 = arraylito;











