function ValidaCpf (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    }); 
};

ValidaCpf.prototype.verificaCpf = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false
    return true;
};

//teste

const cpf = new ValidaCpf('619.373.923-84');
console.log(cpf.cpfLimpo)
console.log()
