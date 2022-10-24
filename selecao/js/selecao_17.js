function controllercalculo() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var operacao = parseFloat(document.getElementById("operacao").value);
    var valor2 = parseFloat(document.getElementById("valor1").value);

    var error = validarcalc(valor1, operacao, valor2);
    if (error != "") {
        //alert(error);
        saidaDados("Erros: " + error)
        return;
    }

    var resultdado = calculoResultado(valor1, operacao, valor2,)

    saidaDados(resultdado);

}

function validarcalc(valor1, operacao, valor2) {
    var error = "";
    if (!valor1 || typeof valor1 != 'number') {
        error += "Verifique se tem apenas numeros(0-9) ou (.) no campo de valor 1!\n";
    }

    if (!operacao || typeof operacao != 'number') {
        error += "Verifique se existe apenas 1 numero de 1 a 4 no campo de operação!\n";
    }

    if (!valor2 || typeof valor2 != 'number') {
        error += "Verifique se tem apenas numeros(0-9) ou (.) no campo de valor 2!\n";
    }
    return error;

}

function calculoResultado(valor1 = 0, operacao = 0, valor2 = 0,) {
    if (operacao == 1) {
        return (valor1 + valor2)
    }
    else if (operacao == 2) {
        return (valor1 - valor2)
    }
    else if (operacao == 3) {
        return (valor1 / valor2)
    }
    else if (operacao == 4) {
        return (valor1 * valor2)
    }
    else {
        return "Error =Verifique se existe apenas 1 numero de 1 a 4 no campo de operação"
    }
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}