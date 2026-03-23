/**
 * businessLogic.test.js
 * Testes de Integração — Regras de Negócio
 *
 * ⚠️  Estes testes já estão escritos.
 * ❌  Rode agora: npx vitest → tudo deve estar VERMELHO.
 * ✅  Seu trabalho é implementar businessLogic.js até tudo ficar VERDE.
 *     Lembre-se: você só pode usar funções de coreMath.js na implementação.
 *
 * Não altere este arquivo.
 */

import { describe, it, expect } from 'vitest';
import { calculateAverage, calculateDiscountedPrice } from '../src/businessLogic.js';

// -------------------------------------------------------------------
// calculateAverage()
// -------------------------------------------------------------------
describe('calculateAverage()', () => {
  it('deve calcular a média de três valores iguais', () => {
    expect(calculateAverage([100, 100, 100])).toBe(100);
  });

  it('deve calcular a média de valores variados', () => {
    expect(calculateAverage([10, 20, 30, 40])).toBe(25);
  });

  it('deve retornar o próprio valor quando o array tem um único elemento', () => {
    expect(calculateAverage([150])).toBe(150);
  });

  it('deve lançar erro se o array estiver vazio', () => {
    expect(() => calculateAverage([])).toThrow();
  });

  it('deve lançar erro se a entrada não for um array', () => {
    expect(() => calculateAverage(null)).toThrow();
    expect(() => calculateAverage('compras')).toThrow();
  });
});

// -------------------------------------------------------------------
// calculateDiscountedPrice()
// -------------------------------------------------------------------
describe('calculateDiscountedPrice()', () => {
  it('deve retornar o preço correto com 10% de desconto', () => {
    expect(calculateDiscountedPrice(200, 10)).toBe(180);
  });

  it('deve retornar o preço original quando o desconto é 0%', () => {
    expect(calculateDiscountedPrice(150, 0)).toBe(150);
  });

  it('deve retornar zero quando o desconto é 100%', () => {
    expect(calculateDiscountedPrice(300, 100)).toBe(0);
  });

  it('deve lançar erro se o desconto for maior que 100%', () => {
    expect(() => calculateDiscountedPrice(100, 110)).toThrow();
  });

  it('deve lançar erro se o desconto for negativo', () => {
    expect(() => calculateDiscountedPrice(100, -5)).toThrow();
  });

  it('deve lançar erro se o preço for zero', () => {
    expect(() => calculateDiscountedPrice(0, 10)).toThrow();
  });

  it('deve lançar erro se o preço for negativo', () => {
    expect(() => calculateDiscountedPrice(-50, 10)).toThrow();
  });
});
