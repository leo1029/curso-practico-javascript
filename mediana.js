

/****************************LA MEDIANA ES:*********************************/
//LA MEDIANA DE UN CONNJUNTO DE NUMEROS, ES EL NUMERO MEDIO DE ESE CONNJUNTO 
/******************************EJEMPLO:*************************************/ 

//                            NUMERO IMPAR:

//                    Encuentre la mediana del conjunto
//                       {2, 5, 8, 11, 16, 21, 30}.
//     Hay 7 números en el conjunto, y estos están acomodados en orden ascendente. 
//          El número medio (el cuarto en la lista) es 11. Así, la mediana es 11.

//                            NUMERO PAR:

//      Encuentre la mediana del conjunto {3, 10, 36, 255, 79, 24, 5, 8}.
//      1.-Primero, arregle los números en orden ascendente.

//                   {3, 5, 8, 10, 24, 36, 79, 255}

//            Hay 8 números en el conjunto -- un número par. Así, 
//             encuentre el promedio de los dos números medios, 
//             estos dos nnumeros se suman y se divide entre 2

//                              10 y 24.
//                      (10 + 24)/2 = 34/2 = 17

// pasos a seguir 
/*
1.- vallidar que los numeros del cojunto se para o impar
2.- acomodar el arreglo en orden ascendente ejemplo: 23541 orden acendente 12345
3.- 
*/

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(

        function(numeroGuardadoEnLaLista =0, numeroIntroducidoALista){
            return numeroGuardadoEnLaLista + numeroIntroducidoALista;
        }

    );

    const promedioDelaLista = sumaLista/ lista.leng;

    return promedioDelaLista;

};

const lista1= [
    100,
    200,
    500,
    400000000,
];


   //-> acomodaremos el arregl de manera aascendente con la clase ARRAY.SORT la cual oderna de manera ascendente 

function acomodarArray(a, b){
    return a - b;
}


const lisataAcomodada = lista1.sort(acomodarArray);

   /* Para que la lista nos de numeros enntero utilizare la clase */

   //                        parseInt:  
   //               convierte los decimales a enteros

const mitadLista = parseInt(lisataAcomodada.length)/2;

  //-> Aqui se hace la operacion de la conidicion si el arreglo es par sumara los dos numeros medios y  se dividen  entre dos
function esPar(numerito){
    if(numerito%2 === 0){
    return true
    }else{
        return false
    }

}

  //-> Aqui realizareos el calculo para la mediana para esto necesitamos dos cosas
  //-> el promedio -> ya tenemos una funcion para calcular el promedio el cual necesita de dos parametros el cual al ser el  
  // caso de que sea  par, darle los dos nueros que se sumaran y se dividira entre dos, la mediana es el promedio de los dos números medios.
  //-> la mediana

let mediana;

if(esPar(lisataAcomodada.length)){
    var parametro1 = lisataAcomodada[mitadLista-1]//-> posicion del rreglo antes del numero del medio 
    var parametro2 = lisataAcomodada[mitadLista];//-> posicion del arrelgo despues del numero medio 

    var promedioParametro1y2 = calcularMediaAritmetica([
        parametro1,
        parametro2,
    ]);

    mediana= promedioParametro1y2;

}else{

    mediana=lisataAcomodada[mitadLista];

}

 //-> Aqui llenamos los parametros para la condicion de la funcionn 






