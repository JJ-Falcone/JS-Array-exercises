const add = document.querySelector('.add')
const display = document.querySelector('.display')
const reset = document.querySelector('.reset')
const text = document.querySelector('.text')
const areaDisplay = document.querySelector('.areaDisplay')
const body = document.body


let array = []

add.addEventListener('click', () => {
    const texto = text.value
    if(texto !== '') {
    array.push(texto)
    text.value = ''
    
    console.log(array);
    }
})

display.addEventListener('click', () => displayOrReset('mostrar'))

function displayOrReset (funcao) {
    let textoMostrando = []
    areaDisplay.innerHTML = ''
    
    if (funcao === 'mostrar') {
    for(let index in array) {
        let valor = array[index]
        let textoAdicional = `Elemento ${parseInt(index) + 1} = ${valor}`
        
        
        textoMostrando.push(textoAdicional)
        
    }
    areaDisplay.innerHTML = textoMostrando.join('<br>')

    } else if(funcao === 'resetar') {
        array.splice(0, array.length)
        textoMostrando.splice(0, textoMostrando.length)
        console.log(textoMostrando);
        
    
    }
    

}
    


reset.addEventListener('click', () => displayOrReset('resetar'))
    


