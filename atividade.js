import { imprime_nome } from "./ex1.js";
import { calcula_potencia } from './ex2.js'
import { calcula_produto } from "./ex3.js";
import { adiciona_produto } from "./ex4.js";

console.log(`---------------- ATIVIDADE 1 ----------------`)
console.log(`-------- Acadêmico: Edy Luiz Sanches --------`)

/* exercicio 1 */
const nome = `Edy Sanches` 
await imprime_nome(nome)

/* exercicio 2 */
const base = 3
const expoente = 2
await calcula_potencia(base, expoente)

/* exercicio 3 */
const preco = 10
const produtos = await calcula_produto(preco)

/* exercicio 4 */
const novo_produto = {
    id: 11,
    nome: 'frango',
    preco: 10,
    quantidade: 18
}
await adiciona_produto(novo_produto,produtos)