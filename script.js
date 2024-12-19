let contFreddy = 0;
let contBonnie = 0;
let contChica = 0;
let contFoxy = 0;
let totalRespostas = 0;
let indiceAtual = 0;

function criarElemento(tag, classes = [], atributos = {}) {
    let elemento = document.createElement(tag);
    classes.forEach(classe => elemento.classList.add(classe));
    Object.entries(atributos).forEach(([atributo, valor]) => elemento.setAttribute(atributo, valor));
    return elemento;
}

async function carregarQuizData() {
    try {
        let response = await fetch('quizData.json');
        let data = await response.json();
        gerarQuiz(data);
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}

function gerarQuiz(quizData) {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    let item = quizData[indiceAtual];
    let container1 = criarElemento('div', ['container1']);
    let containerRespostas = criarElemento('div', ['containerRespostas']);
    let pergunta = criarElemento('h2', [], {});
    pergunta.textContent = item.pergunta;

    let container2 = criarElemento('div', ['container2']);

    item.respostas.forEach(resposta => {
        let label = criarElemento('label');
        let input = criarElemento('input', [], { type: 'radio', name: `pergunta${indiceAtual + 1}`, value: resposta.toLowerCase() });
        let divBox = criarElemento('div', ['front-end', 'box', resposta.toLowerCase()]);
        let h2Texto = criarElemento('h2', [`${resposta.toLowerCase()}Texto`], {});
        h2Texto.textContent = resposta;

        label.appendChild(input);
        label.appendChild(divBox);
        label.appendChild(h2Texto);
        container2.appendChild(label);
    });
    container1.appendChild(containerRespostas)
    containerRespostas.appendChild(pergunta);
    containerRespostas.appendChild(container2);
    quizContainer.appendChild(containerRespostas);

    let containerBotaoAvancar = criarElemento('div', ['containerAvancarButton', 'containerBotaoAvancar']);

    let botaoAvancar = criarElemento('button', ['avancarButton'], { id: 'botao-avancar' });
    botaoAvancar.textContent = 'Avançar';
    botaoAvancar.addEventListener('click', () => {
        if (indiceAtual < quizData.length - 1) {
            contagem();
            indiceAtual++;
            gerarQuiz(quizData);
        } else {
            contagem()
            resultado();
            redirecionamento();
        }
    });
    quizContainer.appendChild(containerBotaoAvancar)
    containerBotaoAvancar.appendChild(botaoAvancar)
}

function contagem() {
    let radios = document.querySelectorAll("input[type='radio']");
    radios.forEach(element => {
        if (element.checked) {
            totalRespostas++;
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
    let percFreddy = (contFreddy / totalRespostas) * 100;
    let percBonnie = (contBonnie / totalRespostas) * 100;
    let percChica = (contChica / totalRespostas) * 100;
    let percFoxy = (contFoxy / totalRespostas) * 100;

    localStorage.setItem("freddy", percFreddy);
    localStorage.setItem("bonnie", percBonnie);
    localStorage.setItem("chica", percChica);
    localStorage.setItem("foxy", percFoxy);
}

function Maior() {
    let maior = Math.max(contFreddy, contBonnie, contChica, contFoxy);
    let paginas = [];

    if (contFreddy === maior) {
        paginas.push("freddy");
    }
    if (contBonnie === maior) {
        paginas.push("bonnie");
    }
    if (contChica === maior) {
        paginas.push("chica");
    }
    if (contFoxy === maior) {
        paginas.push("foxy");
    }

    if (paginas.length > 1) {
        return "goldenFreddy";
    }

    return paginas[0];
}


function redirecionamento() {
    let pagina = Maior();
    setTimeout(() => {
        window.location.href = pagina + ".html";
    }, 5000);
}

window.onload = carregarQuizData;
