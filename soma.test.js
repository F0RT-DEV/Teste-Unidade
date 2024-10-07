// Importa a função soma que será testada
const soma = require('./soma');

// Define o teste para verificar se a função soma retorna o resultado correto
test('soma 1 + 2 deve ser igual a 3', () => {
  // O expect verifica se a chamada da função soma(1, 2) retorna o valor esperado (3)
  expect(soma(1, 2)).toBe(3);
});