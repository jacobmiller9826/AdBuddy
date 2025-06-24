function showToast(message, duration = 2500) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('visible');
  });
});

function isProUser() {
  return localStorage.getItem('localreach_pro') === 'true';
}
