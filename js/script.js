const displayTempo = document.querySelector('#displayTempo');
const botaoIniciar = document.querySelector('#botaoIniciar');
const botaoPausar = document.querySelector('#botaoPausar');
const botaoReiniciar = document.querySelector('#botaoReiniciar');
const statusCronometro = document.querySelector('#statusCronometro');
const painel = document.querySelector('.painel');

let idIntervalo;
let tempo = 0;
let estaRodando = false;

function atualizarTempo() {
  const horas = Math.floor(tempo / 3600000);
  const minutos = Math.floor((tempo % 3600000) / 60000);
  const segundos = Math.floor((tempo % 60000) / 1000);
  const milissegundos = tempo % 1000;

  const tempoFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}.${milissegundos.toString().padStart(3, '0')}`;
  displayTempo.textContent = tempoFormatado;
}

function iniciarCronometro() {
  if (estaRodando) {
    return;
  }

  estaRodando = true;
  statusCronometro.textContent = 'Em execução';
  painel.classList.add('ativo');

  idIntervalo = setInterval(() => {
    tempo++;
    atualizarTempo();
  }, 1);
}

function pausarCronometro() {
  clearInterval(idIntervalo);
  estaRodando = false;
  statusCronometro.textContent = tempo > 0 ? 'Pausado' : 'Pronto';
  painel.classList.remove('ativo');
}

function reiniciarCronometro() {
  clearInterval(idIntervalo);
  tempo = 0;
  estaRodando = false;
  atualizarTempo();
  statusCronometro.textContent = 'Pronto';
  painel.classList.remove('ativo');
}

botaoIniciar.addEventListener('click', iniciarCronometro);
botaoPausar.addEventListener('click', pausarCronometro);
botaoReiniciar.addEventListener('click', reiniciarCronometro);
