function Calculadora() { //Criou a função factory
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();//Criou o metodo capturacliques
        this.capturaEnter()
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta()
            }
        });
    }
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;// Vai checar qual botão ta sendo precionado e colocando na const el
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value)

            if(!conta){
                alert('Conta invalida');
            }

            this.display.value = conta;
        } catch {
            alert('Conta invalida');
            return
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus()
    }
    this.clear = (el) => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0 , -1)
}

const calculadora = new Calculadora() //Criou o objeto
calculadora.inicia()//Chamou o metodo inicia