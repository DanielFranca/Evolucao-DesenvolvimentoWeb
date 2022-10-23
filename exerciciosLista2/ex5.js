/* Crie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo */ 

function maiorIgual(n1, n2){
    if(typeof n1 != typeof n2) return false

    return n1 >= n2

}

console.log(maiorIgual(5, 1))
console.log(maiorIgual(0, "0"))
console.log(maiorIgual(0, 0))

