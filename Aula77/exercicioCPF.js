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

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    return true;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    
    let regressivo = cpfArray.length + 1;
    const digito = cpfArray.reduce((ac, val) => {
        console.log(regressivo, val, regressivo * val)
        regressivo--;
        return ac;
    }, 0)
}

const cpf = new ValidaCpf('705.484.450-52');
console.log(cpf.cpfLimpo);
console.log(cpf.valida());