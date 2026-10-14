function mostrarSetor() {

    const opcao = Number(document.getElementById("opcao").value);
    let mensagem;

    switch (opcao) {

        case 1:
            mensagem = "Administração";
            break;

        case 2:
            mensagem = "Automação";
            break;

        case 3:
            mensagem = "Mineração";
            break;

        case 4:
            mensagem = "Metalurgia";
            break;

        case 5:
            mensagem = "Edificações";
            break;

        default:
            mensagem = "Opção inválida";
    }

    document.getElementById("resultado").innerHTML =
        "<div class='alert alert-success'>" +
        "<strong>Opção escolhida:</strong> " + opcao + "<br>" +
        "<strong>Setor:</strong> " + mensagem +
        "</div>";
}