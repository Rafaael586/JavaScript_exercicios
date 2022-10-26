!(function () {
    let contagem = contarMultiplos();
    saidaTexto("lista: " + contagem);
})()

function contarMultiplos() {
    let resp = "";
    let multiplo = 0;

    for (var i = 0; i <= 100; i++) {
        for (var y = 10; y <= 100; y = y + 10) {

            resp += i + y + ", ";

            if (y < 101) {

                multiplo += "Multiplo de 10:" + y;
            }

        }
        return [resp, multiplo]
    }


}


function saidaTexto(texto) {
    document.getElementById("saidaResultado").innerHTML = texto;
}