const numerosInput = document.getElementById('numerosInput');
const analisaBtn = document.getElementById('analisarBtn');

const menorValor = document.getElementById('menorValor');
const maiorValor = document.getElementById('maiorValor');
const mediaValor = document.getElementById('mediaValor');
const resultadoDiv = document.getElementById('resultadoAnalise');

function analisarArray(array) {
    if (!Array.isArray(array) || array.length === 0){
        return {erro: "Entrada inválida"};
    }

    const numerosValidos = array.filter(item => typeof item === 'number' && !isNaN(item));

    if (numerosValidos.length === 0){
        return { erro: "Os dados fornecidos não contêm números válidos."};
    }

    const maior = Math.max(...numerosValidos);
    const menor = Math.min(...numerosValidos);
    const soma = numerosValidos.reduce((acc, num) => acc + num, 0);
    const media = soma / numerosValidos.length;

    return{
        maior : maior,
        menor : menor,
        media: media.toFixed(2)
    }
}

analisaBtn.addEventListener('click', () => {
    const textoNumero = numerosInput.value;

    const arrayNumeros = textoNumero.split(',').map(item => parseFloat(item.trim()));


    const resultado = analisarArray(arrayNumeros);

    if (resultado.erro){

        alert(resultado.erro);

        menorValor.innerText = '-';
        maiorValor.innerText = '-';
        mediaValor.innerText = '-';
    } else{

        menorValor.innerText = resultado.menor;
        maiorValor.innerText = resultado.maior;
        mediaValor.innerText = resultado.media;
    }
});
