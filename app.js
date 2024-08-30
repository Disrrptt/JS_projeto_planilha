function calcularPrestacao() {
    const vf = parseFloat(document.getElementById('vf').value);
    const n = parseFloat(document.getElementById('n').value);
    const i = parseFloat(document.getElementById('i').value) / 100; // Convertendo a taxa de juros para decimal

    if (isNaN(vf) || isNaN(n) || isNaN(i)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const pmt = (vf * i) / (1 - Math.pow(1 + i, -n));

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerText = `A prestação é: R$ ${pmt.toFixed(2)}`;

    // Adicionando efeito de fading
    resultadoElement.classList.add('show');
    setTimeout(() => {
        resultadoElement.classList.remove('show');
    }, 2000);
}
