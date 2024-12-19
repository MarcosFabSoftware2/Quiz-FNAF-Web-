// resultadoChica.js
function exibirResultadoGoldenFreddy() {
    let textoResposta = document.querySelector(".textoResposta");

    // Obtém as porcentagens de cada personagem do localStorage
    let freddy = parseFloat(localStorage.getItem("freddy")) || 0;
    let bonnie = parseFloat(localStorage.getItem("bonnie")) || 0;
    let chica = parseFloat(localStorage.getItem("chica")) || 0;
    let foxy = parseFloat(localStorage.getItem("foxy")) || 0;

    // Cria um objeto com os resultados
    let resultados = {
        Freddy: freddy,
        Bonnie: bonnie,
        Chica: chica,
        Foxy: foxy
    };

    // Encontra a maior porcentagem
    let maxPorcentagem = Math.max(freddy, bonnie, chica, foxy);

    // Filtra os personagens que estão empatados
    let empatados = Object.entries(resultados)
        .filter(([_, porcentagem]) => porcentagem === maxPorcentagem)
        .map(([personagem, porcentagem]) => `${porcentagem.toFixed(2)}% ${personagem}`);

    // Exibe o resultado
    textoResposta.textContent = `Você é ${empatados.join(' e ')}.`;
}

document.addEventListener('DOMContentLoaded', function() {
    exibirResultadoGoldenFreddy();
});
