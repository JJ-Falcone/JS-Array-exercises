function eUmArray (testado) {
    return Array.isArray(testado);
}

const arr = []
const string = 'oi'

console.log(eUmArray(arr));      //true
console.log(eUmArray(string));   //false
