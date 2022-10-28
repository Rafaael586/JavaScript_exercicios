var Pessoas = {
    nome: "",
    Idade: "",
}

!(function () {
    let Pessoas = controllerDadePessoas();
    montarTabela(Pessoas);
})()

function controllerIdade() {
    Pessoas.nome = document.getElementById("nome").value;
    Pessoas.Idade = document.getElementById("Idade").value;


    mostrarResultado(Pessoas.media);

    addIdadePessoas(Pessoas);
    limparForm(0);
    let Pessoas = controllerDadePessoas();
    montarTabela(pessoa);
}
function addIdadePessoas(obj = {}) {
    let dadosBanco = JSON.parse(localStorage.getItem("pessoa"));
    if (!dadosBanco) {
        dadosBanco = [];
    }
    dadosBanco.push(obj);

    let jsonObj = JSON.stringify(dadosBanco);

    localStorage.setItem("pessoa", jsonObj);
}

function controllerDadePessoas() {
    let dadosBanco = JSON.parse(localStorage.getItem("pessoa"));
    if (!dadosBanco) {
        dadosBanco = [];
    }
    return dadosBanco;
}

function montarTabela(listDados = []) {
    let tabela = "<table class='table'>";

    tabela += "<tr>";
    tabela += "<th>Nome</th>";
    tabela += "<th>Idade</th>";
    tabela += "</tr>";

    for (var i = 0; i < listDados.length; i++) {//i = i + 1
        tabela += "<tr>";
        tabela += "<td>" + listDados[i].nome + "</td>";
        tabela += "<td>" + listDados[i].Idade + "</td>";

        tabela += "</tr>";
    }

    tabela += "</table>";

    document.querySelector("#saidaTabela").innerHTML = tabela;
}

function limparForm(index) {
    let form = document.getElementsByTagName("form");
    console.log(form);
    form[index].reset();

}