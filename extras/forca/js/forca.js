!function () {
    var acertos = 0;
    var tentativas = 6;
    var letras_digitadas = "";
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

function verfTerminoJogo(quantletras = 0, tentativas = 0, acertos = 0) {
    if (acertos == quantletras) {
        return true;
    }
    else if (tentativas == 0) {
        return true;
    }
    else {
        return false;
    }
}

function entrarLetra(objeto) {
    var letras = objeto.value;
    objeto.value = "";
    letra_digitada = letras;
}

// .......................................................................


function montarletrasTela(quantletras = 0) {
    var letras = ""

    for (i = 1; i <= quantletras; i++) {
        letras += "<div> _ </div>"
    }
    document.getElementById("palavra_sorteada").innerHTML = letras
}