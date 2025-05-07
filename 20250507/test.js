//GET https://api.nexon.com/users/{userId}/sessions

// function nexonAPIGet() {
//   let userid = "ehgns980504@naver.com";

//   const h3 = document.getElementById("h3");

//   h3.innerText = userid;

//   console.log(h3);
// }
// document.addEventListener("DOMContentLoaded", nexonAPIGet);
const button = document.getElementById("test");

function btntest() {
  const userid = "ehgns980504@naver.com";
  const h3 = document.getElementById("h3");

  h3.innerText = userid;
}
button.addEventListener("click", btntest);
