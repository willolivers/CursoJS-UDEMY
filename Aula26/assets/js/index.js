function meuEscopo() {
    const form = document.querySelector('.form');
    let peso = document.querySelector('#peso')
    let altura = document.querySelector('#altura')
    let res = document.querySelector('.res')
    let imc = '' 
    
    function calc(evento) {
        evento.preventDefault()

        if (peso.value === '' || altura.value === '') {
            alert('[ERRO] Ainda a espacos em branco, preencha todos os espacos')
        }else{
           imc = peso.value / (altura.value * altura.value)
        }
        

        if (imc < 18.5) {
            res.textContent += `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
        } else if (imc >= 18.5 && imc <= 24.99){
            res.textContent += `Seu IMC é ${imc.toFixed(2)} (Peso normal)` 
        } else if (imc >= 25 && imc <= 29.99){
            res.textContent += `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)` 
        } else if (imc > 30 && imc < 34.99){
            res.textContent += `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)` 
        } else if (imc > 35 && imc < 39.99){
            res.textContent += `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)` 
        } else{
            res.textContent += `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
        }

        

    }
    form.addEventListener('submit', calc);

}
 meuEscopo()
