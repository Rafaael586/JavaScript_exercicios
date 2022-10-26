!(function () {
    let contagem = contarAte();
    saidaTexto("lista: " + contagem[0] + "<br>somatorio:" + contagem[1]);
})()

function contarAte() {
    let resp = "";
    let somapares = 0;
    for (var y = 1; y <= 3; y++) {
        for (var i = 100; i <= 200; i++) {

            resp += y + "." + i + ", ";

            if (i % 2 == 0) {
                somapares += i;
            }
        }
    }


    return [resp, somapares];
}
function saidaTexto(texto) {
    document.getElementById("saidaResultado").innerHTML = texto;
}