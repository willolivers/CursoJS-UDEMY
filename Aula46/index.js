const mostraHora = () => {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

setInterval(mostraHora, 1000)

console.log(mostraHora());
