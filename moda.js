var x = 0;
const array = Array();

function add_element_to_array()
{
array[x] = document.getElementById("text1").value;
 
 x++;
 document.getElementById("text1").value = "";

 
}

// const lista1 = display_array();

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
   
  
}


const lista1 =display_array();
const lista2 =[1,2,3,4];

  
const lista1Count = {};

lista2.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];