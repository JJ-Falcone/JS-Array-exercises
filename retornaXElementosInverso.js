const arr = [1, 2, 4, 8, 16, 32, 64]

function retornaXElementosInverso (arr, x) {
    return arr.slice(arr.length - x, arr.length)
}


console.log(retornaXElementosInverso(arr, 5));