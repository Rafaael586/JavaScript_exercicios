function montarTabuada(numero = 0) {
    let tabuada = "";
    for (let index = 1; index <= 10; index++) {
        tabuada += numero + "X" + index + "=" + (numero * index) + "<br>";
    }
    return tabuada;
}

