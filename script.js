const botoes = document.querySelectorAll(".botao");
console.log(botoes);
for (let i = 0; i < botoes.length; i++) {
    console.log(i);
  }
  botoes[i].onclick = function () {};
  botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      botoes[i].classList.add("ativo");
    };
  }
  for (let j = 0; j < botoes.length; j++) {
    botoes[j].classList.remove("ativo");
  }
  const contadores = document.querySelectorAll(".contador");
  contadores[0].textContent = "Contagem regressiva";
  const tempoObjetivo1 = new Date("2024-10-05");

contadores[0].textContent = tempoObjetivo1;
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;