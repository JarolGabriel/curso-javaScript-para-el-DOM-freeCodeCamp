// Selecionar los elementos del DOM
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColoresHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiciAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiciAleatorio];
  }

  return colorHex;
}

boton.addEventListener("click", function () {
  let colorAleatorio = generarColoresHexAleatorio();
  //actualizar el texto
  color.textContent = colorAleatorio;
  //actualizar rl fondo
  document.body.style.backgroundColor = colorAleatorio;
});
