import chalk from 'chalk'

const arr1 =  [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const arr2 = [3, 'a', 5, 'a', 3, 7, 'a', 2, 2, 4, 4, 9, 3, 2];
const arr3 = ['jorge', 'mozi', 'jorge', 'jorge', 'nani', 'amor', 'jorge', 'nani', 'nani']

function maisComum (arr) {
    const resultadoFrequencia = geraFrequencia(arr)
    const arrayDosNumeros = (Object.entries(resultadoFrequencia));
    
    for (let i = 1; i < Object.keys(resultadoFrequencia).length; i++) {
        let contador = i
        
        
        while (contador > 0 && arrayDosNumeros[contador][1] > arrayDosNumeros[contador - 1][1]) {
            const arrayAtual = arrayDosNumeros[contador]
            const arrayAnterior = arrayDosNumeros[contador - 1]

            arrayDosNumeros[contador] = arrayAnterior
            arrayDosNumeros[contador - 1] = arrayAtual

            contador--
        }
    }

    const indexVerificacaoFinal = 0
    verificacaoFinal(arrayDosNumeros, indexVerificacaoFinal)
}


function verificacaoFinal(arr, index){
    
    if(arr[0][1] > arr[1][1]){
        console.log(`O valor mais comum é o ${chalk.green.bold(arr[0][0])} que se repete ${chalk.green.bold(arr[0][1])} vezes`);

    } else {
        let falaInicial = "Os valores mais comuns são:"
        
        while(arr[index][1] === arr[index + 1][1]){
            const falaAdicional = ` ${chalk.green.bold(arr[index][0])},`
            falaInicial = falaInicial + falaAdicional
            index++
        }

        let indiceUltimaLetra = falaInicial.lastIndexOf(',')
        falaInicial = falaInicial.slice(0, indiceUltimaLetra)
        const fraseFinal = falaInicial + ` e ${chalk.green.bold(arr[index][0])}, que se repetem ${chalk.blue.bold(arr[index][1])} vezes`

        console.log(fraseFinal); 
    }
}

function geraFrequencia (arr) {
    let frequenciaNoArray = {}
    for (let index in arr){
        const valor = arr[index]
       
        if(Object.hasOwn(frequenciaNoArray, valor)) {
            frequenciaNoArray[valor]++
        } else {
            frequenciaNoArray[valor] = 1
        }
    }
    
    return frequenciaNoArray
}


maisComum(arr1)
maisComum(arr2)
maisComum(arr3)