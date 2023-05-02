function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configuravel se for true
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Bad');
            }

            estoquePrivado = valor;
        }
    });
}


function  criaProduto(nome){
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    }
}

//const p1 = new Produto('Camiseta', 20, 3)
//console.log(p1)
//p1.estoque = 'teste';
//console.log(p1.estoque)

const p2 = criaProduto('Camiseta');
console.log(p2.nome)