function printarImc() { //Função chamada pelo html para executar o programa de calcular imc
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    alert("Seu IMC é de: " + calcularImc(peso, altura))
}

function printarTemperatura() { //Função chamada pelo html para executar o programa de converter temperatura
    const temperatura = document.getElementById("temperatura").value
    const origem = document.getElementById("origem").value
    const destino = document.getElementById("destino").value
    alert("A temperatura " + temperatura + " em " + destino + " é igual a " + conversorTemperatura(Number(temperatura), origem, destino))
}

function printarNumeros() { //Função chamada pelo html para executar o programa de gerar números
    const quantidade = document.getElementById("quantidade").value
    alert("Os " + quantidade + " numeros gerados foram:\n" + gerarNumerosLoteria(quantidade).join(', '))
}

//Programa 1
function calcularImc(peso, altura) {
    return peso/(altura*altura)
}

//Programa 2
function conversorTemperatura(temperatura, unidadeOrigem, unidadeDestino) {
    if (unidadeOrigem === "celsius") {
        if (unidadeDestino === "fahrenheit") {
            return (temperatura * 9/5) + 32;
        }
        if (unidadeDestino === "kelvin") {
            return temperatura + 273.15;
        }
        if (unidadeDestino === "celsius") {
            return temperatura;
        }
    }
    
    if (unidadeOrigem === "fahrenheit") {
        if (unidadeDestino === "celsius") {
            return (temperatura - 32) * 5/9;
        }
        if (unidadeDestino === "kelvin") {
            return (temperatura - 32) * 5/9 + 273.15;
        }
        if (unidadeDestino === "fahrenheit") {
            return temperatura;
        }
    }
    
    if (unidadeOrigem === "kelvin") {
        if (unidadeDestino === "celsius") {
            return temperatura - 273.15;
        }
        if (unidadeDestino === "fahrenheit") {
            return (temperatura - 273.15) * 9/5 + 32;
        }
        if (unidadeDestino === "kelvin") {
            return temperatura;
        }
    }
}


//Programa 3
function gerarNumerosLoteria(quantidade) {
    var numeros = []
    for (var i = 0; i < quantidade; i++) {
        var numeroGerado = Math.ceil(Math.random() * 60)
        if (numeros.includes(numeroGerado)) {
            while (!numeros.includes(numeroGerado)) {
                numeroGerado = Math.ceil(Math.random() * 60)
            }
        }
        numeros.push(numeroGerado)
    }
    return numeros
}
