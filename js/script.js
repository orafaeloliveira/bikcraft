// salvando os links
const links = document.querySelectorAll(".header-menu a");

// função que vai ativar o link do menu
function ativarLink(link) {
    // salvando a url da página atual
    const url = location.href;
    // salvando a url do link do menu
    const href = link.href;
    // verificando se o href do menu bate com a url da página
    if (url.includes(href)) {
        // ativa a classe que ativa a decoração
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// salvando os parâmetros da url da página
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas
// selecionando botões dentro da classe perguntas
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    // selecionando elemento clicado
    const pergunta = event.currentTarget;
    // salvando o elemento indicado pelo aria-controls
    const controls = pergunta.getAttribute("aria-controls");
    // guardando a resposta que possui o mesmo id indicado pelo aria-controls
    const resposta = document.getElementById(controls);
    // ativando ou desativando a classe ativa na resposta
    resposta.classList.toggle("ativa");
    // verificando se a resposta possui a classe ativa e armazenando o resultado
    const ativa = resposta.classList.contains("ativa");
    // alterando o atributo aria-controls para o valor retornado por armazenado em ativa
    pergunta.setAttribute("aria-expanded", ativa);
}

// adicionando evento de clique que aciona a funçaão ativarPergunta
function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de imagens
// salvando imagens e elemento que contém as imagens
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    // elemento atual que foi clicado
    const img = event.currentTarget;
    // usando o método matchMedia para verificar se a janela tel mais de 1000px, armazenando true ou false
    const media = matchMedia("(min-width: 1000px").matches;
    // adicionando a imagem clicada no início do conteiner da galeria
    if (media){
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


if (window.SimpleAnime) {
    new SimpleAnime()
}