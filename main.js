document.entrada.addEventListener('submit',leformulario)
function leformulario(event) {
    event.preventDefault()
    const fruta = document.entrada.fruta.value
    const quantidade = document.entrada.quantidade.value
    console.log(fruta,quantidade)

}