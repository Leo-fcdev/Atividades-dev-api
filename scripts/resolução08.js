const tamanhoInput = document.getElementById('tamanhoCupom');
const gerarBtn = document.getElementById('gerarBtn');
const cupomGerado = document.getElementById('cupomGerado');

function gerarCupom(tamanho){
    if(typeof tamanho !== 'number' || tamanho <= 0){
        return "Tamanho inválido";
    }

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cupom = '';

    for (let i = 0; i < tamanho; i++){
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        cupom += caracteres[indiceAleatorio];
    }
    
    return cupom;
}

gerarBtn.addEventListener('click', () => {
    const tamanhoDoCupom = parseInt(tamanhoInput.value);

    const novoCupom = gerarCupom(tamanhoDoCupom);

    cupomGerado.textContent = novoCupom;
})
