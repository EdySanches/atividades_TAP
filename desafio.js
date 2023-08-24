import * as readline from 'node:readline'

export async function ler_string(){
    var string
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    leitor.question("R:", function(answer) {
        string = answer
        leitor.close()
    })

    return string
}

export async function obter_nome(){
    console.log(`\nQual seu primeiro nome?`)
    var nome = await ler_string()
    console.log(`\nBeleza ${nome}, vamos prosseguir.`)
}
