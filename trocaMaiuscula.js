const string = 'The Quick Brown Fox'

function trocaTamanho(string) {
    let novoArray = []
   
    for(let indexLetra in string){
        const letra = string[indexLetra]
        if(letra === letra.toUpperCase()){
           novoArray.push(letra.toLowerCase())

        } else {
            novoArray.push(letra.toUpperCase())
        }
       
    }
    return novoArray.join('')

}



console.log(trocaTamanho(string));