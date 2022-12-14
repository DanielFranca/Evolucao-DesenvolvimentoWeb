/* A fim de manter o calendário atual ajustado com o movimento de translação da terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.

Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.

com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não. */

function verificaBissexto(ano){
    const divisivelPorQuatro = ano % 4 == 0
    const divisivelPorCem = ano % 100 == 0
    const divisivelPorQuatrocentos = ano % 400 == 0

    return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
}
console.log(verificaBissexto(2020))
console.log(verificaBissexto(2100))