// Es el codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log ("Los lados del cuadrado miden" + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
} 


// console.log ("El perimeto del cuadrado miden" + perimetroCuadrado + "cm")

function areaCuadrado (lado){
    return lado *lado;
} 

// console.log ("El perimeto del cuadrado miden" + areaCuadrado + "cm^2")

console.groupEnd();

// codigo del Triangulo 
console.group("Tringulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log (
//     "Los lados del tringulo miden "
//      + ladoTriangulo1 
//      + "cm, " 
//      +ladoTriangulo2 
//      + "cm y "  
//      + baseTriangulo 
//      + "cm"
    
//  );

function perimetroTriangulo (lado1,lado2,lado3) {

    return parseFloat (lado1) + parseFloat (lado2)+ parseFloat (lado3);

}

// console.log ("El perimeto del tringulo miden" + perimetroTriangulo + "cm")

function areaTriangulo (base, altura){

return (base*altura)/2
}
console.groupEnd();

// Codigo del circulo

console.group("Circulo");
function perimetroCirculo (radio){
   return Math.PI * radio * 2;
} 
 
// console.log ("El perimeto del circulo miden " 
// + perimetroCirculo.toFixed(3) + "cm");

function areaCirculo (radio) {
return (Math.PI * Math.pow(radio,2))/2;
}
// console.log ("El área del circulo miden " + areaCirculo.toFixed(3) + " cm^2")
console.groupEnd();

// Aqui interactuamos con el HTML 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value; // Extraemos el valor
    const perimetro = perimetroCuadrado (value)
    alert(perimetro);
}


function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value; // Extraemos el valor
    const area = areaCuadrado (value)
    alert(area);

}

//interacción para Triangulo 

function calcularPerimetroTriangulo(){

    const input1 = document.getElementById("InputTriangulo1")
    const input2 = document.getElementById("InputTriangulo2")
    const input3 = document.getElementById("InputTriangulo3")

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo (value1, value2, value3)

    alert(perimetro);



}
function calularAreaTriangulo(){
    const altura = document.getElementById("altura").value;
    const base = document.getElementById("base").value;

    area = areaTriangulo(base,altura)
    alert (area);

}

//Interaciión para Circulo

function circunferenciaCirculo(){

    const value = document.getElementById("inputRadio").value;
    const circunferencia = perimetroCirculo(value)
    alert (circunferencia);
    
}

function calcularAreaCirculo(){
   const input = document.getElementById("inputRadio").value;
    const area = areaCirculo(input)
    alert (area);

}


//Validación de un tringulo Isosles

function calcularAltura(ladoisoseles, base){

    const altura = Math.sqrt (Math.pow (ladoisoseles,2) - Math.pow ((base/2),2));

    return altura;
}

function validarTrianguloIsoseles(){

const input1 = document.getElementById("InputTriangulo1").value;
const input2 = document.getElementById("InputTriangulo2").value;
const input3 = document.getElementById("InputTriangulo3").value;

        if (input1 === input3) {

            const base = input2;
            const altura = calcularAltura(input1,base);
            alert ("es un isoseles y su altura es: " + altura);
            

        }else if(input1 === input2){
            const base = input3;
            const altura = calcularAltura(input1, base);
            alert ("es un isoseles y su altura es: "+ altura);

        } else if (input3 === input2)
        {
            const base = input1;
            const altura = calcularAltura(input2, base);
            alert ("es un isoseles y su altura es: " + altura);
        } else {
            alert("No estas agregando un tringulo Isoseles");
        }
    

    }