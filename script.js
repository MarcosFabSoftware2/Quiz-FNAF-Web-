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
    localStorage.setItem("pidgeotto", contFoxy);

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
        pagina = "pidgeotto"
    }

    setTimeout(() => {
        window.open(pagina + ".html")
    }, 5000);
}