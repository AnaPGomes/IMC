const { calcularIMC } = require('../src/imc');

describe('teste de cálculo de IMC', () => {

    test(' 30kg e 1.30m', () => {
        const resultado = calcularIMC(30, 1.30);

        expect(resultado.imc).toBeCloseTo(17.75, 2);
        expect(resultado.classificacao).toBe('Abaixo do peso');
    });

});