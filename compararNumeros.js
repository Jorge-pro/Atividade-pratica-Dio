function comparaNumeros (num1, num2) {
  /*Para tratar os resultados e não ocorrer erros colocamos... */ 
  if (!num1 || !num2) 
  return 'Defina dois números!';

  const primeiraFrase = criarPrimeiraFrase (num1, num2);
  const segundaFrase = criarSegundaFrase (num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

/*Estrutura da Primeira frase*/
function criarPrimeiraFrase (num1, num2) {
  let saoIguais = '';
  if(num1 !== num2) {
    saoIguais = 'Não'
  }

  return `Os numeros ${num1} e ${num2} ${saoIguais} São iguais.`;
}

/* Estrutura da Segunda Frase*/
function criarSegundaFrase (num1, num2) {
  const soma = num1 + num2;

  let resultado10 = 'menor';
  let resultado20 = 'menor';
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if(compara10) {
    resultado10 = 'maior';
  }
  if(compara20) {
    resultado20 = 'maior';
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros (5,8));