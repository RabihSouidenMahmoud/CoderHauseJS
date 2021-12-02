let input = document.querySelector("input");
let agregarBoton = document.querySelector(".agregarboton");
let ul = document.querySelector("ul");
let limpio = document.querySelector(".limpio");

agregarBoton.addEventListener("click", (e) => {
  e.preventDefault();

  let texto = input.value;

  if (texto !== "") {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = texto;

    li.appendChild(p);
    li.appendChild(botonBorrar());
    ul.appendChild(li);

    input.value = "";
    limpio.style.display = "none";
  }
});

function botonBorrar() {
  let borrar = document.createElement("button");

  borrar.textContent = "X";
  borrar.className = "boton-borrar";

  borrar.addEventListener("click", (e) => {
    let objeto = e.target.parentElement;
    ul.removeChild(objeto);

    let objetos = document.querySelectorAll("li");

    if (objetos.length === 0) {
      limpio.style.display = "block";
    }
  });

  return borrar;
}