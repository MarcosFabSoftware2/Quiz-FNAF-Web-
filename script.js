let contFreddy = 0; 
let contBonnie = 0;
let contChica = 0;
let contFoxy = 0;

function contagem() {
    let radios = document.querySelectorAll("input[type='radio']");

    radios.forEach(element => {
        if (element.checked) {
            if (element.value === "freddy") {
                contFreddy++;
            } else if (element.value === "bonnie") {
                contBonnie++;
            } else if (element.value === "chica") {
                contChica++;
            } else if (element.value === "foxy") {
                contFoxy++;
            }
        }
    });
}

function resultado() {
    let resultado = `Freddy = ${contFreddy}<br> Bonnie = ${contBonnie}<br> Chica = ${contChica}<br> Foxy = ${contFoxy}`;
    document.querySelector("#resultado").innerHTML = resultado;

    localStorage.setItem("freddy", contFreddy);
    localStorage.setItem("bonnie", contBonnie);
    localStorage.setItem("chica", contChica);
    localStorage.setItem("foxy", contFoxy);
}

function exibirResultado(pagina) {
    let contagemVotos = localStorage.getItem(pagina);
    document.querySelector("#votos").innerHTML = "<h1>Votos: " + contagemVotos + "</h1>";
}

function Maior() {
    let maior = Math.max(contFreddy, contBonnie, contChica, contFoxy);
    let pagina;

    if (contFreddy === maior) {
        pagina = "freddy";
    } else if (contBonnie === maior) {
        pagina = "bonnie";
    } else if (contChica === maior) {
        pagina = "chica";
    } else if (contFoxy === maior) {
        pagina = "foxy";
    }

    return pagina;
}

function redirecionamento() {
    let pagina = Maior();
    setTimeout(() => {
        window.open(pagina + ".html");
    }, 5000);
}

function resultadoFinal() {
    contagem();
    resultado();
    redirecionamento();
}

let perguntas = [
    "Qual a cor do seu animatrônico favorito?", // 1
    "Qual é a habilidade do seu animatrônico favorito?", // 2
    "Qual é o seu acessório favorito?", // 3
    "Qual é o seu lugar favorito no restaurante?", // 4
    "Qual é a sua expressão favorita?", // 5
    "Qual é o seu comportamento favorito?", // 6
    "Qual é o seu momento favorito?", // 7
    "Qual é a sua comida favorita?", // 8
    "Qual é o seu medo?", // 9
    "Qual é o seu tipo de música favorita?" // 10
   ]

let respostas = [
    "Freddy", "Bonnie", "Chica", "Foxy", // PERGUNTA Nº1
    "Cantar", "Tocar guitarra", "Distrair com comida", "Correr rápido", // PERGUNTA Nº2
    "Chápeu", "Guitarra", "Cupcake", "Pirata", // PERGUNTA Nº3
    "Palco", "Sala de jogos", "Cozinha", "Corredor", // PERGUNTA Nº4
    "Sorriso amigável", "Sorriso curioso", "Sorriso alegre", "Olhos brilhantes", // PERGUNTA Nº5
    "Brincar com crianças", "Fazer truques", "Cantar", "Espionar", // PERGUNTA Nº6
    "Durante o show", "Quando as luzes piscam", "Hora do lanche", "Quando está escondido", // PERGUNTA Nº7
    "Pizza", "Cenoura", "Bolo", "Peixe", // PERGUNTA Nº8
    "Ser desligado", "Ficar sozinho", "Não ser lembrada", "Perder a velocidade", // PERGUNTA Nº9
    "Canções infantis", "Rock", "Música alegre", "Música de pirata" // PERGUNTA Nº10

]

//---------------------------//
// PERGUNTA Nº1]
let questão1 = ["Qual a cor do seu animatrônico favorito?"]
let alternativas1 = ["Freddy", "Bonnie", "Chica", "Foxy"] 

// PERGUNTA Nº2
let questão2 = ["Qual é a habilidade do seu animatrônico favorito?"]
let alternativas2 = ["Cantar", "Tocar guitarra", "Distrair com comida", "Correr rápido"] 

// PERGUNTA Nº3
let questão3 = ["Qual é o seu acessório favorito?"]
let alternativas3 = ["Chápeu", "Guitarra", "Cupcake", "Pirata"] 

// PERGUNTA Nº4
let questão4 = ["Qual é o seu lugar favorito no restaurante?"]
let alternativas4 = ["Palco", "Sala de jogos", "Cozinha", "Corredor"]

// PERGUNTA Nº5
let questão5 = ["Qual é a sua expressão favorita?"]
let alternativas5 = ["Sorriso amigável", "Sorriso curioso", "Sorriso alegre", "Olhos brilhantes"]

// PERGUNTA Nº6
let questão6 = ["Qual é o seu comportamento favorito?"]
let alternativas6 = ["Brincar com crianças", "Fazer truques", "Cantar", "Espionar"]

// PERGUNTA Nº7
let questão7 = ["Qual é o seu momento favorito?"]
let alternativas7 = ["Durante o show", "Quando as luzes piscam", "Hora do lanche", "Quando está escondido"]

// PERGUNTA Nº8
let questão8 = ["Qual é a sua comida favorita?"]
let alternativas8 = ["Pizza", "Cenoura", "Bolo", "Peixe"]

// PERGUNTA Nº9
let questão9 = ["Qual é o seu medo?"]
let alternativas9 = ["Ser desligado", "Ficar sozinho", "Não ser lembrada", "Perder a velocidade"]

// PERGUNTA Nº10
let questão10 = ["Qual é o seu tipo de música favorita?"]
let alternativas10 = ["Canções infantis", "Rock", "Música alegre", "Música de pirata"]
//---------------------------//
