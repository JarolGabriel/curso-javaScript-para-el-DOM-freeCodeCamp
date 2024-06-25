const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el valor del texto del parrafo
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

const actualizacionColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.background = colorRGB;
};

//para actualizar el color rojo

inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizacionColor(rojo, verde, azul);
});
//para actualizar el color verde

inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoRojo.innerText = verde;
  actualizacionColor(rojo, verde, azul);
});
//para actualizar el color azul

inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoRojo.innerText = azul;
  actualizacionColor(rojo, verde, azul);
});
