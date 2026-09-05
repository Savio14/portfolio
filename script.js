const botaoTema = document.getElementById('theme-toggle');

function aplicarTema(tema) {
  if (tema === 'light') {
    document.body.classList.add('light');
    botaoTema.textContent = '☀️ Claro';
  } else {
    document.body.classList.remove('light');
    botaoTema.textContent = '🌙 Escuro';
  }
}

const temaSalvo = localStorage.getItem('tema') || 'dark';
aplicarTema(temaSalvo);

botaoTema.addEventListener('click', () => {
  const temaAtual = document.body.classList.contains('light') ? 'light' : 'dark';
  const novoTema = temaAtual === 'light' ? 'dark' : 'light';
  localStorage.setItem('tema', novoTema);
  aplicarTema(novoTema);
});
