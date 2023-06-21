import chalk from "chalk"
const arr = [1, 2, 3, 4, 5, 6]

function resultados(arr){
    const resultadoSoma = somaDoArray(arr)
    const resultadoProduto = somaProdutoDoArray(arr)
    const resultadoQuadrado = somaQuadradosDoArray(arr)
    console.log(chalk.bold(`O resultado da ${chalk.blue.italic('soma dos números')} é igual a ${chalk.green(resultadoSoma)}`));
    console.log(chalk.bold(`O resultado da ${chalk.blue.italic('soma dos produtos')} é igual a ${chalk.green(resultadoProduto)}`));
    console.log(chalk.bold(`O resultado da ${chalk.blue.italic('soma dos números ao quadrado')} é igual a ${chalk.green(resultadoSoma)}`));
}

function somaQuadradosDoArray(arr) {
    let resultado = 0
    for (let index in arr){
        const quadrado = arr[index] * arr[index]
        resultado = resultado + quadrado
    }
    return resultado
}


function somaProdutoDoArray(arr){
    let resultado = 1
    for (let index in arr){
        const num = arr[index]
        resultado = resultado * num
    }
    return resultado
}


function somaDoArray(arr){
    let resultado = 0
    for (let index in arr){
        const num = arr[index]
        resultado = resultado + num
    }
    return resultado
}


resultados(arr)




