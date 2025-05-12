const prompt = require('prompt-sync')()


/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/
/*let numero = parseInt(prompt("Insira um número inteiro: "))
if(numero%2==0){
    console.log(`O número ${numero} é par`)
}else{
    console.log(`O número ${numero} é ímpar`)
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

/*let idade = parseInt(prompt("Insira a idade: "))

if(idade<12){
    console.log(`Categoria: criança`)
}else if(idade>=12 && idade<18){
    console.log(`Categoria: adolescente`)
}else if(idade>=18  && idade<=59){
    console.log(`Categoria: adulto`)
}else{
    console.log(`Categoria: idoso`)
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

/*let nota = parseFloat(prompt("Insira a nota: "))

if (nota < 0 || nota > 10 || isNaN(nota)) {
  console.log("Insira um valor numérico entre 0 e 10.");
}
else if(nota>=7){
    console.log(`Classificação: Aprovado`)
}else if(nota>=5 && nota<7){
    console.log(`Classificação: Recuperação`)
}else{
    console.log(`Classificação: Reprovado`)
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
/*console.log("Classes: \n1 - Guerreiro\n2 - Mago\n3 - Invocador\n")
let classe = parseInt(prompt("Escolha sua classe: "));

switch(classe){
    case 1:
        console.log("Guerreiro: muito HP, força física e defesa")
        break
    
    case 2:
        console.log("Mago: muito MP, inteligência e espírito")
        break

    case 3:
        console.log("Invocador: atributos equilibrados, atributos das invocações são baseados nos atributos do invocador")
        break

    default:
        console.log("Valor inserido inválido")
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

/*let peso = Number(prompt("Insira o peso em KG: "))
let altura = Number(prompt("Insira a altura em metros: "))

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <=0) {
    console.log("Valores inválidos. Os valores inseridos devem ser números válidos e positivos.");
} else{
    altura = Math.pow(altura, 2)
    let imc = peso/altura
    console.log(`IMC: ${imc.toFixed(2)}`);

    if(imc<18.5){
        console.log("Abaixo do peso")
    }else if(imc>=18.5 && imc<25){
        console.log("Peso normal")
    }else if(imc>=25 && imc<30){
        console.log("Sobrepeso")
    }else{
        console.log("Obesidade")
    }
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

/*let ladoA = Number(prompt("Digite o valor de um dos 3 lados (lado A): "))
let ladoB = Number(prompt("Digite o valor de um dos 3 lados (lado B): "))
let ladoC = Number(prompt("Digite o valor de um dos 3 lados (lado C): "))

if(isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoB) || ladoA<=0 || ladoB<=0 || ladoC<=0){
    console.log("Os valores inseridos devem ser numéricos e positivos")
}else{
    if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)){
        if(ladoA == ladoB && ladoB == ladoC){
            console.log("O triângulo formando é um triângulo eqüilátero")
        }
        else if(ladoA==ladoB || ladoB==ladoC || ladoA==ladoC){
            console.log("O triângulo formando é um triângulo isósceles")
        }else {
            console.log("O triângulo formando é um triângulo escaleno")
        }
    }else{
        console.log("Os lados inseridos não formam um triângulo")
    }
}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/
/*let numeroDeMacas = parseInt(prompt("Digite o número de maças compradas: "))

if(isNaN(numeroDeMacas) || numeroDeMacas<0){
    console.log("O valor inserido deve ser um número inteiro positivo")
}else {
    let precoUnitario = numeroDeMacas < 12 ? 0.30 : 0.25
    let total = numeroDeMacas * precoUnitario
    console.log(`Você comprou ${numeroDeMacas} maçã(s). Total a pagar: R$ ${total.toFixed(2)}`)
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

/*let valor1, valor2

do{
    valor1 = Number(prompt("Digite o primeiro valor: "))
    valor2 = Number(prompt("Digite o segundo valor: "))

    if(isNaN(valor1) || isNaN(valor2)){
        console.log("Os valores devem ser numéricos")
    }

}while(isNaN(valor1) || isNaN(valor2) || valor1 === valor2) 

if(valor1>valor2){
    console.log(`Ordem crescente: ${valor2}, ${valor1}`)
}else{
    console.log(`Ordem crescente: ${valor1}, ${valor2}`)
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/

/*for(let i = 10; i>=1; i--){
    console.log(`${i}`)
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

/*let numeroInteiro = Number(prompt("Digite um número inteiro: "))

if(!Number.isInteger(numeroInteiro) || isNaN(numeroInteiro)){
    console.log("O número inserido precisa ser um número inteiro")
}else{
    for(let i=0; i<10; i++){
        console.log(`${i+1}ª vez: ${numeroInteiro}`)
    }
}*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

/*let valorTotal = 0

for(let i=0; i<5; i++){
    let numero;

    do {
        numero = Number(prompt(`Digite o ${i+1}º número: `));
        if (isNaN(numero)) {
            console.log("Valor inválido. Tente novamente.");
        }
    } while (isNaN(numero));

    valorTotal += numero;
}

console.log(`Valor total da somatória dos números inseridos ${valorTotal}`)*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) 
utilizando um loop for.*/

/*let numero = Number(prompt("Digite um valor numérico: "))

if(isNaN(numero)){
    console.log("O valor precisa ser numérico")
}else{
    for(let i=1; i<=10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);

    }
}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

/*let valorTotal = 0
let quantidadeDeNumerosDecimais = 0
let numero

do{
    numero = Number(prompt("Insira um número decimal: "))
    if(isNaN(numero) || !Number.isInteger(numero)){
        console.log("O número precisa ser um decimal")
    }else if(numero !=0){
        valorTotal += numero
        quantidadeDeNumerosDecimais++
    }
}while(numero!=0)

console.log(`Média Aritmética: ${valorTotal/(quantidadeDeNumerosDecimais)}`)*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

/*let numero = parseInt(prompt("Digite um número natural (inteiro não negativo): "))
let fatorial = numero

if(numero >0){
    for(let i=numero-1; i>1; i--){
        fatorial*=i
    }
}else if(numero == 0){
    fatorial = 1
}

if(numero>=0){
    console.log(`O fatorial de ${numero} é ${fatorial}`)
}else if(numero<0){
    console.log("Não é possível calcular o fatorial de um número não natural")
}else{
    console.log("Valor digitado inválido")
}*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

/*let f0 = 0
let f1 = 1
let sequencia = `${f0}, ${f1}`

for(let i = 3; i<=10; i++){
    sequencia += ", "+(f0+f1)
    f1 = f0+f1
    f0 = f1-f0
}

console.log("Os primeiros 10 números sequência de Fibonacci:")
console.log(sequencia)*/


