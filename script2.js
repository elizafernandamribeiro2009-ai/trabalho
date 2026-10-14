function calcularMedia() {
    const nome = document.getElementById("nome").value;
    const inputNota1 = document.getElementById("nota1").value;
    const inputNota2 = document.getElementById("nota2").value;
    const inputNota3 = document.getElementById("nota3").value;
    const resultadoDiv = document.getElementById("resultado");

    // Validação de campos vazios
    if (nome === "" || inputNota1 === "" || inputNota2 === "" || inputNota3 === "") {
        resultadoDiv.innerHTML = "<div class='alert alert-warning'>Por favor, preencha o nome e todas as três notas.</div>";
        return;
    }

    // Conversão dos valores para número decimal
    const nota1 = parseFloat(inputNota1);
    const nota2 = parseFloat(inputNota2);
    const nota3 = parseFloat(inputNota3);

    // Cálculos
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    const maior = Math.max(nota1, nota2, nota3);
    const menor = Math.min(nota1, nota2, nota3);

    // Exibição do resultado
    resultadoDiv.innerHTML = 
        `<div class='alert alert-success'>` +
            `<h4 class='alert-heading mb-3'>Resultado - Aluno(a): ${nome}</h4>` +
            `<p class='mb-1'><strong>Notas digitadas:</strong> ${nota1} | ${nota2} | ${nota3}</p>` +
            `<p class='mb-1'><strong>Soma total:</strong> ${soma.toFixed(2)}</p>` +
            `<p class='mb-1'><strong>Média final:</strong> ${media.toFixed(2)}</p>` +
            `<p class='mb-1'><strong>Maior nota:</strong> ${maior}</p>` +
            `<p class='mb-0'><strong>Menor nota:</strong> ${menor}</p>` +
        `</div>`;
}