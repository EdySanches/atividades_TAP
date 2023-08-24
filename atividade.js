import { imprime_nome } from "./ex1.js";
import { calcula_potencia } from './ex2.js'

console.log(`---------------- ATIVIDADE 1 ----------------`)
console.log(`-------- Acadêmico: Edy Luiz Sanches --------`)

/* exercicio 1 */
const nome = `Edy Sanches` 
await imprime_nome(nome)

/* exercicio 2 */
const base = 3
const expoente = 2
await calcula_potencia(base, expoente)

