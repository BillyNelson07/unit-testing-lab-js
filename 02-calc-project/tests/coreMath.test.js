/**
 * coreMath.test.js
 * Testes Unitários — Motor Matemático
 *
 * Escreva os testes para cada função de coreMath.js.
 * Mínimo exigido: 12 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *  - add()      : valores positivos, negativos, zero
 *  - subtract() : valores positivos, resultado negativo, zero
 *  - multiply() : valores positivos, multiplicação por zero, negativo
 *  - divide()   : divisão exata, resultado decimal, divisão por zero (toThrow)
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
import { add, subtract, multiply, divide } from '../src/coreMath.js';

describe('add()', () => {
  it('CM-01: deve somar dois números positivos', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('CM-02: deve somar um número positivo e um negativo', () => {
    expect(add(10, -4)).toBe(6);
  });

  it('CM-03: deve somar com zero', () => {
    expect(add(5, 0)).toBe(5);
  });
});

describe('subtract()', () => {
  it('CM-04: deve subtrair dois números positivos', () => {
    expect(subtract(10, 3)).toBe(7);
  });

  it('CM-05: deve resultar em número negativo quando subtraendo é maior', () => {
    expect(subtract(5, 10)).toBe(-5);
  });

  it('CM-06: deve subtrair com zero', () => {
    expect(subtract(8, 0)).toBe(8);
  });
});

describe('multiply()', () => {
  it('CM-07: deve multiplicar dois números positivos', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  it('CM-08: deve retornar zero ao multiplicar por zero', () => {
    expect(multiply(10, 0)).toBe(0);
  });

  it('CM-09: deve resultar em número negativo ao multiplicar positivo por negativo', () => {
    expect(multiply(4, -3)).toBe(-12);
  });
});

describe('divide()', () => {
  it('CM-10: deve realizar divisão exata', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('CM-11: deve retornar resultado decimal', () => {
    expect(divide(5, 2)).toBe(2.5);
  });

  it('CM-12: deve lançar erro ao dividir por zero', () => {
    expect(() => divide(10, 0)).toThrow('Divisão por zero não é permitida');
  });
});
