const numerosAleatorios = [];

for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 100));
}

console.log('Esses são os números gerados aleatoriamente:');
console.log(numerosAleatorios.join(", "));

let menorNumero = numerosAleatorios[0];
for (let numero of numerosAleatorios) {
    if (numero < menorNumero) {
        menorNumero = numero;
    }
}

let maiorNumero = numerosAleatorios[0];
for (let numero of numerosAleatorios) {
    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}

console.log(`O menor número exibido foi ${menorNumero}`);
console.log(` O maior número exibido foi ${maiorNumero}`);
