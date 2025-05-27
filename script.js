const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual destes planetas pertencem ao Sistema Solar",
    alternativas: ["Apenas Marte", "Marte e Saturno"],
  },
  {
    enunciado: "Quais desses alimentos são fontes de proteina?",
    alternativas: ["Apenas ovos", "Ovos e Feijão"],
  },
  {
    enunciado: "Qual desses Paises falam Português",
    alternativas: ["Brasil e Portugal", "Apenas Brasil"],
  },
  {
    enunciado: "Qual dessas substâncias são compostas por âtomos",
    alternativas: ["Apenas Àgua(H2O)", "Àgua(H2O) e Oxigênio(O2)"],
  },
  {
    enunciado: "Quais destes animais são mamiferos?",
    alternativas: ["Apenas Golfinho", "Golfinho e Morcego"],
  },
];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
  }
}
mostraPergunta();
