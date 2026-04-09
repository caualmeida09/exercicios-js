// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if(idade>=18){
    return "adulto";
  }
  else if(idade >=12){
    return "adolescente"; 
  }
  else{
    return "criança";
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  let valor = preco;
  let per = 100 - percentual; 
  valor =  valor *(per/100);
  return valor;
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if(nota>=60){
    return "aprovado";
  }
  else if(nota <40){
    return "reprovado"; 
  }
  else{
    return "recuperação";
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma =0;
  for(let numero of numeros){
    if ( numero %2 === 0 ){
      soma +=numero;
    }
  }
 console.log(soma);
 return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contar =0;
  for(let letr of texto){
    if(letr === letra){
    contar+=1; 
    }
  }
  return contar;
}