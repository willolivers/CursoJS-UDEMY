let data = new Date()

function dataCompleta(data) {
    const texto = document.querySelector('#texto')
    
    let diaSemana = data.getDate();
    let dia = data.getDay() + 1;
    let mes = data.getMouth();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    texto.textContent = `${diaSemana}, ${dia} de ${mes} de ${ano} <br> ${hora}:${minutos}`
}
dataCompleta()