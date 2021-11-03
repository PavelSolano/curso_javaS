function calculaPromedio(lista){

let sumaLista = 0;

for (let i = 0; i < lista.length ; i++) {
    
    sumaLista = sumaLista + lista[i];
   
}   

const sumaLista = lista.reduce(
    function (valorAcumulad = 0 , nuevoValor){
        return valorAcumulad + nuevoValor;
    }
);

const promedio = sumaLista / lista.length;
return promedio
}