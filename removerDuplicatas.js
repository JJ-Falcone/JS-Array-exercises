const array1 = [1, 2, 1, 2, 1, 3, 3, 2]
const array2 = ['jorge', 'mari', 'JOrge', 'raquel', 'jorge', 'JORGE']


function removeDuplicatasNum (array) {
    const novoArr = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(!novoArr.includes(element)){
            novoArr.push(element)
            console.log(novoArr);
        } else {
            console.log('ja tem');
        }    
    }
    console.log(novoArr);
}

function removeDuplicatasString (array) {
    const novoArr = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(!novoArr.includes(element.toLowerCase())){
            novoArr.push(element)
            console.log(novoArr);
        } else {
            console.log('ja tem');
        }    
    }
    console.log(novoArr);
}

removeDuplicatasNum(array1)
removeDuplicatasString(array2)


