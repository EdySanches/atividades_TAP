import * as readline from 'node:readline/promises';  // This uses the promise-based APIs
import { stdin as input, stdout as output } from 'node:process';


export async function busca_user_por_tel(usuarios) {

    const rl = readline.createInterface({ input, output });

    const tel = await rl.question("Exercicio 2 -> Qual o numero do usuario? ");   
    rl.close();                    

    const usuario = usuarios.find((user) => {
        return user.tel == tel;
    });
    if (usuario){
        console.log(`              Usuario:`, usuario)
    }
    else console.log(`              Usuario nao encontrado`)

};
