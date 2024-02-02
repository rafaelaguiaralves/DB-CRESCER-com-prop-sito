let idade = 0;


console.log('Digite sua idade');

// Simulando a entrada do usuário

let entrada = Math.floor(Math.random() * 99);
idade = entrada;

if (idade >= 18) {
    console.log(`Você é maior de idade! Sua idade é ${idade} anos`);
    return;
}
else {
    console.log(`Você é menor de idade! Sua idade é ${idade} anos`);
}
