document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
      document.querySelector(".menu_btns").classList.toggle("open");
    });
  });