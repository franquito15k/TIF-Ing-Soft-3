const scanButtons = document.querySelectorAll(".btn.primary");

scanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Analizando...";
    setTimeout(() => {
      button.textContent = "Analizar ahora";
    }, 1200);
  });
});
