document.entrada.addEventListener('submit',leformulario)
leformulario()
function leformulario(event) {
    event.preventDefault()
    const fruta = document.entrada.fruta.value
    const quantidade = document.entrada.fruta.value
    console.log(fruta,quantidade)

}