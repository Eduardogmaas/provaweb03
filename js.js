var numeros = [];

function adicionarNumero() {
    var inputNumero = document.getElementById("inNumero");
    var numero = parseInt(inputNumero.value);

    if (!isNaN(numero)) {
        numeros.push(numero);
        numeros.sort(function(a, b) {
            return a - b;
        });

        atualizarLista();
        inputNumero.value = "";
    } else {
        alert("Digite um número válido.");
    }
}

function atualizarLista() {
    var lista = document.getElementById("numeroLista");
    lista.innerHTML = "";

    for (var i = 0; i < numeros.length; i++) {
        var item = document.createElement("li");
        item.textContent = numeros[i];
        lista.appendChild(item);
    }
}
