function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Baton', 35);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
});

p3.aumento(10)
console.log(p3)


























// //new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__ : Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     // __proto__ : ObjA
// };

// const objC = new Object();
// objC.chaveC = 'C'

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, obj);
// console.log(objC.chaveA)