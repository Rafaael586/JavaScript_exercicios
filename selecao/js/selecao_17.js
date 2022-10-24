function controllercalculo() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var operacao = parseInt(document.getElementById("operacao").value);
    var valor2 = parseInt(document.getElementById("valor1").value);

    var resultado = calculoResultado(valor1, valor2, operacao);
    saidaDados("resultado" + resultado)
}

function saidaDados(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}


function calculoResultado(valor1 = 0, operacao = 0, valor2 = 0,) {
    if (operacao == 1) {
        return valor1 + valor2;
    }
    else if (operacao == 2) {
        return valor1 - valor2;
    }
    else if (operacao == 3) {
        return valor1 / valor2;
    }
    else if (operacao == 4) {
        return valor1 * valor2;
    }
    return null;
} 
