function calcularTabuada() {

    let numero = Number(document.getElementById("numero").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {

        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";

    }

    document.getElementById("resultado").innerHTML =
        "<div class='alert alert-success'>" +
        "<h4>Tabuada do " + numero + "</h4>" +
        resultado +
        "</div>";
}