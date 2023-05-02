function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true // configuravel se for true
    });

    Object.defineProperties(this, {
        nome: {        
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configuravel se for true
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true , // pode alterar
            configurable: true // configuravel se for true
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)