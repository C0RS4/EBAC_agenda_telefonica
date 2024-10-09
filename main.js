const form = document.getElementById('form-agenda');
const contatos = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    adicionaLinha();
    atualizaAgenda();
    atualizaQuantidade();

});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('telefone');
    
    if (numeros.includes(inputNumeroContato.value)) {
        alert(`O número de contato, ${inputNumeroContato.value}, já existe na sua Agenda`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}

function atualizaQuantidade() {
    const quantidadeContatos = numeros.length;
    document.getElementById('valor').innerHTML = quantidadeContatos;
}
