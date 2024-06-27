
function calcularValores() {
    let valor1 = Number(document.getElementById('txtValor1').value);
    let valor2 = Number(document.getElementById("txtValor2").value);

    let operacao = document.getElementById('operacao').value;

    let txtResultado = document.getElementById("txtResultado");

    let resultado;

    if(operacao === '+'){
     resultado = valor1 + valor2;
    }

    else if(operacao === '-'){
        resultado = valor1 - valor2;
    } 
    
    else if(operacao === '*') {
        resultado = valor1 * valor2;
    }

    else {
        resultado = valor1 / valor2;
    }

    txtResultado.textContent = resultado;

 
}




