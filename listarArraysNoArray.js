var arrs = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function listaArrs (arrs) {
    for (let index in arrs) {
        console.log(`Array ${parseInt(index) + 1}`);
        const arr = arrs[index]
        for (index in arr){
            const num = arr[index]
            console.log(num);
        }
    }
}

listaArrs(arrs)
