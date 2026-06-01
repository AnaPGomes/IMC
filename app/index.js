const API_URL = 'https://sua-api.onrender.com'; // trocar depois do deploy

document.getElementById('calcular').addEventListener('click', async () => {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const div = document.getElementById('resultado');

  try {
    const res = await fetch(`${API_URL}/imc`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ peso, altura })
    });
    const data = await res.json();

    if (data.erro) {
      div.textContent = `Erro: ${data.erro}`;
    } else {
      div.textContent = `IMC: ${data.imc} — ${data.classificacao}`;
    }
  } catch (e) {
    div.textContent = 'Erro ao conectar com a API';
  }
});