/**
 * 
 * Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiado
 * 
 * Referencia (mutável) -  Array, object, function - passados por referencia
 */

//Valores primitivos

/*
    let a = 'A'
    let b = a

    console.log(a, b)

    a = 'Outra coisa'
    console.log(a, b)
*/

//Valores de Referencia

let a = [1, 2, 3]
let b = [...a]

console.log(a, b)

a.push(4)
console.log(a, b)
