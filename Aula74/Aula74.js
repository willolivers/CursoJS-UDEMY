// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.___proto___

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}
// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtra
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtra
const data = new Date() // <- Date = Função construtora

console.log(pessoa1);
console.log(data);