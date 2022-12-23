const form = document.querySelector('.form');
    

form.addEventListener('submit', function (e) { //CRIOU UM EVENTO NO FORM, EVENTO DE SUBMIT
    e.preventDefault() //NÃO VAI DEIXAR O FORMULARIO SER ENVIADO
    let inputPeso = e.target.querySelector('#peso')
    let inputAltura = e.target.querySelector('#altura') //CAPTUROU OS DADOS DO INPUT

    let peso = Number(inputPeso.value) // TENTOU CONVERTER OS DADOS PARA NUMBER 
    let altura = Number(inputAltura.value) // TENTOU CONVERTER OS DADOS PARA NUMBER 

    if (!peso) { //SE O PESO FOR UM NAN RETORNE
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) { //SE O ALTURA FOR UM NAN RETORNE
        setResultado('Altura inválido', false)
        return
    }

    const imc = getImc(peso, altura) //CRIOU UMA FUNCAO ESPECIFICA PARA CALCULAR O IMC
    const nivelImc = getNivelImc(imc) //PEGOU O NIVEL DO IMC 

    const msg = `Seu IMC é ${imc} (${nivelImc}).` // CRIOU UMA MENSAGEM COM OS VALORES

    setResultado(msg, true) //MANDOU CETAR O RESULTADO COM A FLAG TRUE
});

function getNivelImc(imc) { //CRIOU A FUNCÃO GETNIVELIMC PARA RETORNAR O NIVEL DO IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'] //CRIOU UM ARRAY PARA OBTER OS VALORES DA LISTA (LISTA DE STRING)

    if (imc >= 39.99) return nivel[5] //A FUNCÃO DEPOIS DE ENCONTRAR O VALOR ELA IRA RETORNAR PARA (IMC) E PARAR
    if (imc >= 34.99) return nivel[4] //A FUNCÃO DEPOIS DE ENCONTRAR O VALOR ELA IRA RETORNAR PARA (IMC) E PARAR
    if (imc >= 29.99) return nivel[3] //A FUNCÃO DEPOIS DE ENCONTRAR O VALOR ELA IRA RETORNAR PARA (IMC) E PARAR
    if (imc >= 24.99) return nivel[2] //A FUNCÃO DEPOIS DE ENCONTRAR O VALOR ELA IRA RETORNAR PARA (IMC) E PARAR
    if (imc >= 18.5) return nivel[1] //A FUNCÃO DEPOIS DE ENCONTRAR O VALOR ELA IRA RETORNAR PARA (IMC) E PARAR
    if (imc < 18.5) return nivel[0] //A FUNCÃO DEPOIS DE ENCONTRAR O VALOR ELA IRA RETORNAR PARA (IMC) E PARAR
}

function getImc (peso, altura) { //FEZ A FUNCÃO PARA CALCULAR O IMC E RETORNAR COM UM VALOR DE 2 CASAS
    const imc = peso / altura ** 2 // VARIAVEL IMC QUE RECEBE PESO DIVIDIDO POR ALTURA ELEVADO A 2
    return imc.toFixed(2) //RETORNA O RESULTADO
}

function criaP() { //FUNCÃO PARA CRIAR UM PARAGRAFO
    let p = document.createElement('p'); //A VARIAVEL P RECEBE UM ELEMENTO CRIADO DO TIPO P
    return (p) //RETORNA P PARA A FUNCÃO CRIAP
}

function setResultado(msg, isValid) { //CRIOU UMA FUNCÃO PARA SETAR O RESULTADO (ELA RECEBE 
                                      //UMA MENSAGEM E VE SE  O RESULTADO É VALIDO)
    let res = document.querySelector('#res'); //SELECIONA A DIV DE RESULTADO
    res.innerHTML = ''; //ZERA O HTML DA DIV RESULTADO

    let p = criaP() //CRIA UM P COM A FUNCÃO CRIAP

    if (isValid) { // VAI CHECAR SE A FLAG É VERDADEIRA OU FALSA
        p.classList.add('paragrafo-resultado') //SE FOR VERDADEIRA 
    }else{
        p.classList.add('bad') //SE FOR FALSA
    }

    p.innerHTML = msg //SETA O INNERHTML COM A MENSAGEM DO SETRESULTADO
    res.appendChild(p) //ADICIONA A CRIANCA P A DIV RESULTADO PARA MOSTRAR NA TELA

    
}