function controllerGols() {
    var gremio = parseInt(document.getElementById("gremio").value);
    var inter = parseInt(document.getElementById("inter").value);

    var resposta = decidirVencedor(gremio, inter)
    saidaDados(resposta)
}

function decidirVencedor(gremio = 0, inter = 0) {
    if (gremio == inter) {
        return "EMPATE"
    }
    if (gremio > inter) {
        return "GREMIO FOI O VENCEDOR"
    }
    if (gremio < inter) {
        return "INTERNACIONAL FOI O VENCEDOR"
    }
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}
