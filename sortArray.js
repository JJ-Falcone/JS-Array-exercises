var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sortArray (arr) {
    for (let index in arr) {
        let atual = index
        while (atual > 0 && arr[atual] < arr[atual - 1]){
            const numAtual = arr[atual]
            const numAnterior = arr[atual - 1]

            arr[atual] = numAnterior
            arr[atual - 1] = numAtual

            atual--
        }
    }
    return arr
}

console.log(sortArray(arr1));