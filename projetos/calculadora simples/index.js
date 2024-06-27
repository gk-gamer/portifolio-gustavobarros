
function calcularValores() {
  let valor1 = Number(document.getElementById('txtValor1').value);
  let valor2 = Number(document.getElementById('txtValor2').value);
  let resultado = document.getElementById("txtResultado");
  let operacao = document.getElementById('cbxOperacao').value;
  let valorOperacao;


  if( operacao === '+') {
    valorOperacao = valor1 + valor2;
  }
  else if(operacao === '-'){
     valorOperacao = valor1 - valor2;
  }
  else if(operacao === '*'){
     valorOperacao = valor1 * valor2;
  }
  else {
    valorOperacao = valor1 / valor2;
  }

  resultado.textContent = valorOperacao;
}