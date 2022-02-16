let valores = [8,1,7,4,2,9];
//Modo mais comum de exibir os elementos de um Array...
console.log(valores);


//Percurso para exibição de vetores tradicional...
for(let pos=0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

//Percurso para exibição de vetores simplificado...

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Para localizar no indice um elemento especifio, basta usar o comando indexOf(Nome do elemento no Array)........
console.log(`${valores.indexOf(2)}`)


