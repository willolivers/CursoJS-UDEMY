let num = Number(prompt('Digite um número'))
const numT = document.querySelector('#numero-titulo')
const txt = document.querySelector('#txt')

numT.innerHTML = num
txt.innerHTML = ''
txt.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>` //Raiz quadrada
txt.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`
txt.innerHTML += `<p>É NaN: ${isNaN(num)}</p>`
txt.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`
txt.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`
txt.innerHTML += `<p>Com duas casa decimais: ${num.toFixed(2)}</p>`