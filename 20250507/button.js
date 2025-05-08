let btnvalue = 0;

const btn = document.getElementById("btn");

function plus() {
  btnvalue++;
  console.log("1");
  btn.innerHTML = btnvalue;
}
btn.addEventListener("click", plus);
