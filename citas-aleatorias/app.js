let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

const generadorEnterosAleatorios = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const cambiarCita = () => {
  let indiciAleatorio = generadorEnterosAleatorios(0, citas.length);
  citaElem.innerText = `"${citas[indiciAleatorio].texto}"`;
  autorElem.innerText = citas[indiciAleatorio].autor;
};

cambiarCita();

botonElem.addEventListener("click", cambiarCita);
