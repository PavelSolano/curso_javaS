// const precioOriginal =100;
// const descuento = 15;



function calcularPrecioConDescuento (precio,descuento){


 const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescueto =  (precio * porcentajePrecioConDescuento)/100;

return precioConDescueto
}


function cuponDiscont(){

    const cuponDiscountPercent = document.getElementById("cupons").value;
    return cuponDiscountPercent

}

function onClickButtonPriceDiscont () {

    const inputPrice = document.getElementById ("InputPrice").value;
    const inputDiscont = cuponDiscont ();

    const precioConDescuetoFinal = calcularPrecioConDescuento (inputPrice,inputDiscont);

    const resulP = document.getElementById("ResulP");

    resulP.innerText = "El precio con descuento es de :" + precioConDescuetoFinal;


   
}




