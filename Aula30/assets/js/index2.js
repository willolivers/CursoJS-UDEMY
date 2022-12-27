const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})
/*
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    return diasSemana[diaSemana]
}

function getNomeMes (numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()
    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`)
}

h1.innerHTML = criaData(data)


*/

