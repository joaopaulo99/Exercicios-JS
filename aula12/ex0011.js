var idade = 14 //inserir a idade aqui para testar...
console.log(`voce tem ${idade} anos`)
if(idade < 16 ){
    console.log('não vota!')
}else if(idade < 18 || idade > 65){
    console.log('voto opcional')
}else{
    console.log('Pode votar')
}