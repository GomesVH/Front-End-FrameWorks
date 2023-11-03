// declarar variaveis consideradas estruturalmente ideais em sua composição 
// a var abaixo não anotação e nem mesmo valor inicial definido 
// var nome

var nome: string = 'Chespirito'
var pontuacao: number = 74 
var pontuacaoB: number = 16.5
// inferencia de tipo sendo aplicada abaixo
var soma = pontuacao + pontuacaoB// a atribuicao de uma variavel com o valor default null
var estranha = null
// praticar a definição de tipo composto |
var umaCoisa: any | undefined = estranha 
var doida = pontuacao + nome
// declarar uma var com a anotação de tipo booleano
var doisCaminhos: boolean = true

// exibir os valores das variaveis
console.log('Var nome é:' + nome)
console.log('Var pontuacao é:' + pontuacao)
console.log('Var pontuacaoB é:' + pontuacao)
console.log('Var soma é:' + soma)
console.log('Var estranha é:' + estranha)
console.log('Var umaCoisa é:' + umaCoisa)
console.log('Var doida é:' + doida)
console.log('Var doisCaminhos é:' + doisCaminhos)
// observar a definicao de tipo de algumas variaveis
console.log(typeof soma)
console.log(typeof estranha)
console.log(typeof umaCoisa)
console.log(typeof doida)