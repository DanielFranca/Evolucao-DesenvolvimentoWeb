for(let i of "daniel") {
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promise']

for(let i in assuntosEcma){
    console.log(i)
}

for (let assuntos of assuntosEcma) {
    console.log(assuntos)
}

const assuntosMap =new Map([
['map', {abordado: true}],
['set', {abordado: true}],
['promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)

}

for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'c','b'])
for(let letra of s) {
    console.log(letra)
}                                 