const readline = require('readline');

let numero = 0;


while (numero < 10) {

    // Como não estou utilizando nenhum framework para a entrada de dados, vou simular automaticamente as digitações de um usuário.
    console.log("Digite um número");
    let aleatorio = Math.floor(Math.random() * 10);
    numero = aleatorio;



    if (numero < 10) {
        console.log(`Você digitou  ${numero}`);
    }
    else {
        console.log(`Você digitou  10!`);
    }
}
