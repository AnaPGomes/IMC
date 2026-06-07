function calcularIMC(peso, altura) {
  if (!peso || !altura || peso <= 0 || altura <= 0) {
    throw new Error('Peso e altura devem ser valores positivos');
  }
 
  const imc = peso / (altura * altura);
 
  let classificacao;
  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 30) classificacao = 'Peso normal';
  else if (imc < 35) classificacao = 'SObrepeso';
  else if (imc < 40) classificacao = 'Obesidade grau I';
  else classificacao = 'Obesidade grau II';
 
  return {
    imc: parseFloat(imc.toFixed(2)),
    classificacao
  };
}
 
module.exports = { calcularIMC };
