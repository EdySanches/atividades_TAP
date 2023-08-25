export async function calcula_quadrados ( vetor ) {
    
    const soma_quadrados = await vetor.reduce((prev, current) =>  {
        return current + (prev**2);
    }, 0);
    
    console.log(`Exercicio 1 -> soma dos quadrados :`, soma_quadrados)
}