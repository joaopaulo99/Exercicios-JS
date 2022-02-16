let num = [5, 8, 2, 9, 3]
//Para selecionar um elemento especifico do array, basta colocar o nome do Array vetor e [indice chave]...

console.log(`Nosso vetor é o ${num[0]}`) 
console.log(`Nosso vetor é o ${num[1]}`)
console.log(`Nosso vetor é o ${num[3]}`)
//Para substituir ou acrescentar um elemento ao array, basta colocar o nome do ARRAY[indice referente ao elemento] = valor q irá receber...
//Exemplo logo a baixo:

num[0]=6
console.log(`valor atualizado ${num[0]}`)

num[5]=7
console.log(`Elementos atuais ${num}`)

//Caso não saiba quantos elementos há no Array, basta usar um comando interno chamado push(com o valor que será acrescentado).
//No nosso caso, para acrescentar o elemento 4 ao final da Array, basta usar o comando da seguinte forma a baixo...

num.push(4)
console.log(`Elementos atuais ${num}`)

//Pode ser criado um Array vazia, e depois atribuir elementos a ele.
//Faça um teste, copiando e colando os comandos a baixo dentro do console do seu navegador ou no prompt de comando...

// let num2 =[]

// num.push(1,2,3,4,5,6,7,8,9,10)
// console.log(num2)


//Para saber a quantidade de elementos dentro de um Array, basta apenas dizer o nome do Array e acrescentar o atributo length...
console.log(`numero de elementos atualmente é ${num.length}`)

//Para organizar em ordem crescente de elementos, basta usar o comando .sort()...
console.log(`numero de elementos atualmente é ${num.sort()}`)