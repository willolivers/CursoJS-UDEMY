//Filter -> sempre retorna um array com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor=> valor > 10);

//console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 32},
    { nome: 'Leticia', idade: 45},
    { nome: 'Rosana', idade: 16},
    { nome: 'Wallace', idade: 84},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50)

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})

console.log(nomeTerminaComA)

