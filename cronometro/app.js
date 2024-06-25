const cronometro = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");

let [horas, minutos, segundos] = [0, 0, 0];

let intervalosDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormatos(segundos);
  const minutosConFormato = asignarFormatos(minutos);
  const horasConFormato = asignarFormatos(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

const asignarFormatos = (unidadDeTiempo) => {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
};

botonInicioPausa.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervalosDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove("iniciar");
    botonInicioPausa.classList.add("pausar");
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervalosDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove("pausar");
    botonInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});

botonReiniciar.addEventListener("click", function () {
  window.clearInterval(intervalosDeTiempo);

  horas = 0;
  minutos = 0;
  segundos = 0;

  cronometro.innerText = "00:00:00";

  botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonInicioPausa.classList.remove("pausar");
  botonInicioPausa.classList.add("iniciar");

  estadoCronometro = "pausaso";
});
