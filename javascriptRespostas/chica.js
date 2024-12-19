function exibirResultadoChica() {
    let textoResposta = document.querySelector(".textoResposta");

    let chica = parseFloat(localStorage.getItem("chica")) || 0;
    textoResposta.textContent = `Você é ${chica.toFixed(2)}% Chica`;
}

document.addEventListener('DOMContentLoaded', function() {
    exibirResultadoChica();
});
