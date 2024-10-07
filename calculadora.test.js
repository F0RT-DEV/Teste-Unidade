const calculadora = require('./calculadora');

test('a soma dos numeros dentro do array deve ser igual a 120', () => {
    expect(calculadora('+',[15,23,32,50])).toBe(120);
});

test('a subtração dos numeros dentro do array deve ser igual a -50', () => {
    expect(calculadora("-",[30,20])).toBe(-50);
});

test('a multiplicação dos numeros dentro do array deve ser igual a 224', () => {
    expect(calculadora("*",[5,7,32])).toBe(224);
});

test('No parametro NUMEROS não deve ser aceito strings', () => {
    expect(calculadora('+', ["ola",15,23])).not.toBe("ola");
});

test('O array não pode esta vazio', () => {
    expect(calculadora('+', [])).toBeNull;
});

test('No parametro OPERACAO deve ser aceito apenas as operações aritméticos', () => {
    expect(calculadora('R', [15,23,32,50])).toBeUndefined();
});