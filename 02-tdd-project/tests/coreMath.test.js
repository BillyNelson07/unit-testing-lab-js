/**
 * coreMath.test.js
 * Testes Unitários — Motor Matemático
 *
 * ⚠️  Estes testes já estão escritos.
 * ❌  Rode agora: npx vitest → tudo deve estar VERMELHO.
 * ✅  Seu trabalho é implementar coreMath.js até tudo ficar VERDE.
 *
 * Não altere este arquivo.
 */

import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../src/coreMath.js';

// -------------------------------------------------------------------
// add()
// -------------------------------------------------------------------
describe('add()', () => {
  it('deve somar dois números positivos', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('deve somar corretamente quando um valor é negativo', () => {
    expect(add(-4, 6)).toBe(2);
  });

  it('deve retornar o próprio número ao somar com zero', () => {
    expect(add(7, 0)).toBe(7);
  });
});

// -------------------------------------------------------------------
// subtract()
// -------------------------------------------------------------------
describe('subtract()', () => {
  it('deve subtrair dois números corretamente', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('deve retornar valor negativo quando o subtraendo é maior', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  it('deve retornar o próprio número ao subtrair zero', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

// -------------------------------------------------------------------
// multiply()
// -------------------------------------------------------------------
describe('multiply()', () => {
  it('deve multiplicar dois números positivos', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('deve retornar zero ao multiplicar por zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('deve retornar valor negativo ao multiplicar por número negativo', () => {
    expect(multiply(6, -2)).toBe(-12);
  });
});

// -------------------------------------------------------------------
// divide()
// -------------------------------------------------------------------
describe('divide()', () => {
  it('deve dividir dois números corretamente', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('deve retornar valor decimal em divisão não exata', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  it('deve lançar um erro ao tentar dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow('Divisão por zero não é permitida.');
  });
});
