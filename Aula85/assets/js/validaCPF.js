// 705.484.450-52  070.987.720-03

class ValidaCpf{
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfParcial);
        const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);
        this.geraNovoCpf = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNumerica of cpfParcial) {
            //console.log(stringNumerica, reverso)
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();

        return this.geraNovoCpf === this.cpfLimpo;
    }
}

/*
let validacpf = new ValidaCpf('070.987.720-03');
//validacpf = new ValidaCpf('705.484.450-52');
if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
*/