(function () {
    controllerNumeros();
})()

function controllerNumeros() {
    let listaNumeros = contaNumeros();
    let listaMultiplos = contaMultiplos(listaNumeros);

    let template = "<div class='row'>";
    template += "<div class='col-6'";
    template += "   <p>" + listaNumeros.join(", ") + "</p>"
    template += "</div>";


    template += "<div class='col-6'>";
    template += "    <p>" + listaMultiplos.join(", ") + "</p>"
    template += "</div>";
    template += "</div>";

    saidaResultado(template);
}

function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function contaNumeros() {
    let listaNumeros = [];

    for (var index = 1; index <= 100; index++) {
        listaNumeros.push(index);
    }
    return listaNumeros;
}

function contaMultiplos(listaNumeros = []) {
    let listaMultiplos = [];

    for (var index = 0; index < listaNumeros.length; index++) {
        if (listaNumeros[index] % 10 == 0) {
            listaMultiplos.push(listaNumeros[index]);
        }
    }

    return listaMultiplos;
}