// Acesso aos elementos do documento
const form = document.getElementById('form');
const numA = document.getElementById('campo-a');
const numB = document.getElementById('campo-b');
const msgResposta = document.querySelector('.msgResposta');

// Função de validação
function validation() {
    const valorA = parseInt(numA.value);
    const valorB = parseInt(numB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        // Mensagem vermelha se nao tiverem valores
        msgResposta.style.color = 'red';
        return `*INVALIDO* Faltam valores nos campos acima.`;
    } else if (valorB > valorA) {
        // Mensagem verde se B > A
        msgResposta.style.color = 'green';
        return `*VALIDO* O valor do Campo B: ${valorB} é maior do que o valor do Campo A: ${valorA}.`;
    } else if (valorA > valorB) {
        // Mensagem vermelha para outras condições
        msgResposta.style.color = 'red';
        return `*INVALIDO* O valor do Campo A: ${valorA} é maior do que o valor do Campo B: ${valorB}.`;
    } else {
        // Mensagem vermelha se os valores forem iguais
        msgResposta.style.color = 'red';
        return `*INVALIDO* Os valores de ambos os campos estão iguais!`;
    }
}

// Adicionando um evento de submit ao formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário
    const resultadoValidacao = validation(); // Executa a função de validação
    // Exibe a mensagem resultante
    msgResposta.innerHTML = resultadoValidacao;
    msgResposta.style.display = "block";
});

// Limpar a mensagem ao alterar os valores
function clearMessage() {
    msgResposta.innerHTML = '';
    msgResposta.style.display = 'none';
    msgResposta.style.color = ''; // Remove a coloração específica
}

/* Se o usuário digitar outra coisa dentro dos inputs, o EventListener vai usar a function clearMessage para limpar */
numA.addEventListener('input', clearMessage);
numB.addEventListener('input', clearMessage);
