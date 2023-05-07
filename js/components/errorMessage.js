

export function errorMessage(error, containerClass) {
  const container = document.querySelector(containerClass);
  container.innerHTML = `<div class="error">${error}</div>`


}
