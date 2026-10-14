function analisarNumeros() {

    const texto = document.getElementById("numeros").value;

    let numeros = texto.split(",").map(Number);

    let pares = 0;
    let impares = 0;
    let soma = 0;

    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {

        let numero = numeros[i];

        soma = soma + numero;

        if (numero % 2 == 0) {
            pares++;
        } else {
            impares++;
        }

        if (numero > maior) {
            maior = numero;
        }

        if (numero < menor) {
            menor = numero;
        }
    }

    document.getElementById("resultado").innerHTML =
        "<div class='alert alert-success'>" +
        "<strong>Números:</strong> " + numeros.join(", ") + "<br>" +
        "<strong>Quantidade:</strong> " + numeros.length + "<br>" +
        "<strong>Pares:</strong> " + pares + "<br>" +
        "<strong>Ímpares:</strong> " + impares + "<br>" +
        "<strong>Soma:</strong> " + soma + "<br>" +
        "<strong>Maior:</strong> " + maior + "<br>" +
        "<strong>Menor:</strong> " + menor +
        "</div>";
}