const listaDeCompras = {
    "Frutas": [],
    "Laticínios": [],
    "Congelados": [],
    "Doces": [],
    "Outros": []
};

function printarListaDeCompras () {
    console.log('Lista de compras:');
    for (categoria in listaDeCompras){
        console.log(`${categoria}:`);
        listaDeCompras[categoria].forEach(comida => console.log(`- ${comida}`));
    }
}

function adicionarComidasNaLista(){
    const comida = prompt('Qual comida você deseja inserir?');
    const categoria = prompt('Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)');

    if(listaDeCompras[categoria])
        listaDeCompras[categoria].push(comida);
    else{
        alert('Categoria não encontrada. Adicionado a categoria "outros"');
        listaDeCompras['Outros'].push(comida);
    }
}

function deletarComidasNaLista(){
    alert('Lista de compras atual:');
    printarListaDeCompras();

    const comida = prompt('Qual item da lista você deseja deletar?');
    let achou = false;

    for (categoria in listaDeCompras){
        if(listaDeCompras[categoria].includes(comida)){
            achou = true;
            listaDeCompras[categoria] = listaDeCompras[categoria].splice(0, 1, comida);
        }
    }

    if(achou)
        return alert('Item deletado com sucesso da sua lista de compras');

    alert('Item não encontrado na sua lista de compras!');
}

let opcao = prompt('Você deseja adicionar uma comida na sua lista de compras, deletar alguma comida ou nenhum? (adicionar, deletar, nenhum)');

while(opcao !== 'nenhum'){

    if(opcao === 'adicionar')
        adicionarComidasNaLista();
    
    if(opcao === 'deletar')
        deletarComidasNaLista();
    
    opcao = prompt('Você deseja adicionar uma comida na sua lista de compras, deletar alguma comida ou nenhum? (adicionar, deletar, nenhum)');
}

printarListaDeCompras();
