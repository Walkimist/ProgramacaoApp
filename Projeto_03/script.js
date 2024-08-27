const numeroMax = 10 // numero a ser gerado entre 1 e numeroMax
const quantidadeNumeros = 10 // quantos numeros a serem gerados

function escolherNumero(numeros) {
    let escolhido = Math.floor(Math.random() * numeros.length) //aleatorio dentro tamanho do array
    console.log('Todos os numeros: ' + numeros);
    console.log('Numero escolhido: ' + numeros[escolhido]);
}

let nums = []

for (let i = 0; i < quantidadeNumeros; i++) { // gera os numeros
    nums.push(Math.ceil(Math.random() * numeroMax))
}

escolherNumero(nums)