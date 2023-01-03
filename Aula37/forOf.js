const nome = 'Luiz Otávio';

for (const valor of nome) {
    console.log(valor)
}

nome.forEach(function (valor, indice) {
    console.log(valor, indice)
});
