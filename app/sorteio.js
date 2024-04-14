const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()
const spanMenorValor = document.querySelector('#menor-valor')
const spanMaiorValor = document.querySelector('#maior-valor')
const btnIniciar = document.querySelector('#btn-iniciar')

btnIniciar.addEventListener('click', ()=>{
    btnIniciar.classList.add('hidden')
    recognition.start()
})

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

spanMenorValor.textContent = menorValor
spanMaiorValor.textContent = maiorValor

