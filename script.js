function calculateIMC() {
    var peso = parseFloat(document.getElementById("peso").value); // Alterado de weight para peso
    var altura = parseFloat(document.getElementById("altura").value); // Alterado de height para altura

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("result").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    altura = altura / 100; // Convertendo altura de cm para metros

    var imc = peso / (altura * altura);
    var message = "Seu IMC é " + imc.toFixed(2) + ". ";

    if (imc < 18.5) {
        message += "Você está abaixo do peso.";
    } else if (imc < 24.9) {
        message += "Você está com o peso normal.";
    } else if (imc < 29.9) {
        message += "Você está acima do peso.";
    } else {
        message += "Você está obeso.";
    }

    document.getElementById("result").innerHTML = message;
}
