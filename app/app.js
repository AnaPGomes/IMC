document.getElementById('calcular').addEventListener('click', () => {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura * altura);

    document.getElementById('resultado').innerText =
        `IMC: ${imc.toFixed(2)}`;
});