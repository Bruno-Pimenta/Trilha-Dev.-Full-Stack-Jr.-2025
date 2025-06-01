const prompt = require('prompt-sync')()


/*1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.*/

/*function ehDataValida(dia, mes, ano){
    
    if(dia<0 || mes<0 || mes>12 || ano<0){
        return false
    }

    return (dia<=quantidadeDeDiasDoMes(mes, ano))
}

function quantidadeDeDiasDoMes(mes, ano){
    
    const diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(ehAnoBissexto(ano) && mes == 2){
        return diasDosMeses[1]+1
    }

    return diasDosMeses[mes-1]
}

function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0));
}

dia = parseInt(prompt("Insira o dia (1-31): "))
mes = parseInt(prompt("Insira o mês (1-12): "))
ano = parseInt(prompt("Insira o ano: "))

console.log(ehDataValida(dia, mes, ano))*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/

/*function jogoDeAdivinhacao(){
    let numeroAleatorio = Math.floor(Math.random()*100)+1
    let numeros = []

    for(let i=1; i<=100; i++){
        numeros.push(i)
    }
    buscaBinariaAdaptada(numeros, numeroAleatorio)
}

function buscaBinariaAdaptada(numeros, numeroAleatorio){
    let inicio = 0
    let fim = numeros.length-1
    let numeroDeTentativas = 0

    while(fim>=inicio){
        let meio = Math.round((inicio+fim)/2)
        let palpite = numeros[meio]

        console.log(`Palpite ${numeroDeTentativas+1}: ${palpite}`)

        if(palpite == numeroAleatorio){
            console.log(`Número ${numeroAleatorio} encontrado com ${++numeroDeTentativas} tentativas!`)
            return
        }else if(numeroAleatorio<numeros[meio]){
            console.log(`Mais baixo!!`)
            fim = meio-1
        }else{
            console.log(`Mais alto!!`)
            inicio = meio+1
        }
        numeroDeTentativas++
    }
}

jogoDeAdivinhacao()*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/

/*function exibirPalavrasUnicas(texto){
    texto = texto.trim().toLowerCase().split(" ")
    texto = texto.filter(str => !/^\s*$/.test(str))
    let setDePalavras = new Set(texto)
    let arrayDePalavrasUnicas = Array.from(setDePalavras)

    for(let palavra of arrayDePalavrasUnicas){
        console.log(palavra)
    }
}

let textoInserido = prompt("Digite um texto: ")
exibirPalavrasUnicas(textoInserido)*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.*/

/*let numero = parseInt(prompt("Digite um número inteiro: "))
function fatorial(n){
    if(n<0){
        throw new Error("Não é possível calcular fatorial de números negativos.");
    }else if(n===0){
        return 1
    }else{
        return n*fatorial(n-1)
    }
}

console.log(`O fatorial de ${numero} é ${fatorial(numero)}`)*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/*5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.*/

/*function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {//verifica se já existe um temporizador setTimeout em andamento
      clearTimeout(timeoutId);//Caso exista, cancela esse temporizador
    }

    timeoutId = setTimeout(() => {//salva o ID do timer para que ele possa ser cancelado se uma nova chamada ocorrer antes do tempo acabar
      fn(...args);
    }, delay);
  };
}

const funcaoExemplo = (n) => console.log(`Executou na tentativa ${n}`);
const funcaoDebounce = debounce(funcaoExemplo, 2000);

funcaoDebounce(1);
funcaoDebounce(2);
funcaoDebounce(3);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.*/

/*function memoize(fn) {
  const cache = new Map();
    
  return function (...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);

    return result;
  };
}

const fastFat = memoize(function fatorial(n){
  if(n<0){
    return undefined
  }
  else if(n == 1|| n==0){
    return 1
  }else{
    return n*fastFat(n-1)
  }
})

let n = 6
console.log(`Fatorial de ${n} é: ${fastFat(n)}`);*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/

/*let produtos = [
              { 'nome' : 'Tomb Raider I-II-III Remaster', 
                'preco' : 260.00 }, 
              { 'nome' : 'Mass Effect Legendary Edition', 
                'preco' : 470.00 },
              { 'nome' : 'Resident Evil 2 Remake', 
                'preco' : 310.00 },
              { 'nome' : 'Final Fantasy VII Rebirth', 
                'preco' :  315.00},
              { 'nome' : 'Ninja Gaiden 2 Black', 
                'preco' : 450.00 }
            ]

function mapeamentoEOrdenacao(produtos){
    produtos = produtos.sort((a, b) => a.preco-b.preco)
    return produtos.map(produto => produto.nome)
}

console.log(mapeamentoEOrdenacao(produtos))*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.*/

/*let vendas = [
              { 'cliente' : 'Robbie da Silva Sauro', 
                'total' : 260.00 }, 
              { 'cliente' : 'Fran da Silva Sauro', 
                'total' : 470.00 },
              { 'cliente' : 'Charlene da Silva Sauro', 
                'total' : 310.00 },
              { 'cliente' : 'Dino da Silva Sauro', 
                'total' :  315.00},
              { 'cliente' : 'Fran da Silva Sauro', 
                'total' : 450.00 },
              { 'cliente' : 'Charlene da Silva Sauro', 
                'total' : 210.00 }
            ]
let resultados = {}

for(let venda of vendas){
    if(!resultados[venda.cliente]){
        let total = []
        total.push(venda.total)
        resultados[venda.cliente] = total
    }else{
        resultados[venda.cliente].push(venda.total)
    }
}

for(let resultado in resultados){
    resultados[resultado] = resultados[resultado].reduce((acumulador, valor) => acumulador+valor, 0)
}

console.log(resultados)*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

/*9. Conversão Entre Formatos
Escreva duas funções:

* paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
* objetoParaPares(obj) faz o inverso, retornando um array de pares.*/

/*let seriesENotas = [['Game of Thrones - HBO', 9.2], ['Westworld - HBO', 8.4], ['How to Get Away with Murder - ABC', 8.1], ['Into the Badlands - AMC Studios', 7.9]]

function paresParaObjeto(pares){
    let objetoResultante = {}
    for(let par of pares){
        objetoResultante[par[0]] = par[1]
    }

    return objetoResultante
}

function objetoParaPares(pares){
    let arrayResultante = []
    for(let par in pares){
        let arrayPar = []
        arrayPar.push(par)
        arrayPar.push(pares[par])
        arrayResultante.push(arrayPar)
    }

    return arrayResultante
}

let seriesEmObjetos = paresParaObjeto(seriesENotas)
console.log(seriesEmObjetos)
let seriesEmArray = objetoParaPares(seriesEmObjetos)
console.log(seriesEmArray)*/


