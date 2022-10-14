const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // retorna todas as  chaves e valores de pessoa

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'

})

pessoa.dataNascimento = '01/01/2017' // como esta definido no value de define property a data '01/01/2019', essa nova data não pode ser adicionada ou alterada
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // aqui todos os objetos são passados para dest e concatenados