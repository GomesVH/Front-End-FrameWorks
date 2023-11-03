/* definir uma classe - simples -TS para atuar como model domain que será aplicado aos dados do componente ng-for.
Um model-domain nada mais é do que um cojunto de "regras" (estrutura de formato) pelas quais é adequado tratar os dados que estão a disposição da aplicação
*/

export class Filme{
    // definir os atributos/fields/props... que compõem o model domain
    titulo: string
    direcao: string
    elenco: string
    anoLancamento: number

    /* definir um cosntructor para a classe e, dessa forma, ter a possibilidade de inicializar, devidamente, cada uma das props descritas acima.
     */
    constructor(
        titulo: string,
        direcao: string,
        elenco: string,
        anoLancamento: number
    ){
        // acessar os atributos definidos na classe e atribui-los com os valores que serão criados na instancia do model/classe Filme()
        this.titulo = titulo
        this.direcao = direcao
        this.elenco = elenco
        this.anoLancamento = anoLancamento
    }
}