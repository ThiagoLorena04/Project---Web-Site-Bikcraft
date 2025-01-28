//Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  S;

  resposta.classList.toggle("ativa");
  pergunta.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicletas-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  galeriaContainer.prepend(img);
}

function eventosGaleria(img) {
  img.addEventListener("clilk", trocarImagem);
}

galera.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
