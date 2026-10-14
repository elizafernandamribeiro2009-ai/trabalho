let produtos = [
    "Sensor",
    "Arduino",
    "LED",
    "Servo Motor",
    "Protoboard"
];

let lista = "<h2>Produtos disponíveis</h2>";

for (let i = 0; i < produtos.length; i++) {
    lista += (i + 1) + " - " + produtos[i] + "<br>";
}

document.getElementById("produtos").innerHTML = lista;


function fazerPedido() {

    let opcao = Number(document.getElementById("opcao").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let produto;
    let preco;

    switch (opcao) {

        case 1:
            produto = "Sensor";
            preco = 25;
            break;

        case 2:
            produto = "Arduino";
            preco = 75;
            break;

        case 3:
            produto = "LED";
            preco = 3;
            break;

        case 4:
            produto = "Servo Motor";
            preco = 35;
            break;

        case 5:
            produto = "Protoboard";
            preco = 20;
            break;

        default:
            produto = "Produto inválido";
            preco = 0;
    }

    let subtotal = preco * quantidade;

    let desconto;

    if (subtotal >= 100) {
        desconto = subtotal * 0.10;
    } else {
        desconto = 0;
    }

    let total = subtotal - desconto;

    document.getElementById("resultado").innerHTML =
        "<div class='alert alert-success'>" +
        "<h2>Pedido</h2>" +
        "<strong>Produto:</strong> " + produto + "<br>" +
        "<strong>Quantidade:</strong> " + quantidade + "<br>" +
        "<strong>Preço unitário:</strong> R$ " + preco.toFixed(2) + "<br>" +
        "<strong>Subtotal:</strong> R$ " + subtotal.toFixed(2) + "<br>" +
        "<strong>Desconto:</strong> R$ " + desconto.toFixed(2) + "<br>" +
        "<strong>Total:</strong> R$ " + total.toFixed(2) +
        "</div>";
}