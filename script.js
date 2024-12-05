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
