var global_senhaValida = "1234";

function controllerAcesso() {
    var senha = document.getElementById("senha").value;

    var retornoValidacao = validaAcesso(senha);

    saidaTexto(retornoValidacao);
}

function validaAcesso(senha = "") {
    if (senha == global_senhaValida) {
        return "ACESSO PERMITIDO;"
    }
    else {
        return "ACESSO NEGADO";
    }
}

function saidaTexto(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}