const numeroInput = document.getElementById('number');
const gerarBtn = document.getElementById('gerarTabuadaBtn');
const resultadoContainer = document.getElementById('tabuadaResultado');

gerarBtn.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);

    if(isNaN(numero)){
        resultadoContainer.innerHTML = "<p>Por favor, digite um numero válido.</p>";
        return;
    }

    resultadoContainer.innerHTML = " ";
    resultadoContainer.className = 'flex-conteiner';

    const operacoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão'];
    operacoes.forEach(op =>{
        const coluna = document.createElement('div');
        coluna.className = 'coluna-resultado';
        coluna.id = `${op.toLowerCase()}Resultado`;

        const titulo = document.createElement('h4');
        titulo.textContent = op;

        coluna.appendChild(titulo);
        resultadoContainer.appendChild(coluna)
    });
    
     const somaDiv = document.getElementById('somaResultado');
    const subtracaoDiv = document.getElementById('subtraçãoResultado');
    const multiplicacaoDiv = document.getElementById('multiplicaçãoResultado');
    const divisaoDiv = document.getElementById('divisãoResultado');

    for (let i = 1; i <= 10; i++) {
        
        somaDiv.innerHTML += `<p>${numero} + ${i} = ${numero + i}</p>`;
        
        subtracaoDiv.innerHTML += `<p>${numero} - ${i} = ${numero - i}</p>`;
        
        multiplicacaoDiv.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
        
        const resultadoDivisao = (numero * i) / numero;
        divisaoDiv.innerHTML += `<p>${numero * i} ÷ ${numero} = ${resultadoDivisao.toFixed(0)}</p>`;
    }
    
});