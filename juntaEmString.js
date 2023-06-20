const myColor = ["Red", "Green", "White", "Black"];

function juntaEmString (arr, espaco = ',') {
    return (arr.join(espaco))
}

console.log(juntaEmString(myColor, ' + '))