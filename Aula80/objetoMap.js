const pessoas = [
    {id: 3, nome: 'Jessé'},
    {id: 2, nome: 'Erica'},
    {id: 1, nome: 'Willy'}
];

/*
const novasPessoas = {};
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas.get(1));