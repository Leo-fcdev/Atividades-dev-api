const textoInput = document.getElementById('textInput');
const contarBtn = document.getElementById('contarBtn');
const vogaisTotal = document.getElementById('vogaisTotal');
const consoantesTotal = document.getElementById('consoantesTotal');

contarBtn.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase();

    let vogaisCount = 0;
    let cosoantesCount = 0;

    const vogais = 'aáàâãeéêiíìoóôõuúû';
    const consoantes = 'bcdfghjklmnpqrstvwxyzç';

    for( const char of texto){
        if(vogais.includes(char)){
            vogaisCount++;
        } else if (consoantes.includes(char)){
            cosoantesCount++;
        }
    }

    vogaisTotal.textContent = vogaisCount;
    consoantesTotal.textContent = cosoantesCount;
});