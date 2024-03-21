const OPCIONES = ["Piedra", "Papel", "Tijera"];
let puntosHumano = 0;
let puntosMaquina = 0;
let nombreJugador = "Humano";

const puntosHumanoElement = document.getElementById('puntosHumano');
const puntosMaquinaElement = document.getElementById('puntosMaquina');
const nombreInput = document.getElementById('nombre');
const juegoDiv = document.getElementById('juego');


function jugadaMaquina() {
  return OPCIONES[Math.floor(Math.random() * 3)];
}

function iniciarJuego() {
  nombreJugador = nombreInput.value || "Humano";
  juegoDiv.style.display = 'block';
}

function jugadaHumano(jugadaHumano) {
  let jugadaMaquinaResultado = jugadaMaquina();
  let resultado = '';

  if (jugadaHumano === jugadaMaquinaResultado) {
    resultado = "Empate";
  } else if (
    (jugadaHumano === "Piedra" && jugadaMaquinaResultado === "Tijera") ||
    (jugadaHumano === "Papel" && jugadaMaquinaResultado === "Piedra") ||
    (jugadaHumano === "Tijera" && jugadaMaquinaResultado === "Papel")
  ) {
    resultado = "Ganaste";
    puntosHumano++;
  } else {
    resultado = "Perdiste";
    puntosMaquina++;
  }

  alert(`Humano: ${jugadaHumano} - Máquina: ${jugadaMaquinaResultado} - Resultado: ${resultado}`);

  puntosHumanoElement.textContent = puntosHumano;
  puntosMaquinaElement.textContent = puntosMaquina;

  if (puntosHumano === 3) {
    alert("¡Has ganado! Humano: 3 puntos - Máquina: " + puntosMaquina + " puntos");
    reiniciarJuego();
  } else if (puntosMaquina === 3) {
    alert("¡Has perdido! Humano: " + puntosHumano + " puntos - Máquina: 3 puntos");
    reiniciarJuego();
  }
}
function reiniciarJuego() {
  puntosHumano = 0;
  puntosMaquina = 0;
  puntosHumanoElement.textContent = puntosHumano;
  puntosMaquinaElement.textContent = puntosMaquina;
}
document.getElementById('piedra').addEventListener('click', () => jugadaHumano('Piedra'));
document.getElementById('papel').addEventListener('click', () => jugadaHumano('Papel'));
document.getElementById('tijera').addEventListener('click', () => jugadaHumano('Tijera'));
