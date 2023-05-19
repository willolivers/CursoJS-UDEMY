// 705.484.450-52  070.987.720-03

// 11 - (total % 11) = primeiro digito
// se o digito for maior que 9, consideramos 0.
/*
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');

cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));
*/

function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'underfined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('070.987.720-03');


if(cpf.valida()){
    console.log('Cpf válido');
} else {
    console.log('Cpf inálido');
}