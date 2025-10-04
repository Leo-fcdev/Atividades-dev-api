const apiKey = 'd941abe4f6b2ebf227c8cd3861775fc4';

const cidadeElemento = document.getElementById('cidade');
const tempCelsius = document.getElementById('temp-celsius');
const descricaoClima = document.getElementById('descricao-clima');
const converterBtn = document.getElementById('converterBtn');
const tempFahrenheit = document.getElementById('temp-fahrenheit');

let temperaturaCelsius = null;

async function getClima(lat, lon) {
    try{
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;

        const resposta = await fetch(apiUrl);
        const dados = await resposta.json();

        if (dados.cod !== 200){
            throw new Error(dados.message);
        }

        temperaturaCelsius = dados.main.temp;

        cidadeElemento.textContent = dados.name;
        tempCelsius.textContent = Math.round(temperaturaCelsius);
        descricaoClima.textContent = dados.weather[0].description;
    } catch(erro){
        cidadeElemento.textContent = "Erro ao buscar clima";
        console.error("Erro na API de clima:", erro);
    }
}

function converterTemp(){
    if(temperaturaCelsius === null){
        alert("Aguarde os dados do clima serem carregados.")
        return
    }

    const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32; 
    tempFahrenheit.textContent = `${temperaturaFahrenheit.toFixed(1)} °F`;
}

window.addEventListener('load', () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const lat = posicao.coords.latitude;
                const lon = posicao.coords.longitude;
                getClima(lat, lon);
            },

            (erro) => {
                cidadeElemento.textContent = "Permissão de localização negada.";
                console.error("Erro de geolocalização:", erro);
            }
        )
    } else{
        cidadeElemento.textContent = "Geolocalização não é suportada pelo seu navegador.";
    }
});

converterBtn.addEventListener('click' , converterTemp)