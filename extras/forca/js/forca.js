!function () {
    var palavra = sorteioPalavra();
    var letras = contarLetraPalavra(palavra)

    montarletrasTela(letras);
}();



function sorteioPalavra() {
    var palavras = ["casa", "java", "números", "aluno", "constituição"]
    var index = Math.floor(Math.random() * palavras.length);

    return palavras[index];
}

function contarLetrasPalavra(palavra = "") {
    var contLetras = palavra.length;
    return contLetras;
}

// .......................................................................

function montarletrasTela(quantletras = 0) {
    var letras = ""

    for (i = 1; i <= quantletras; i++) {
        letras += "<div> _ </div>"
    }
    document.getElementById("palavra_sorteada").innerHTML = letras
}