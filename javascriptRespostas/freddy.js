function exibirResultadoFreddy() {
    let textoResposta = document.querySelector(".textoResposta");

    let freddy = parseFloat(localStorage.getItem("freddy")) || 0;
    textoResposta.textContent = `Você é ${freddy.toFixed(2)}% Freddy`;
}

document.addEventListener('DOMContentLoaded', function() {
    exibirResultadoFreddy();
});
