let texto = document.getElementById('texto')

function recebeData(data) {
    let diaSemana = data.getDate()
    let dia = getDiaSemanaTexto(data.getDay())
    let mes = mesAnoTexto(data.getMonth())
    let ano = data.getFullYear()
    let hora = zeroEsquerda(data.getHours())
    let minutos = zeroEsquerda(data.getMinutes())

    return `${dia}, ${diaSemana} de ${mes} de ${ano} ${hora}:${minutos}`

    function getDiaSemanaTexto(diaSemana) {
        let diaSemanaTexto;

        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo'
                return diaSemanaTexto;
            case 1:
                diaSemanaTexto = 'Segunda-feira'      
                return diaSemanaTexto;
            case 2:
                diaSemanaTexto = 'Terca-feira'
                return diaSemanaTexto;
            case 3:
                diaSemanaTexto = 'Quarta-feira'
                return diaSemanaTexto;
            case 4:
                diaSemanaTexto = 'Quinta-feira'
                return diaSemanaTexto;
            case 5:
                diaSemanaTexto = 'Sexta-feira'
                return diaSemanaTexto;
            case 6:
                diaSemanaTexto = 'Sábado'
                return diaSemanaTexto;
    
            default:
                diaSemanaTexto = ''
            return diaSemanaTexto
        }
    }

    function mesAnoTexto(mesTexto) {
        let textMonth;
        switch (mesTexto) {
            case 0:
                textMonth = 'Janeiro'
                return textMonth;
            case 1:
                textMonth = 'Fevereiro'      
                return textMonth;
            case 2:
                textMonth = 'Marco'
                return textMonth;
            case 3:
                textMonth = 'Abril'
                return textMonth;
            case 4:
                textMonth = 'Maio'
                return textMonth;
            case 5:
                textMonth = 'Junho'
                return textMonth;
            case 6:
                textMonth = 'Julho'
                return textMonth;
            case 7:
                textMonth = 'Agosto'
                return textMonth;
            case 8:
                textMonth = 'Setembro'      
                return textMonth;
            case 9:
                textMonth = 'Outubro'
                return textMonth;
            case 10:
                textMonth = 'Novembro'
                return textMonth;
            case 11:
                textMonth = 'Dezembro'
                return textMonth;
            case 12:
                textMonth = 'Junho'
                return textMonth;
    
            default:
                textMonth = ''
            return textMonth
        }
    }
    
    function zeroEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }
}    

    let data = new Date()
    const dataAtual = recebeData(data)
    texto.innerHTML = dataAtual
    console.log(dataAtual)