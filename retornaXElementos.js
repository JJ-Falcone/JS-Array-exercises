const arr = [1, 2, 4, 8, 16, 32, 64]

function retornaXElementos (arr, x) {
    return arr.slice(0, x)
}

console.log(retornaXElementos(arr, 80));