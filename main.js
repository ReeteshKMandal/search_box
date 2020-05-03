
const input = document.getElementById("input");
const btn = document.getElementById("btn");

const expand = () => {
  btn.classList.toggle("close");
  input.classList.toggle("square");
};

btn.addEventListener("click", expand);
