
const lista = '025468'

function separaPar(input) {
    const novaLista = []
    for(let letraIndex in input) {
        const letra = input[letraIndex]
        const letraAnterior = input[letraIndex - 1]
        if(letra % 2 === 0 && letraAnterior % 2 === 0){
            novaLista.push( '-',letra)
        } else {
            novaLista.push(letra)
        }
    }
    return novaLista.join('')
}

console.log(separaPar(lista));

