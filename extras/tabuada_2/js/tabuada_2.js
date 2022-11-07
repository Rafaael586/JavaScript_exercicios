function controllerTabuada() {
    let tab1 = parseInt(document.querySelector("#numero1").value);
    let tab2 = parseInt(document.querySelector("#numero2").value);
    let resultado = montarTabuada(tab1, tab2);
    saidaDados(resultado)
}

function saidaDados(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function montarTabuada(tab1 = 0, tab2 = 0) {
    let tabuadas = [];
    let tabuada = "";

    for (let indexT = tab1; indexT <= tab2; indexT++) {
        for (let index = 0; index <= 10; index++) {
            tabuada += indexT + "X" + index + "=" + (indexT * index) + "<br>"
        }
        tabuadas.push(tabuada);
        tabuada = ""
    }

    return tabuadas;

}