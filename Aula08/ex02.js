const nome = 'Jessé Willy'
const sobrenome = 'Oliveira'
let peso = 81
let alturaEmM = 1.74
let imc
let anoNascimento = 2000
let anoAtual = 2022
let idade = anoAtual - anoNascimento
imc = peso / (alturaEmM * alturaEmM)


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`) 
console.log(`${nome} nasceu em ${anoNascimento}`)