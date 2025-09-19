const dataFinal = new Date("2026-08-23T00:00:00");

const elementoDias = document.getElementById('days');
const elementoHoras = document.getElementById('hours');
const elementoMinutos = document.getElementById('minutes');
const elementoSegundos = document.getElementById('seconds');

function atualizarContador(){
    const atual = new Date();

    const diferenca = dataFinal - atual;

    if( diferenca < 0){
        clearInterval(intervalo);
        document.getElementById("title").innerHTML = "Parabens por nossos 3 anos cara";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    elementoDias.textContent = String(dias).padStart(2, '0')
    elementoHoras.textContent = String(horas).padStart(2, '0')
    elementoMinutos.textContent = String(minutos).padStart(2, '0')
    elementoSegundos.textContent = String(segundos).padStart(2, '0')
}

const intervalo = setInterval(atualizarContador, 1000)

atualizarContador();