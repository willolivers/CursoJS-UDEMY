/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otavio'
pessoa1.idade = 23

pessoa1.falaNome = function(){
    return(`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

for (let chave in pessoa1) {
    console.log(chave)
}
*/

//FACTORY FUNCTION IN OBJECT
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() { //propriedade nova
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Jessé', 'Oliveira');
console.log(p1.nomeCompleto)
*/

//CONSTRUCTOR FUNCTION

function Pessoa(nome, sobrenome) { 
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Jessé', 'Oliveira')
console.log(p1)


