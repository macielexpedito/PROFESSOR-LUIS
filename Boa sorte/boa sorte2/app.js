const form = document.getElementById('formulario');
const listaVisual = document.getElementById('listaPessoas');

function lerDados() {
    const dados = localStorage.getItem('meu_banco_json');
    return dados ? JSON.parse(dados) : []; 
}

function salvarDados(lista) {
    const jsonString = JSON.stringify(lista); 
    localStorage.setItem('meu_banco_json', jsonString);
}

function atualizarTela() {
    const pessoas = lerDados();
    listaVisual.innerHTML = pessoas.map(p => `<li>${p.nome} - ${p.idade} anos - ${p.curso} - ${p.modulo}</li>`).join('');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const novaPessoa = new Pessoa(
        document.getElementById('nome').value,
        document.getElementById('idade').value,
        document.getElementById('curso').value,
        document.getElementById('modulo').value
    );

    const lista = lerDados();
    lista.push(novaPessoa);
    
    salvarDados(lista); 
    atualizarTela();   
    form.reset();
});


atualizarTela();
