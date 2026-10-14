function verificarSituacao() {

    const media = Number(document.getElementById("media").value);
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerHTML =
        "<div class='alert alert-success'>" +
        "<strong>Média:</strong> " + media + "<br>" +
        "<strong>Situação:</strong> " + situacao +
        "</div>";
}