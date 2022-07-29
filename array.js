
const cupones=[
    {
        name:"DES1",
        Pdescuento: 15
    },
    {
        name:"DES2",
        Pdescuento: 30

    },
    {
        name:"DES3",
        Pdescuento: 45
    }
]



function calculoDeDescuento(precio, descuento){
    const porcentajePrecioDescuento= 100-descuento;
    const precioConDescuentoAplicado = (precio * porcentajePrecioDescuento)/100

    return precioConDescuentoAplicado;
}



function onclickcalcularDescuento(){

    const inputprecio = document.getElementById("inputPrecio");
    const precioValue = inputprecio.value;

    const ipuntCodDescuento = document.getElementById("inputCodDescuento");
    const cuponValue = inputCodDescuento.value;

    const validarCupones = function(cupon) {
        return cupon.name === cuponValue; 
    };

    const validacionCupon= cupones.find(validarCupones);

    if(!validacionCupon){
        resultadoTotal.innerText="El coodigo ingresado no es correcto"
    }else{

        const descuentoConCodigo  = validacionCupon.Pdescuento;
        const calcularTotalConDescuento = calculoDeDescuento(precioValue, descuentoConCodigo);
        const resultP = document.getElementById("resultadoTotal")

        resultadoTotal.innerText= "el precio con el descuento es de : $" + calcularTotalConDescuento;

    }
}





