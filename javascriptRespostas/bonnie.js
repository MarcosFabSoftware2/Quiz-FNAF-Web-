function exibirResultadoBonnie() {
    let textoResposta = document.querySelector(".textoResposta");

    let bonnie = parseFloat(localStorage.getItem("bonnie")) || 0;
    textoResposta.textContent = `Você é ${bonnie.toFixed(2)}% Bonnie`;
}

document.addEventListener('DOMContentLoaded', function() {
    exibirResultadoBonnie();
});
