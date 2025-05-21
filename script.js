function bukaUndangan() {
  window.location.href = "main.html";
}

window.addEventListener('DOMContentLoaded', () => {
  const musik = document.getElementById('musik');
  if (musik) musik.volume = 0.5;
});