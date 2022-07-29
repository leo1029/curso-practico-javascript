function esPar(numerito){
    return (numerito%2 === 0)
}

function calcularPromedio(lista){
    
    const sumaLista = lista.reduce (
        function(valorAcumulable=0, nuevoValor){
            return valorAcumulable + nuevoValor ;
        }
    );
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
}


    /*************** CALCULADORA DE MEDIANA *****************/

    function medianaSalarios(lista){
        const mitad = parseInt(lista.length / 2)

        if(esPar(lista.length)){
            const personitaMitad1 = lista[mitad-1];
            const personitaMitad2 = lista[mitad];

            const mediana = calcularPromedio([personitaMitad1, personitaMitad2]);
            return mediana;

        }else{
            const personitaMitad=lista[mitad];
            return personitaMitad;
        }
    }

    /**************  MEDIANA GENERAL ******************/
    
    /** Se mandoo a llamar la propiedad salary del arreglo colombia */
    const salarioCol = colombia.map(
        function (personita){
            return personita.salary;
        });


      /** lista  ordenada */
    const salarioColSorted = salarioCol.sort(
        function(salaryA, salaryB){
            return salaryA-salaryB;

    });

    const medianaGeneralCol = medianaSalarios(salarioColSorted);

    /*** CALCULANDO EL TOP 10 DE LO SALARIOS ********/

    /** guardamos el resultado de la mediana en una variable */

     /** .SPLICE utiliza dos parametros, el cual en unno se indica desde donde 
     * se empezara la division y el otro el final 
     */

    const splaceStart= (salarioColSorted.length * 90 )/ 100;
    const splaceFin = salarioColSorted.length - splaceStart;

    const salarioColTop10 = salarioColSorted.splice(
        splaceStart,
        splaceFin,
    );

    const salarioTop10Col = medianaSalarios(salarioColTop10);

    console.log ({
        medianaGeneralCol,
        salarioTop10Col,
    });

    



    




