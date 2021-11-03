


function display_earn(){

    const invertion = document.getElementById("Invertion").value;
    const anos = document.getElementById('anos-select').value
    const taza = document.getElementById("taza").value;

    const earn =  parseFloat([(invertion * taza) * anos]) + parseFloat (invertion);

    earn.toString();
  document.getElementById("Result").innerHTML = earn;
   
  
}

 

  