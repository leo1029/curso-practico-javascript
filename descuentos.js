/*const precioOriginal= 120;
const descuento = 18;

const porceentajePrecioConDescuento = 100-descuento;
const precioConDescuento= precioOriginal*(100-descuento)/100;
*/

/* a console le pdemos poner un objeto con {} dentro de los parentesis
console.log({ 
    precioOriginal,
    descuento,
    porceentajePrecioConDescuento,
    precioConDescuento,
})
*/

/*FORMULA PARA SACAR EL PORCENTAJE*/
 
function calcularPrecioConDescuento(precio, descuento){
    
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;

}


function onclickButtonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const priceValue=  inputPrice.value;
    const inputDiscount = document.getElementById("intupDiscount");
    const discountValue= inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP= document.getElementById("ResultP");

    resultP.innerText= "El precio con descuent son: "+ precioConDescuento;

}

