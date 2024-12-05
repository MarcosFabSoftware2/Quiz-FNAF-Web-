function resultado() {
    let contFreddy = 0; 
    let contBonnie = 0;
    let contChica = 0;
    let contFoxy = 0;

    let radios = document.querySelectorAll("input[type='radio']");

    radios.forEach(element => {
        if(element.checked) {
            if(element.value == "freddy") {
                contFreddy++;
            }else if(element.value == "bonnie") {
                contBonnie++;
            }else if(element.value == "chica") {
                contChica++;
            }else if(element.value == "foxy"){
                contFoxy++;
            }
        }
    })

    let resultado = `Freddy = ${contFreddy}<br> Bonnie = ${contBonnie}<br> Chica = ${contChica}<br> Foxy = ${contFoxy}`;

    document.querySelector("#resultado").innerHTML = resultado;

    localStorage.setItem("freddy", contFreddy);
    localStorage.setItem("bonnie", contBonnie);
    localStorage.setItem("chica", contChica);
    localStorage.setItem("foxy", contFoxy);

    let maior = 0
    let pagina;

    if(contFreddy > maior) {
        pagina = "freddy"
    }

    if(contBonnie > maior) {
        pagina = "bonnie"
    }

    if(contChica > maior) {
        pagina = "chica"
    }

    if(contFoxy > maior) {
        pagina = "foxy"
    }

    setTimeout(() => {
        window.open(pagina + ".html")
    }, 5000);
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

