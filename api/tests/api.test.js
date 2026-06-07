const { calcularIMC } = require('../src/imc');

describe('Teste de cálculo de IMC', () => {

    test('IMC de 70kg e 1.75m', () => {
        const resultado = calcularIMC(70, 1.75);

        expect(resultado.imc).toBeCloseTo(22.86, 2);
        expect(resultado.classificacao).toBe('Peso normal');
    });

});