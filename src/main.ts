import "./styles/index.css"


function updateCurrentYear() {
  const year = new Date().getFullYear();
  const spanElement = document.querySelector('.footer_copyright')!;
  spanElement.textContent = `© ${year} Dominik Kolarský`;
}

updateCurrentYear();