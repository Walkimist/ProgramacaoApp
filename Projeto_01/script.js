var nome = prompt("Da nome")
var idade = prompt("Quantos anos")
var curso = prompt("Qual curso")
var imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcff_AcqQ7Cu96MPgZulXRlzpjmdExM3TQQ&s'
var notas = [4]

var soma = 0
for (let i = 0; i < 4; i++) {
    notas[i] = parseFloat(prompt("nota " + (i+1)))
    soma += notas[i]
}

media = soma/4
console.log(media)

document.write(`<h1>Iai ${nome}</h1>`)
document.write(`<p>Idade: ${idade}</p>`)
document.write(`<p>Curso: ${curso}</p>`)
document.write(`<p>Média: ${media}</p>`)
document.write(`<img src=${imgUrl} alt="caio se ele fosse real">`)
