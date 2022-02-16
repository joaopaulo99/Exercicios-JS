let num = [];

num.push(1,4,2,8,7,6,9,5,3);
num.sort();

console.log(num);

var um = num.indexOf(9)

if (um == -1){
console.log("numero não encontrado");
}else{
    console.log(`O valor está na posição ${um}`)
}
