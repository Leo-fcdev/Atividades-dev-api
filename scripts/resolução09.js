const fraseInput = document.getElementById('fraseInput');
const encontrarBtn = document.getElementById('encontrarBtn');
const resultadoPalavra = document.getElementById('resultadoMaiorPalavra');

function encontrarPalavra(frase){
    if (!frase || !frase.trim()){
        return "";
    }

    const palavra = frase.split(/\s+/);

    const maiorPalavra = palavra.reduce((maior, atual) => {
        const palavraLimpa = atual.replace(/[^a-zA-ZÀ-ú]/g, '');

        return palavraLimpa.length > maior.length ? palavraLimpa : maior;
    }, "");

    return maiorPalavra
}

encontrarBtn.addEventListener('click', () => {
    const frase = fraseInput.value;
    const maiorPalavra = encontrarPalavra(frase);

    if (maiorPalavra) {
        resultadoPalavra.textContent = maiorPalavra;
    } else {
        resultadoPalavra.textContent = "Nenhuma palavra encontrada.";
    }
});