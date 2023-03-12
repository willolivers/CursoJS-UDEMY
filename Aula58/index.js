// Função contrutoras
function Pessoa(nome, sobrenome) {
    // Atributos privados
    const ID = 123456
    const metodoInterno = () => {

    }

    //Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () =>{
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa ('Jessé', 'Oliveira')
const p2 = new Pessoa ('Erica', 'Oliveira')

p1.metodo()