var aluno = {
    nome_do_aluno: Text,
    nota1: 0,
    nota2: 0,
    nota3: 0,
    nota4: 0,
    media: 0,
    resultado: 0
}

!(function () {
    let alunos = listDadosAluno();
    montarTabela(alunos);
})()

function controllerNotas() {
    aluno.nome_do_aluno = parseFloat(document.getElementById("nome_do_aluno").value);
    aluno.nota1 = parseFloat(document.getElementById("nota-1").value);
    aluno.nota2 = parseFloat(document.getElementById("nota-2").value);
    aluno.nota3 = parseFloat(document.getElementById("nota-3").value);
    aluno.nota4 = parseFloat(document.getElementById("nota-4").value);
    aluno.media = calculoMedia(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.resultado = verificarSituacaoAluno(aluno.media);

    mostrarResultado(aluno.resultado, aluno.media);

    addDadosAluno(aluno);
    let alunos = listDadosAluno();
    montarTabela(alunos);
}

function calculoMedia(avaliacao1 = 0, avaliacao2 = 0, avaliacao3 = 0, avaliacao4 = 0) {
    return (avaliacao1 + avaliacao2 + avaliacao3 + avaliacao4) / 4
}

function verificarSituacaoAluno(media = 0) {
    if (media >= 5) {  //ULA -> unidade logica aritmética  
        return true;
    }
    return false;
}

function mostrarResultado(resultado = false, media = 0) {
    if (resultado) {
        document.querySelector("#saidaResultado").innerHTML = "Aprovado -> media: " + media.toFixed(2);
    } else {
        document.querySelector("#saidaResultado").innerHTML = "Reprovado -> media: " + media.toFixed(2);
    }
}

function addDadosAluno(obj = {}) {
    let dadosBanco = JSON.parse(localStorage.getItem("alunos"));
    if (!dadosBanco) {
        dadosBanco = [];
    }
    dadosBanco.push(obj);

    let jsonObj = JSON.stringify(dadosBanco);

    localStorage.setItem("alunos", jsonObj);
}

function listDadosAluno() {
    let dadosBanco = JSON.parse(localStorage.getItem("alunos"));
    if (!dadosBanco) {
        dadosBanco = [];
    }
    return dadosBanco;
}

function montarTabela(listDados = []) {
    let tabela = "<table class='table'>";

    tabela += "<tr>";
    tabela += "<th>nome_do_aluno</th>";
    tabela += "<th>Nota 1</th>";
    tabela += "<th>Nota 2</th>";
    tabela += "<th>Nota 3</th>";
    tabela += "<th>Nota 4</th>";
    tabela += "<th>Resultado</th>";
    tabela += "<th>Média</th>";
    tabela += "</tr>";

    for (var i = 0; i < listDados.length; i++) {
        tabela += "<tr>";
        tabela += "<td>" + listDados[i].nome_do_aluno + "</td>";
        tabela += "<td>" + listDados[i].nota1 + "</td>";
        tabela += "<td>" + listDados[i].nota2 + "</td>";
        tabela += "<td>" + listDados[i].nota3 + "</td>";
        tabela += "<td>" + listDados[i].nota4 + "</td>";
        tabela += "<td>" + listDados[i].resultado + "</td>";
        tabela += "<td>" + listDados[i].media + "</td>";
        tabela += "</tr>";
    }

    tabela += "</table>";

    document.querySelector("#saidaTabela").innerHTML = tabela;
}