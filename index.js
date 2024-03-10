const openAnswer = document.querySelectorAll(".openAnswer");
openAnswer.forEach((e) => {
  e.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.childNodes[3].classList.toggle(
      "d-block"
    );
  });
});

const menu = document.querySelector(".menu");
const navigate = document.querySelector(".navigate");

menu.addEventListener("click", function () {
  navigate.classList.toggle("d-menu");
});
AOS.init();