const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const calcularbtn = document.getElementById('calcular-btn');
const resultadoDiv = document.getElementById('resultado');

calcularbtn.addEventListener('click', () => {
    const altura = parseFloat(alturaInput.value.replace(',' , '.'));
    const peso = parseFloat(pesoInput.value.replace(',' , '.'));

    if(isNaN(altura) || isNaN(peso) || altura <= 0 || peso <=0){
        resultadoDiv.innerHTML = `<p>Por favor, insara valores válidos para altura e peso</p>`;
        resultadoDiv.className = 'erro';
        return
    }

    const IMC = peso / (altura * altura);

    let classificacao = '';
    let classesCss = '';

    if(IMC < 18.5){
        classificacao = 'Abaixo do peso';
        classesCss = 'atencao';
    } else if(IMC >= 18.5 && IMC <= 24.9){
        classificacao = 'Peso ideal';
        classesCss = 'normal';
    } else if(IMC >= 25 && IMC <= 29.9){
        classificacao = 'Sobrepeso';
        classesCss = 'atencao';
    } else{
        classificacao = 'Obesidade';
        classesCss = 'perigo'
    }

    resultadoDiv.innerHTML = `
        <p>Seu IMC é: <strong>${IMC.toFixed(2)}</strong></p>
        <p>Classificação: <strong>${classificacao}</strong></p>`;

    resultadoDiv.className = classesCss;    
});