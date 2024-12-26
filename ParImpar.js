const listaNumeros =[20,10,40,50,70,1,2,6,7]
const listaPar = []
const listaImpar = []
let indice = 0;
const indiceAtual = listaNumeros.length
console.log (indiceAtual)

while (indice < listaNumeros.length) {
listaNumeros[indice] % 2 === 0 ? listaPar.push(listaNumeros[indice]) : listaImpar.push(listaNumeros[indice]);

    indice ++
}
console.log("Números pares:", listaPar);
console.log("Números ímpares:", listaImpar);