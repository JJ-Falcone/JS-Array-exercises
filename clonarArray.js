const arr = [1, 2, 4, 8];

function copiaArr (arr) {
    const copiaDoArr = [...arr]

    arr.push('Original')
    copiaDoArr.push('Clone')

    console.log(arr);
    return copiaDoArr
}

console.log(copiaArr(arr));