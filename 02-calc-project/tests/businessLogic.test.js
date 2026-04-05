/**
 * businessLogic.test.js
 * Testes de Integração — Regras de Negócio
 *
 * Escreva os testes para cada função de businessLogic.js.
 * Mínimo exigido: 8 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *
 *  calculateAverage():
 *   - média de array com múltiplos valores
 *   - array com um único elemento
 *   - erro para array vazio
 *   - erro para entrada inválida (null, string, etc.)
 *
 *  calculateDiscountedPrice():
 *   - preço com desconto válido
 *   - desconto 0% retorna preço original
 *   - desconto 100% retorna zero
 *   - erro para desconto > 100
 *   - erro para preço zero ou negativo
 *
 * Estrutura sugerida:
 *
 *   describe('nome da função', () => {
 *     it('deve fazer algo', () => {
 *       expect(funcao(args)).toBe(resultado)
 *     })
 *   })
 */

import { describe, it, expect } from 'vitest';
import { calculateAverage, calculateDiscountedPrice } from '../src/businessLogic.js';

describe('calculateAverage()', () => {
  it('BL-01: deve calcular a média de um array com múltiplos valores', () => {
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });

  it('BL-02: deve retornar o próprio valor para um array com um único elemento', () => {
    expect(calculateAverage([50])).toBe(50);
  });

  it('BL-03: deve lançar erro para array vazio', () => {
    expect(() => calculateAverage([])).toThrow('O array de compras não pode estar vazio');
  });

  it('BL-04: deve lançar erro para entrada inválida (null)', () => {
    expect(() => calculateAverage(null)).toThrow('O parâmetro deve ser um array');
  });

  it('BL-05: deve lançar erro para entrada inválida (string)', () => {
    expect(() => calculateAverage('não é um array')).toThrow('O parâmetro deve ser um array');
  });
});

describe('calculateDiscountedPrice()', () => {
  it('BL-06: deve aplicar um desconto válido corretamente', () => {
    // 10% de desconto sobre R$ 200 = R$ 20 de desconto
    // Resultado esperado: R$ 180
    expect(calculateDiscountedPrice(200, 10)).toBe(180);
  });

  it('BL-07: desconto de 0% deve retornar o preço original', () => {
    expect(calculateDiscountedPrice(100, 0)).toBe(100);
  });

  it('BL-08: desconto de 100% deve retornar zero', () => {
    expect(calculateDiscountedPrice(100, 100)).toBe(0);
  });

  it('BL-09: deve lançar erro para desconto maior que 100%', () => {
    expect(() => calculateDiscountedPrice(100, 101)).toThrow(
      'O desconto deve estar entre 0 e 100 por cento'
    );
  });

  it('BL-10: deve lançar erro para desconto negativo', () => {
    expect(() => calculateDiscountedPrice(100, -10)).toThrow(
      'O desconto deve estar entre 0 e 100 por cento'
    );
  });

  it('BL-11: deve lançar erro para preço zero', () => {
    expect(() => calculateDiscountedPrice(0, 10)).toThrow(
      'O preço deve ser maior que zero'
    );
  });

  it('BL-12: deve lançar erro para preço negativo', () => {
    expect(() => calculateDiscountedPrice(-50, 10)).toThrow(
      'O preço deve ser maior que zero'
    );
  });
});
