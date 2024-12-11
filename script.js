let contFreddy = 0;
let contBonnie = 0;
let contChica = 0;
let contFoxy = 0;
let totalRespostas = 0; // Nova variável para armazenar o total de respostas
let indiceAtual = 0; // Variável para armazenar o índice da pergunta atual

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
    quizContainer.innerHTML = ''; // Limpa o conteúdo anterior

    let item = quizData[indiceAtual]; // Obtém a pergunta atual
    let container1 = criarElemento('div', ['container1']);

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

    container1.appendChild(pergunta);
    container1.appendChild(container2);
    quizContainer.appendChild(container1);

    // Criar e adicionar o botão "Avançar"
    let botaoAvancar = criarElemento('button', ['avancar-button'], { id: 'botao-avancar' });
    botaoAvancar.textContent = 'Avançar';
    botaoAvancar.addEventListener('click', () => {
        if (indiceAtual < quizData.length - 1) {
            contagem(); // Contar as respostas antes de mudar a pergunta
            indiceAtual++; // Avança para a próxima pergunta
            gerarQuiz(quizData); // Gera a próxima pergunta
        } else {
            contagem(); // Contar as respostas na última pergunta
            resultado(); // Calcula os resultados
            exibirResultado(); // Exibe o resultado
        }
    });
    quizContainer.appendChild(botaoAvancar);
}

function contagem() {
    let radios = document.querySelectorAll("input[type='radio']");
    radios.forEach(element => {
        if (element.checked) {
            totalRespostas++; // Aumenta o total de respostas sempre que uma é selecionada
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
    // Calcular porcentagens
    let percFreddy = (contFreddy / totalRespostas) * 100;
    let percBonnie = (contBonnie / totalRespostas) * 100;
    let percChica = (contChica / totalRespostas) * 100;
    let percFoxy = (contFoxy / totalRespostas) * 100;

    // Salvar as porcentagens no localStorage
    localStorage.setItem("freddy", percFreddy);
    localStorage.setItem("bonnie", percBonnie);
    localStorage.setItem("chica", percChica);
    localStorage.setItem("foxy", percFoxy);
}

function exibirResultado() {
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Limpa o conteúdo anterior

    let resultadoDiv = criarElemento('div', ['resultado']);
    let resultadoTexto = `Resultados:<br>
        Freddy: ${contFreddy}<br>
        Bonnie: ${contBonnie}<br>
        Chica: ${contChica}<br>
        Foxy: ${contFoxy}`;

    resultadoDiv.innerHTML = resultadoTexto;
    quizContainer.appendChild(resultadoDiv);
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
        window.location.href = pagina + ".html";  // Redireciona para a página de personagem
    }, 5000);
}

window.onload = carregarQuizData;
