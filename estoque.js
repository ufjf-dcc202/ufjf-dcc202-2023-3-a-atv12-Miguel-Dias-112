//estoque.js
let estoque={
    joao: [
        {
            tipo: "maça",
            qtd: 1
        }
    ],
    maria: [
        {
            tipo: "abacate",
            qtd: 1
        }
    ],
}
export function getEstoque(){
    return structuredClone(estoque)
}

