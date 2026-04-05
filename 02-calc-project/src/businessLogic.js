/**
 * businessLogic.js
 * Regras de Negócio da TechStore
 *
 * Implemente as duas funções de negócio abaixo.
 * Não altere os nomes das funções nem os parâmetros.
 *
 * Regras:
 *  - NÃO use os operadores nativos (+, -, *, /) diretamente.
 *  - OBRIGATÓRIO: importe e use as funções de coreMath.js.
 *  - Valide as entradas e lance Errors quando necessário.
 */

import { add, subtract, multiply, divide } from './coreMath.js';

export function calculateAverage(purchases) {
  // Validación de entrada
  if (!Array.isArray(purchases)) {
    throw new Error('O parâmetro deve ser um array');
  }

  if (purchases.length === 0) {
    throw new Error('O array de compras não pode estar vazio');
  }

  // Calcular la suma usando add()
  const sum = purchases.reduce((acc, current) => add(acc, current), 0);

  // Calcular la media usando divide()
  return divide(sum, purchases.length);
}

export function calculateDiscountedPrice(price, discountPercent) {
  // Validar precio
  if (price <= 0) {
    throw new Error('O preço deve ser maior que zero');
  }

  // Validar descuento
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error('O desconto deve estar entre 0 e 100 por cento');
  }

  // Calcular valor do desconto usando multiply() e divide()
  const discountAmount = divide(multiply(price, discountPercent), 100);

  // Aplicar desconto usando subtract()
  return subtract(price, discountAmount);
}
