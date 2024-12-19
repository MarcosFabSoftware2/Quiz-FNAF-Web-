function exibirResultadoFoxy() {
    let textoResposta = document.querySelector(".textoResposta");

    let foxy = parseFloat(localStorage.getItem("foxy")) || 0;
    textoResposta.textContent = `Você é ${foxy.toFixed(2)}% Foxy`;
}

document.addEventListener('DOMContentLoaded', function() {
    exibirResultadoFoxy();
});
