const lista1 =[

    100,
    340,
    200,
    400,
    800,
    600,
    4000,
    300,
    270,
    310


]

lista1.sort();
const mitadLista = lista1.length / 2;

function esPar(numero){

if (numero % 2  === 0) {

    return true;
}
else{
    return false;
}
}

let mediana
if (esPar(lista1.length)){

    const mitadLista1 = mitadLista - 1;
    const mitadLista2 = mitadLista;
    console.log(mitadLista1)
    console.log(mitadLista2)
    mediana = (lista1[mitadLista1] + lista1[mitadLista2]) / 2 ;
}
  
else{

    mediana = lista1[mitadLista - 0.5] ;
}

