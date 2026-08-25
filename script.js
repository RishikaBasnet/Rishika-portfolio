const container = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (10 + Math.random() * 20) + "s";
  span.style.width = (2 + Math.random() * 6) + "px";
  span.style.height = span.style.width;
  span.style.opacity = Math.random() * 0.3;

  container.appendChild(span);
}

document.querySelectorAll(".project-link").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById(btn.dataset.modal).classList.add("open");
  });
});

document.querySelectorAll(".modal-close").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.getElementById(btn.dataset.close).classList.remove("open");
  });
});

document.querySelectorAll(".modal").forEach(function (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) modal.classList.remove("open");
  });
});