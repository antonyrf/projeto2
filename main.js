const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];
const categoria = [];

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-pessoa');
    const inputTelefoneContato = document.getElementById('numero-telefone');
    const inputCategoriaContato = document.getElementById('categoria');

    if (telefones.includes(inputTelefoneContato.value)){
        alert(`O número de contato: ${inputTelefoneContato.value} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td>${inputCategoriaContato.value}</td>`;
        linha += '<tr>';
        linhas += linha;
    
        inputNomeContato.value = ''
        inputTelefoneContato.value = ''
        inputCategoriaContato.value = ''
    
    }

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }