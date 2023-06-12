// FACTORY FUNCTION (Funcao fabrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Getter (para obter o valor do metodo)
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function (assunto) {
            return `${nome} está ${assunto}`
        },
        altura: a,
        peso: p
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)