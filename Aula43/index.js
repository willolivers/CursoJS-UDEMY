//Escreva uma funcao que recebe um numero e retora o seguinte:
//Numero é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número NÃO é divisivel por 3 e 5 = retorna o próprio número
//Checar se o número é realmente um número 
//Use a funcão com números de 0 a 100

const FizzBuzz = (number1) => {
    if (typeof number1 !== 'number') return number1;
    if (number1 % 3 === 0 && number1 % 5 === 0) return 'FizzBuzz';
    if (number1 % 3 === 0) return 'Fizz';
    if (number1 % 5 === 0) return 'Buzz';
    return number1
}

console.log('a', FizzBuzz('a'))
for (let i = 0; i < 100; i++){
    console.log(i, FizzBuzz(i))
}