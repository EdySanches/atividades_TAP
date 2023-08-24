export async function calcula_produto( preco ) {
    let array_produtos = []
    const nome_produtos = [ 'arroz', 'feijao', 'carne', 'queijo', 'leite',
                            'banana', 'ovo', 'mamao', 'refrigerante', 'peixe' ]
    let produto = {
        id: 0,
        nome: '',
        preco: 0,
        quantidade: 0
    }

    for(let i=0;i<=9;i++) {
        array_produtos[i] = {
            id: i,
            nome: nome_produtos[i],
            preco: preco,
            quantidade: 2
        }
    }
    console.log(`Exercicio 3 -> array de produtos:`, array_produtos)
    return array_produtos
}