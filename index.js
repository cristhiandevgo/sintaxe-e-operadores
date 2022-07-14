const limite_1 = 10;
const limite_2 = 20;

let soma = (a, b) =>{
    return a + b;
}

let menor_maior = (soma, l1) =>{
    let msg;

    if(soma > l1){
        msg = "maior";
    }else if (soma < l1){
        msg = "menor";
    }else{
        msg = "igual";
    }

    return msg;
}

let numbers = (n_1, n_2) =>{
    let soma_local = soma(n_1, n_2);

    (n_1 === n_2) ? console.log(`Os números ${n_1} e ${n_2} são iguais!`) : console.log(`Os números ${n_1} e ${n_2} não são iguais!`);
    
    console.log(`Sua soma é ${soma_local}, que é ${menor_maior(soma_local, limite_1)} que ${limite_1} e ${menor_maior(soma_local, limite_2)} que ${limite_2}.`);
}


// Teste 1
// Os números 1 e 2 não são iguais! -> OK
// Sua soma é 3, que é menor que 10 e menor que 20. -> OK
numbers(1, 2);
console.log("");
// Teste 2
// Os números 10 e 9 não são iguais! -> OK
// Sua soma é 19, que é maior que 10 e menor que 20. -> OK
numbers(10, 9);
console.log("");

// Teste 3
// Os números 10 e 10 são iguais! -> OK
// Sua soma é 20, que é maior que 10 e igual que 20. -> OK
numbers(10, 10);
console.log("");

// Teste 4
// Os números 10 e 20 não são iguais! -> OK
// Sua soma é 30, que é maior que 10 e maior que 20. -> OK
numbers(10, 20);
console.log("");

// Atividade
// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
// 
// Input: 1, 2
// Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.