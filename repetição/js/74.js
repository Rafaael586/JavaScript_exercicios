(function () {
    controllerNumeros();
})()

function controllerNumeros() {
    saidaResultado("Resultado: " + contarMultiplos());
}

function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function contarMultiplos() {
    let result = "";

    for (var index = 1; index <= 100; index++) {
        if (index % 10 == 0) {
            result += index + "multiplo de 10:<br> "
        }
        result += index + "<br>"
    }
    return result;
}