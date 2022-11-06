function controllerTabuada() {
    let numero = parseInt(document.querySelector("#numero").value);
    let resultado = montarTabuada(numero);
    saidaDados(resultado)
}

function saidaDados(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function montarTabuada(numero = 0) {
    let tabuada = "";
    for (let index = 1; index <= 10; index++) {
        tabuada += numero + "X" + index + "=" + (numero * index) + "<br>";
    }
    return tabuada;
}

