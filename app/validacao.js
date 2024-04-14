const musica = new Audio ('/vitoria.mp3')

function validacaoDaResposta(chute){
    const numero = +chute //passa o chute de str para int

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if(numeroNaoPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre 
        ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto){
        musica.play()
        background()
        document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h2>O Número Secreto era ${numeroSecreto}</h2>
        <button id='btn-jogar-novamente'>Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O Número Secreto é menor<i class="fa-solid fa-down-long"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O Número Secreto é maior<i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'btn-jogar-novamente'){
        window.location.reload()
    }
})

function background(){
    const elementoBody = document.querySelector('body')
    elementoBody.setAttribute('style', 'background-color: var(--secundary-bg-color);')
}


