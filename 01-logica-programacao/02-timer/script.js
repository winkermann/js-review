//configura a hora a partir do milissegundo 0 para usar como base para o temporizador do timer.
function getTimeFromSeconds(seconds) {
  //converte segundos para milissegundos
  const date = new Date(seconds * 1000);
  //formata a hora para o timezone correto, para considerar o tempo 00:00:00
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC',
  });
}

const timer = document.querySelector('.timer');
let seconds = 0;
let clock;

//função para iniciar o timer ao clicar no botão "iniciar";
function startsClock() {
  //a cada 1s adicionar um 1s na variável "seconds";
  clock = setInterval(function () {
    seconds++;
    //atualiza o innerHTML do timer (navegador) e formata para manter o padrão 00:00:00
    timer.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

document.addEventListener('click', function (e) {
  const el = e.target;

  //recupera o botão "iniciar"
  if (el.classList.contains('start')) {
    timer.classList.remove('timer-paused');
    //garante que não tem mais de um timer rodando;
    clearInterval(clock);
    //chama a função que inicia o timer;
    startsClock();
  }

  //recupera o botão "pausar"
  if (el.classList.contains('pause')) {
    clearInterval(clock);
    timer.classList.add('timer-paused');
  }

  //recupera o botão "zerar"
  if (el.classList.contains('reset')) {
    clearInterval(clock);
    timer.innerHTML = "00:00:00";
    timer.classList.remove('timer-paused');
    seconds = 0;
  }
})