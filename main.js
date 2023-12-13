document.entrada.addEventListener('submit',leformulario)

const olJoao = document.querySelector("#olJoao")
const olMaria = document.querySelector("#olMaria")

function leformulario(event) {
    event.preventDefault()
    const fruta = document.entrada.fruta.value
    const quantidade = document.entrada.quantidade.value
    console.log(fruta,quantidade)

    let origem = document.entrada.origem.value
    let destino = document.entrada.destino.value
    console.log(`Solicitado ${origem} doa ${quantidade} ${fruta} para ${destino}`)
}