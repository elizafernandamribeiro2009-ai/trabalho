function calcularSoma() {
    // Captura o valor digitado pelo utilizador no HTML
    let limite = Number(document.getElementById("limite").value);
    
    // Validação caso o campo esteja vazio ou com valor inválido
    if (!limite || limite <= 0) {
        document.getElementById("resultado").innerHTML = 
            "<div class='alert alert-warning'>Por favor, digite um número válido maior que 0.</div>";
        return;
    }

    let soma = 0;
    let quantidade = 0;

    // Laço for idêntico ao seu código original
    for (let i = 1; i <= limite; i++) {
        soma = soma + i;
        quantidade++;
    }

    let media = soma / quantidade;

    // Exibição do resultado na página
    document.getElementById("resultado").innerHTML =
        "<div class='alert alert-success'>" +
        "<strong>Limite:</strong> " + limite + "<br>" +
        "<strong>Soma:</strong> " + soma + "<br>" +
        "<strong>Quantidade:</strong> " + quantidade + "<br>" +
        "<strong>Média:</strong> " + media.toFixed(2) +
        "</div>";
}