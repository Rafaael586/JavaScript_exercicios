!(function () {
    let contagem = contarAte();
    saidaTexto("lista: " + contagem[0]);
})()

function contarAte() {
    let resp = "";
    let numerosImpares = 0;

    for (var i = 101; i <= 200; i = i + 2) {

        resp += i + ", ";


    } return [resp, numerosImpares];
}




function saidaTexto(texto) {
    document.getElementById("saidaResultado").innerHTML = texto;
}