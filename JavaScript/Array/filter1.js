const produtos = [
    {nome: 'Notebook', preco: 4400.00, fragil: true},
    {nome: 'Microondas', preco: 700.00, fragil: true},
    {nome: 'Almofada', preco: 20.00, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
    
}))


const caro = produto => produtos.preco >=500
const fragil = produto => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))