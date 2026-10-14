function contagemRegressiva() {
    const inputNumero = document.getElementById("numero").value;
    const resultadoDiv = document.getElementById("resultado");

    // Validação para campo vazio
    if (inputNumero === "") {
        resultadoDiv.innerHTML = "<div class='alert alert-warning'>Por favor, informe um número inicial.</div>";
        return;
    }

    // Variável 'contador' mutável para decrementar no laço while
    let contador = Number(inputNumero);

    // Validação para números menores que 1
    if (contador < 1) {
        resultadoDiv.innerHTML = "<div class='alert alert-danger'>Por favor, informe um número maior ou igual a 1.</div>";
        return;
    }

    let quantidade = 0;
    let sequencia = [];

    // Laço while para realizar a contagem regressiva até 1
    while (contador >= 1) {
        sequencia.push(contador);
        quantidade++;
        contador--;
    }

    // Exibição do resultado
    resultadoDiv.innerHTML = 
        `<div class='alert alert-success'>` +
            `<h4 class='alert-heading h5 mb-3'>Resultado da Contagem</h4>` +
            `<p class='mb-2'><strong>Sequência:</strong> ${sequencia.join(" ➔ ")}</p>` +
            `<hr>` +
            `<p class='mb-0'><strong>Quantidade de números processados:</strong> ${quantidade}</p>` +
        `</div>`;
}