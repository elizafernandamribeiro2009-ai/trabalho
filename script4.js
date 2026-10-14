function classificarIdade() {
    const nome = document.getElementById("nome").value;
    const inputIdade = document.getElementById("idade").value;
    const resultadoDiv = document.getElementById("resultado");

    // Validação de campos vazios
    if (nome === "" || inputIdade === "") {
        resultadoDiv.innerHTML = "<div class='alert alert-warning'>Por favor, preencha o nome e a idade.</div>";
        return;
    }

    const idade = Number(inputIdade);

    // Validação de número negativo
    if (idade < 0) {
        resultadoDiv.innerHTML = "<div class='alert alert-danger'>Por favor, digite uma idade válida (maior ou igual a 0).</div>";
        return;
    }

    let classificacao = "";

    // Estrutura condicional para classificação
    if (idade <= 12) {
        classificacao = "Criança";
    } else if (idade <= 17) {
        classificacao = "Adolescente";
    } else if (idade <= 59) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    // Exibição do resultado dinâmico
    resultadoDiv.innerHTML = 
        `<div class='alert alert-success'>` +
            `<h4 class='alert-heading h5 mb-3'>Resultado da Classificação</h4>` +
            `<p class='mb-1'><strong>Nome:</strong> ${nome}</p>` +
            `<p class='mb-1'><strong>Idade:</strong> ${idade} ano(s)</p>` +
            `<p class='mb-0'><strong>Classificação:</strong> ${classificacao}</p>` +
        `</div>`;
}