const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
recognition.lang = 'pt-BR'

recognition.addEventListener('result', function(e) {
    const chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    validacaoDaResposta(chute)
});

const elementoChute = document.getElementById('chute')

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span><br>
        `
}

recognition.addEventListener('end', () => recognition.start())
