let pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 23,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()





/**
 *  function criaPessoa(nome, sobrenome, idade) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        };
    }

    let pessoa1 = criaPessoa('Luiz', 'Oliveira', 23)
    let pessoa2 = criaPessoa('Junior', 'Silva', 45)
    let pessoa3 = criaPessoa('Jorge', 'Santos', 15)
    let pessoa4 = criaPessoa('Clara', 'Costa', 67)
    let pessoa5 = criaPessoa('Maria', 'Silva', 41)

    console.log(pessoa1.nome, pessoa2.nome)
 
 */



/*
const pessoa1 = {
    nome: 'João',
    sobrenome: 'Oliveira',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 43
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
*/