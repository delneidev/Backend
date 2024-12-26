const numero1 = 100
const numero2 = 50

if (numero1>numero2){
    console.log('Esse numero e maior')
}else {
    console.log ('esse numero e menor')
}

if (numero2 < numero1) {
    console.log (`Numero ${numero2} e menor que numero ${numero1}`)
}

const idade = 18;
const possuiCarteira = true;

// Verifica se a pessoa pode dirigir
const podeDirigir = idade >= 18 && possuiCarteira;

// Define o número de passageiros com base em podeDirigir
const numeroPassageiros = podeDirigir ? 4 : 0;

console.log(`Número de passageiros permitidos: ${numeroPassageiros}`);