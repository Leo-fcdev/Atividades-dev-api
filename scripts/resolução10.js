const nomesInput = document.getElementById('nomesInput');
const numeroTimesInput = document.getElementById('numeroTimesInput');
const sortearBtn = document.getElementById('sortearBtn');
const timesContainer = document.getElementById('timesSorteadosContainer');

function sortearTimes(listaNomes, numeroDeTimes) {
    if(numeroDeTimes <= 0 || listaNomes.length < numeroDeTimes) {
        alert("Número de times inválido ou nomes insuficientes.");
        return [];
    }

    const nomesEmbaralhados = [...listaNomes];
    for (let i = nomesEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nomesEmbaralhados[i], nomesEmbaralhados[j]] = [nomesEmbaralhados[j], nomesEmbaralhados[i]];
    }

    const times = [];
    for (let i = 0; i < numeroDeTimes; i++){
        times.push([]);
    }

    nomesEmbaralhados.forEach((nome, index) => {
        const timeIndex = index % numeroDeTimes;
        times[timeIndex].push(nome);
    });

    return times;
}

function exibirTimes(times) {
    timesContainer.innerHTML = '';

    times.forEach((time, index) => {
        const timeCard = document.createElement('div');
        timeCard.className = 'time-card';
        
        const titulo = document.createElement('h3');
        titulo.textContent = `Time ${index + 1}`;
        timeCard.appendChild(titulo);

        const listaJogadores = document.createElement('ul');
        time.forEach(jogador => {
            const itemJogador = document.createElement('li');
            itemJogador.textContent = jogador;
            listaJogadores.appendChild(itemJogador);
        });

        timeCard.appendChild(listaJogadores);
        timesContainer.appendChild(timeCard);
    });
}

sortearBtn.addEventListener('click', () => {
    const nomes = nomesInput.value.split('\n').filter(nome => nome.trim() !== '');
    
    const numeroDeTimes = parseInt(numeroTimesInput.value);

    if (nomes.length === 0) {
        alert("Por favor, insira os nomes dos participantes.");
        return;
    }

    const timesGerados = sortearTimes(nomes, numeroDeTimes);

    if (timesGerados.length > 0) {
        exibirTimes(timesGerados);
    }
});