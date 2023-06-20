import chalk from 'chalk'
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 3, 2, 4, 9, 3];
var frequenciaNoArray = {}


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
    console.log(arrayDosNumeros);
    return `O valor mais comum é o ${chalk.green.bold(arrayDosNumeros[0][0])} que se repete ${chalk.green.bold(arrayDosNumeros[0][1])} vezes`
}





function geraFrequencia (arr) {
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


console.log(maisComum(arr1));