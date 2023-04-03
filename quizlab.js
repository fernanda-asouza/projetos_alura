const form = document.getElementById('questao1');
const resultado = document.getElementById('resultado1');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form.opcao.value;
  if (resposta === 'certa') {
    resultado.textContent = 'Resposta correta!';
  } else {
    resultado.textContent = 'Resposta incorreta. Tente novamente.';
  }
});

const form2 = document.getElementById('questao2');
const resultado2 = document.getElementById('resultado2');

form2.addEventListener('submit', (event) => {
  event.preventDefault();
  const resposta = form2.opcao2.value;
  if (resposta === 'certa') {
    resultado2.textContent = 'Resposta correta!';
  } else {
    resultado2.textContent = 'Resposta incorreta.Tente novamente.';
  }
});
