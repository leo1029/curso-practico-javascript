/*
const lista1 =[
    100,
    200,
    300,
    500,
];
*/

/*primero necesitamos es sumar todos los numeros de la array lista */
/*utilizaremos un ciclo for para hacer la suma y utilizaremos let para hacar un cambio en el futuro */

/*

let suma= 0;

for(let i=0; i<lista1.length; i++ ){
    suma=suma+lista1[i]
}
*/

/*despues dividiremos la la suma entre la cantidad de elentis que estan en el array lista1 */

/*
const promedioLista1 = suma/lista1.length;
*/

function calcularMediaAritmetica(lista){
    /**
     let numeroIntroducidoALista = 0 
    
    for(let i = 0 ; i<lista.length; i++){
        numeroIntroducidoALista = numeroIntroducidoALista + lista[i];
    }

    const promedioDelaLista = numeroIntroducidoALista/lista.length

    return promedioDelaLista;
     */

    const sumaLista = lista.reduce(

        function(numeroGuardadoEnLaLista =0, numeroIntroducidoALista){
            return numeroGuardadoEnLaLista + numeroIntroducidoALista;
        }

    );

    const promedioDelaLista = sumaLista/ lista.leng;


    return promedioDelaLista;

}