// Dobre os valores
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(valor => valor * 2)





















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

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({ idaide: obj.idade })) //Transformou em uma expressão

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }
    newObj.id = (indice + 35) * 10560;
    return newObj;
});

console.log(pessoas)
console.log(comIds)