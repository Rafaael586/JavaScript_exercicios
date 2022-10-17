function controllerValor() {
    var maca = parseFloat(document.getElementById("maca").value);

    var resposta = calcular(maca);
    saidaDados("R$ " + resposta);
}

function calcular(maca = 0) {
    var maca1 = maca * 0.30;
    var maca2 = maca * 0.25;

    if (maca < 12) {
        return maca1
    }
    else {
        return maca2
    }


}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}