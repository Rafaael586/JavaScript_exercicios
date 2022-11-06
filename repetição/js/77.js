let media = 0;
let cont = 0;

!(function () {
})();

function saidaResultado(texto) {
    document.querySelector("#saidaResultado").innerHTML = texto;
}

function controllerIdade() {
    //let idade = parseInt(document.querySelector("#idade").value);
    saidaResultado("Media: " + media);
}

function mediaIdadeOP1(idade) {
    cont++;//cont = cont+1;
    media = (media + idade) / cont;
    mostracont();
}

function mostracont(cont) {
    document.querySelector("#contador").innerHTML = "<b>" + cont + "</b>"
}