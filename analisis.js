
//Funciones Helpers

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function esPar (numero){

    return (numero % 2 === 0);
    

}


function salTop (lista){

    const cantidadTop = lista.length*(0.1)
    return cantidadTop;
}
//Calculadora de Medina 

function medianaSalarios(lista){

    const mitad = parseInt (lista.length/2);

    if (esPar(lista.length)) {

        const personaMitad = lista[mitad]
        const personaMitad2 = lista[mitad - 1]

        const mediana = calcularMediaAritmetica ([personaMitad,personaMitad2]);
        return mediana
        
    }else{
        const personaMitad = lista[mitad]
        return personaMitad;
    }
}

//Salario Genereal

const salariCol = colombia.map(

    function (personita){

        return personita.salary;
    }
);
const medianaGeneral = medianaSalarios(salariCol);





//Salario Top
const salariosConSorted = salariCol.sort(

    function (salarya, salaryb){
        return salarya - salaryb;
    }

);

const posicion = salariosConSorted.length - salTop(salariosConSorted);
const grupoTop = salTop(salariosConSorted);
const salarioColTop = salariosConSorted.splice(posicion,grupoTop);

const medianaTop = medianaSalarios(salarioColTop);



console.log(medianaGeneral ,medianaTop);