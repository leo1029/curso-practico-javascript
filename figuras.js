

//cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado){

    return lado*4;

}


function areaCuadrado(lado){

    return lado * lado;

}

console.groupEnd();



// tringulo 

 console.group("trinagulo")


    function areaTriangulo (base, altura){


        return (base*altura)/2


    } 
  

    function perimetroTriangulo (lado1,lado2,base){

        return lado1+lado2+base;
        
    }


  console.groupEnd();

    //  CIRCULO
    console.group("Circulo");

    //PI
    const PI = Math.PI;

    //DIAMETROO
    function diametroCirculo (radio){
        return radio*2;
    }

   //CIRCUNFERENCIA

   /* aqui tenemos una funcion dentro de otra funcion 
          El llamado funciona de la siguiente manera 
    -el parametro radio que le damos a la funcion perimetroCirculo 
    es el parametro que necesita la  funcion diametroCirculo para que 
    realice el calculo que la funcion diametroCirculo necesita para  
    calcular el diametro */

    function perimetroCirculo (radio){
        const diametro = diametroCirculo(radio)
        return  diametro* PI;
    }
     /* Esto se realizo para que la funcion perimetroCirculo 
        no realice las dos operacion de calcular el diametro 
        y perimetro, 
        
        */
    //AREA CIRCULO 

     function areaCirculo (radio){
        return (radio*radio)*PI;
    }

    console.groupEnd();


    //triangulo isosceles

    //La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    //La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles
    //La función debe retornar la altura del triángulo

    //lados congruentes 9m
    //base 8m

    //baseTi base del tringulo isosceles

    function alturaTrianguloIsosceles(ladoA,ladoB,baseTI){  

        if(ladoA&ladoB != baseTI){
            const resultado =[(ladoA*ladoB)-(baseTI*baseTI)/4]
            console.log("es un trianngulo isosceles");

            return Math.sqrt(resultado);
        }else if (ladoA != ladoB){
            console.log(" NO es un triangulo isceles");
        }

    }
    
   //INTERACCION CON EL HTML 

   function calcularPerimetroCuadrado(){
        const input= document.getElementById("inputCuadrado");
        const value= input.value;

        const perimetro= perimetroCuadrado(value);
        alert(perimetro);
   }

   function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;
    const area= areaCuadrado(value);
    alert(area);

   }

   